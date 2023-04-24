const myMock = require('./mock');

test('check if mock text are not empty', () => {
  expect(myMock.defaultWrongText).toBeDefined();
  expect(myMock.helperText).toBeDefined();
});
