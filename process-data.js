const processData = (data) => {
  const validCodePattern = /^[A-Za-z]{3}[0-9]{4}$/;

  const normalizedValidCodes = data
    .filter((code) => validCodePattern.test(code))
    .map((code) => code.toUpperCase())
    .sort();

  const totalCodes = data.length;
  const validCodes = normalizedValidCodes.length;
  const invalidCodes = totalCodes - validCodes;

  return {
    totalCodes: totalCodes,
    validCodes: validCodes,
    invalidCodes: invalidCodes,
    normalizedValidCodes: normalizedValidCodes,
  };
};

const sampleInput = [
  "abc1234",
  "XYZ0001",
  "123ABCD",
  "A1B2C3D",
  "lmn9876",
  "DEF5678",
];

console.log(processData(sampleInput));

module.exports = { processData };
