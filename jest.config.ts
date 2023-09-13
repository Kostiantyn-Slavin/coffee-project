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
  coverageReporters: ['json', 'html'],
  resetMocks: true,
  coverageProvider: 'v8',
};
