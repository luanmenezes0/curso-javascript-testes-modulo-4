module.exports = {
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/build/'],
  transform: {
    '^.+\\.(js|ts)$': '<rootDir>/node_modules/babel-jest',
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^test/(.*)$': '<rootDir>/test/$1',
  },
  collectCoverageFrom: ['<rootDir>/src/**/*.js'],
  coveragePathIgnorePatterns: [
    '<rootDir>/src/app.js',
    '<rootDir>/src/bin',
  ],
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
};
