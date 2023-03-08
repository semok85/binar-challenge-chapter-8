const swaggerJsdoc = require('swagger-jsdoc');
const playerSchema = require("./schemas/player-schema");
const experienceSchema = require("./schemas/experience-schema");

const options = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Dokumentasi API BiGames',
            version: '1.0.0',
            description: 'Ini adalah dokumentasi dari API BiGames'
        },
        servers: [
            { url: "http://localhost:4000/api/v1" }
        ],
        tags: [
            {
                name: "Player",
                description: "Dokumentasi untuk player",
            }, 
        
        ],
        components: {
            schemas: { 
                Players: playerSchema,
                Experience: experienceSchema
            },
            securitySchemes: {
                bearerAuth: {
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT"
                }
            }
        }
    },
    apis: ["./server/routes/v1/*.js"] // lokasi endpoint Anda
};

const specs = swaggerJsdoc(options);

module.exports = specs;