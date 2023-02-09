const nextJest = require('next/jest')

const createJestConfig = nextJest({
    dir: './',
})

/** @type {import('jest').Config} */
const customJestConfig = {
    moduleDirectories: ['node_modules'],
    moduleNameMapper: {
        '@/(.*)$': '<rootDir>/src/$1',
    },
    testEnvironment: 'jest-environment-jsdom',
    testPathIgnorePatterns: ['__tests__/e2e/'],
    testMatch: ["**/__tests__/**/*.ts?(x)", "**/?(*.)+test.ts?(x)"]
}

module.exports = createJestConfig(customJestConfig)