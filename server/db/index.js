const { Client } = require("pg");

const client = new Client({
  user: "kingyiusuen",
  host: "localhost",
  database: "discord_clone",
  password: "",
  port: 5432,
});

const query = async (text, params) => {
  const start = Date.now();
  const results = await client.query(text, params);
  const duration = Date.now() - start;
  console.log("Date:", new Date().toLocaleString());
  console.log("Executed query:", { text, duration, rows: results.rowCount });
  return results;
};

module.exports = {
  client,
  query
};