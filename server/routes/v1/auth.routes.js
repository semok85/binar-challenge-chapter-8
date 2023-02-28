const authRouter = require("express").Router();
const { playerLogin } = require("../../controllers/auth.controller");

/**
 * @swagger
 * /login:
 *   post:
 *     tags:
 *       - Authorization
 *     title: Player login
 *     summary: Endpoint of player login
 *     description: player login and generate token to authorization
 *     requestBody:
 *         description: Registration body
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Authorization'
 *     responses:
 *       201:
 *         description: Success
 *       401:
 *         description: Failed
 */
authRouter.post("/", playerLogin);

module.exports = authRouter;
