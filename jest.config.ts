// require('ts-node').register({
//   transpileOnly: true,
// });

// require('tsconfig-paths').register();
export default {
  displayName: 'coffee-project',
  testEnvironment: 'jsdom',
  extensionsToTreatAsEsm: ['.ts'],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
      isolatedModules: true,
    },
  },
  transformIgnorePatterns: ['node_modules/(?!.*\\.mjs$)'],
  resetMocks: true,
};
