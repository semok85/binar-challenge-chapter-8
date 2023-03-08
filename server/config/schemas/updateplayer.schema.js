module.exports = {
  type: "object",
  properties: {
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
