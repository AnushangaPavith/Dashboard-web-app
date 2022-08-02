// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
const originalError = console.error
beforeAll(() => {
  console.error = (...args) => {
    if (/Warning: React does not recognize the `data-testId` prop on a DOM element./.test(args[0])) {
      return
    }
  }
})