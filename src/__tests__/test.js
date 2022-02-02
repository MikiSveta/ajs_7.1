import Validator from '../app';

test('check userName', () => {
  const result = new Validator('for123-sort').validateUsername();
  expect(result).toBe(true);
});

test('- at the beginning', () => {
  const result = new Validator('-for123-sort').validateUsername();
  expect(result).toBe(false);
});

test('- at the end', () => {
  const result = new Validator('for123-sort-').validateUsername();
  expect(result).toBe(false);
});

test('_ at the beginning', () => {
  const result = new Validator('_for123-sort').validateUsername();
  expect(result).toBe(false);
});

test('_ at the end', () => {
  const result = new Validator('for123-sort_').validateUsername();
  expect(result).toBe(false);
});

test('1 at the beginning', () => {
  const result = new Validator('1for123-sort').validateUsername();
  expect(result).toBe(false);
});

test('1 at the end', () => {
  const result = new Validator('for123-sort1').validateUsername();
  expect(result).toBe(false);
});

test('more than 3 numbers', () => {
  const result = new Validator('for12345-sort').validateUsername();
  expect(result).toBe(false);
});
