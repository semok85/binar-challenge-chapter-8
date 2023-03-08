module.exports = {
  type: "object",
  properties: {
    username: {
      type: "string",
      description: "this is username of user",
      required: true,
      example: "PussyPlayer613",
    },
    password: {
      type: "string",
      description: "user's password",
      required: true,
      example: "123456",
    },
  },
};
