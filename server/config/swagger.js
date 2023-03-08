const swaggerJsdoc = require("swagger-jsdoc");
const authorizationSchema = require("./schemas/authorization.schema");
const experienceSchema = require("./schemas/experience.schema");
const playerSchema = require("./schemas/player.schema");
const updateplayerSchema = require("./schemas/updateplayer.schema");

const options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "API BiGames Documentations",
      version: "1.0.0",
      description:
        "This API provides endpoints for managing players in a game. It allows clients to retrieve information about all players, retrieve information about a specific player by ID, update a player by ID, delete a player by ID, and create a new player and update a player's experience level by ID. Clients can interact with the API using standard HTTP methods, including `GET, PUT, POST, and DELETE`.\n\n" +
        "The API uses bearer token authentication to ensure that only authorized clients can access the endpoints. Clients must include a valid bearer token in the Authorization header of each request.\n\n" +
        "Responses from the API are returned in JSON format and include details about the player(s) being retrieved, updated, or deleted. In the case of errors, the API returns an appropriate error response code and message in the response body.",
    },
    servers: [{ url: "http://localhost:4000/api/v1" }],
    tags: [
      {
        name: "Auth",
        description: "Auth endpoint",
      },
      {
        name: "Player",
        description: "Operations about player",
      },
    ],
    components: {
      schemas: {
        Authorization: authorizationSchema,
        Players: playerSchema,
        Experience: experienceSchema,
        Updateplayer: updateplayerSchema,
      },
      securitySchemes: {
        bearerAuth: {
          type: "http",
          name: "Authorization",
          scheme: "bearer",
          bearerFormat: "JWT",
          in: "header",
        },
      },
    },
  },
  apis: ["./server/routes/v1/*.js"], // your endpoint location
};

const specs = swaggerJsdoc(options);

module.exports = specs;
