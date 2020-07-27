const testing = 'Hello World';

describe('Setting Tests', () => {
  test('Contains a String', () => {
    expect(testing).toMatch(/Hello/);
  });
});
