const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('./tsconfig');

module.exports = {
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.jsx?$': 'ts-jest',
  },
  testEnvironment: 'jsdom',
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
  roots: ['<rootDir>'],
  moduleDirectories: [
    ".",
    "src",
    "src/utils",
    'node_modules',
    '<rootDir>/node_modules',
  ]
};
