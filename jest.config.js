module.exports = {
  collectCoverageFrom: ["./src/**/*.js"],
  modulePathIgnorePatterns: ["<rootDir>/src/dev.js"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"]
};
