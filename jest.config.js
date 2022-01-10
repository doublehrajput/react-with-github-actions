module.exports = {
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '^@app(.*)$': '<rootDir>/src$1'
  },
  roots: ['<rootDir>/src'],
  setupFilesAfterEnv: ['<rootDir>/setUpTests.js'], // sets ut test files,
  testEnvironment: 'jsdom',
  testMatch: ['<rootDir>/src/**/?(*.)test.{js,jsx}'], // looks for your test
  testPathIgnorePatterns: ['/node_modules/', '/public/', '/build/'],
  transform: {
    '\\.(js|jsx)?$': 'babel-jest'
  }
};
