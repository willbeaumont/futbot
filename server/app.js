require('dotenv').config()
const express = require("express");
const diagQuery = require("./diagQuery");

const app = express();

app.get("/api", (request, response) => {
  console.log("Getting root");

  console.log(request.query.question);
  const query = request.query.question ? request.query.question : " ";

  console.log(request.query.context);
  const context = request.query.context
    ? JSON.parse(request.query.context)
    : null;

  const projectId = process.env.PROJECT_ID; // projectId: ID of the GCP project where Dialogflow agent is deployed
  const sessionId = "123456789"; // sessionId: String representing a random number or hashed user identifier
  const languageCode = "en"; // languageCode: Indicates the language Dialogflow agent should use to detect intents
  diagQuery
    .executeQuery(projectId, sessionId, languageCode, query, context)
    .then((result) => response.json(result));
});

module.exports = app;
