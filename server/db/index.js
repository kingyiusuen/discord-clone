const { Client } = require("pg");

const client = new Client({
  user: "kingyiusuen",
  host: "localhost",
  database: "discord_clone",
  password: "",
  port: 5432,
});

const query = async (text, params) => {
  return await client.query(text, params);
};

module.exports = {
  client,
  query
};