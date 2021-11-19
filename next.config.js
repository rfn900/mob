module.exports = {
  env: {
    MONGODB_URL: "mongodb://localhost:27017/affiliate_report",
    BCRYPT_SALT_ROUNDS: process.env.BCRYPT_SALT_ROUNDS,
    JWT_SECRET: process.env.JWT_SECRET,
    JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN,
    SERVER_URL: process.env.SERVER_URL,
  },
};
