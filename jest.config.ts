export default {
  displayName: 'coffee-project',
  preset: 'jest-preset-angular',
  globalSetup: 'jest-preset-angular/global-setup',
  moduleFileExtensions: ['ts', 'js', 'html', 'json'],
  coveragePathIgnorePatterns: ['/node_modules/', '/modules/*.*/'],
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
