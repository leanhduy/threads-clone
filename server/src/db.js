import { Sequelize } from "sequelize";

// Passing a connection URI

const sequelize = new Sequelize(
  "postgres://postgres:Duymvp123!@localhost:5432/dvdrental_codefirst"
);

try {
  await sequelize.authenticate();
  console.log("Connection has been established successfully!");
} catch (err) {
  console.error("Unable to connect to the database: ", err);
}
