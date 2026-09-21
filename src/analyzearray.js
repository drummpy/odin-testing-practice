export default function analyzearray(array) {
  return {
    average: array.reduce((sum, num) => sum + num, 0) / array.length,
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length,
  };
}
