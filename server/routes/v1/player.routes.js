const PlayerController = require("../../controllers/player.controller");
const playerRouter = require("express").Router();

/**
 * @swagger
 * /players:
 *  get:
 *      tags:
 *          - Player
 *      title: Users
 *      summary: Dislplay list all players
 *      description: Display list all players
 *      responses :
 *          200:
 *              description: Success
 *          400:
 *              description: Failed
 *      security:
 *      - bearerAuth: []
 */
playerRouter.get("/", PlayerController.getPlayers);

/**
 * @swagger
 * /players:
 *   post:
 *     tags:
 *       - Player
 *     title: Player registration
 *     summary: Endpoint of player registration
 *     description: create new player
 *     requestBody:
 *         description: Registration body
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Players'
 *     responses:
 *       201:
 *         description: Success
 *       400:
 *         description: Failed
 */
playerRouter.post("/", PlayerController.createPlayer);

/**
 * @swagger
 * /players/{id}:
 *  get:
 *      tags:
 *          - Player
 *      title: Player
 *      summary: Get player by player id
 *      description: Get player by player id
 *      operationId: getPlayerById
 *      parameters:
 *          - name: id
 *            in: path
 *            description: 'The id that needs to be fetch'
 *            required: true
 *            schema:
 *              type: integer
 *      responses :
 *          200:
 *              description: Success
 *          404:
 *              description: Not Found
 *      security:
 *      - bearerAuth: []
 */
playerRouter.get("/:id", PlayerController.getPlayerById);

/**
 * @swagger
 * /players/{id}:
 *  put:
 *      tags:
 *          - Player
 *      title: Player
 *      summary: Update player by player id
 *      description: Update player by player id
 *      operationId: updatePlayer
 *      parameters:
 *          - name: id
 *            in: path
 *            description: 'The id that needs to be fetch'
 *            required: true
 *            schema:
 *              type: integer
 *      requestBody:
 *         description: Update player's body
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Players'
 *      responses :
 *          200:
 *              description: Success
 *          404:
 *              description: Not Found
 *      security:
 *      - bearerAuth: []
 */
playerRouter.put("/:id", PlayerController.updatePlayer);

/**
 * @swagger
 * /players/{id}:
 *  delete:
 *      tags:
 *          - Player
 *      title: Player
 *      summary: Delete player by player id
 *      description: Delete player by player id
 *      operationId: deletePlayer
 *      parameters:
 *          - name: id
 *            in: path
 *            description: 'The id that needs to be fetch'
 *            required: true
 *            schema:
 *              type: integer
 *      responses :
 *          200:
 *              description: Success
 *          400:
 *              description: Failed
 *      security:
 *      - bearerAuth: []
 */
playerRouter.delete("/:id", PlayerController.deletePlayer);

/**
 * @swagger
 * /players/exp/{id}:
 *  post:
 *      tags:
 *          - Player
 *      title: Player
 *      summary: Update player's experience by player id
 *      description: Update player's experience by player id
 *      operationId: updateExperience
 *      parameters:
 *          - name: id
 *            in: path
 *            description: 'The id that needs to be fetch'
 *            required: true
 *            schema:
 *              type: integer
 *      requestBody:
 *         description: Experience body
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Experience'
 *      responses :
 *          200:
 *              description: Success
 *          400:
 *              description: Failed
 *      security:
 *      - bearerAuth: []
 */
playerRouter.post("/exp/:id", PlayerController.updateExperience);

module.exports = playerRouter;
