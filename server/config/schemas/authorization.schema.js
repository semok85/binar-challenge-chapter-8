module.exports = {
  type: "object",
  properties: {
    username: {
      type: "string",
      description: "this is username of user",
      required: true,
      example: "PussySlayer613",
    },
    password: {
      type: "string",
      description: "user's password",
      required: true,
      example: "youknownothing",
    },
  },
};
