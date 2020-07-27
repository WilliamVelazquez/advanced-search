import { isEmptyObject } from '../utils/validations';

const testing = 'Hello World';

describe('Setting Tests', () => {
  test('Contains a String', () => {
    expect(testing).toMatch(/Hello/);
  });
});

describe('Testing validations', () => {
  test('Empty Object Validation', () => {
    const empty = isEmptyObject({});
    expect(empty).toBeTruthy();
  });
});
