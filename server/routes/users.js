const bcrypt = require("bcrypt");
const usersRouter = require("express").Router();

const db = require("../db");

// Get a user's profile
usersRouter.get("/:id", async (request, response) => {
  const userId = request.params.id;

  try {
    const result = await db.query(
      "SELECT * FROM users WHERE id = $1",
      [userId],
    );
    response.status(200).json(result.rows);
  } catch (err) {
    console.log(err);
    response.status(500).send("A database error has occurred");
  }
});

// Create a new user
usersRouter.post("/", async (request, response) => {
  const { username, password } = request.body;

  let result;
  try {
    result = await db.query(
      "SELECT * FROM users WHERE username = $1",
      [username]
    );
    if (result.rows.length) {
      response.status(400).send("The username has already been taken");
      return;
    }

    // Use bcrpyt to create password hash
    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);

    result = await db.query(
      "INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id",
      [username, passwordHash],
    );
    const newId = result.rows[0].id;
    response.status(201).send(`User added with ID: ${newId}`);
  } catch (err) {
    console.log(err);
    response.status(500).send("A database error has occurred");
  }
});

// Authenticate a user
usersRouter.post("/login", async (request, response) => {
  const { username, password } = request.body;

  try {
    const result = await db.query(
      "SELECT * FROM users WHERE username = $1",
      [username],
    );
    const isPasswordCorrect =
      !result
        ? false
        : await bcrypt.compare(password, result.rows[0].password);
    if (isPasswordCorrect) {
      response.status(200).send("Login successful");
    } else {
      response.status(401).send("Invalid username or password");
    }
  } catch (err) {
    console.log(err);
    response.status(500).send("A database error has occurred");
  }
});

// Delete a user's profile
usersRouter.delete("/:id", async (request, response) => {
  const userId = request.params.id;

  try {
    const result = await db.query(
      "DELETE FROM users WHERE id = $1 RETURNING id",
      [userId],
    );
    if (result.length) {
      response.status(200).json(`User deleted with ID: ${userId}`);
    } else {
      response.status(401).send("This user does not exist");
    }
  } catch (err) {
    console.log(err);
    response.status(500).send("A database error has occurred");
  }
});

module.exports = usersRouter;