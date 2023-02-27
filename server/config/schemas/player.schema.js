module.exports = {
  type: "object",
  properties: {
    username: {
      type: "string",
      description: "this is username of user",
      required: true,
      example: "semoktavianus",
    },
    email: {
      type: "string",
      description: "user's email",
      required: true,
      example: "semoktavianus@mail.com",
    },
    password: {
      type: "string",
      description: "user's password",
      required: true,
    },
  },
};
