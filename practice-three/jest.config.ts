const config = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.ts?$': 'ts-jest',
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.svg$': 'svg-jest',
    '.+\\.(css|png|webp|)$': 'jest-transform-stub',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/(?!variables/.*)'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
    axios: 'axios/dist/node/axios.cjs',
  },
  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    '!**/*.stories.tsx',
    '!**/*.config.ts',
    '!**/node_modules/**',
    '!**/mocks/**',
    '!**/constants/**',
    '!**/types/**',
    '!**/styles/**',
    '!**/useFetching.ts',
    '!**/Icon/**',
    '!**/themes/**',
    '!**/test/**',
  ],
  setupFilesAfterEnv: ['<rootDir>/setupTest.ts'],
};

export default config;
