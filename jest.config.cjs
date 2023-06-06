module.exports = {
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
    '^@pages/(.*)$': '<rootDir>/src/pages/$1',
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@layout/(.*)$': '<rootDir>/src/layout/index.tsx',
    '^@styles$': '<rootDir>/src/styles/index.ts',
    '^@styles/(.*)$': '<rootDir>/src/styles/$1',
    '^@services$': '<rootDir>/src/services/index.ts',
  },
}
