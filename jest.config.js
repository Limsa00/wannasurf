require('dotenv').config({ path: '.env.local' });

module.exports = {
  transform: {
    "^.+\\.jsx?$": "babel-jest"
  },
  transformIgnorePatterns: [
    "/node_modules/"
  ],
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "identity-obj-proxy"
},
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
};
