module.exports = {
  type: "object",
  properties: {
    username: {
      type: "string",
      description: "this is username of user",
      required: true,
      example: "semoktavianus",
    },
    password: {
      type: "string",
      description: "user's password",
      required: true,
    },
  },
};
