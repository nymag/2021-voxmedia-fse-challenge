function checkEquals(expected, actual) {
  const result = expected == actual ? "passed" : "failed";
  return `${result} (expected: ${expected}, actual: ${actual})`;
}
