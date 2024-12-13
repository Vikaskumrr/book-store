// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
// src/setupTests.ts
import '@testing-library/jest-dom';
import { server } from './mocks/server'; // If you use MSW (see below)

// Optional: Configure Enzyme adapter (if using Enzyme)
// import { configure } from 'enzyme';
// import Adapter from '@wojtekmaj/enzyme-adapter-react-17'; // Or your React version
// configure({ adapter: new Adapter() });

// Establish API mocking before all tests.
beforeAll(() => server.listen());
// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());
// Clean up after the tests are finished.
afterAll(() => server.close());
