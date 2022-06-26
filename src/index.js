module.exports = function reverse (n) {
  let absNumber = Math.abs(n);
  console.log(Math.abs(n));
  console.log(Number(absNumber.toString().split('').reverse().join('')));
  return Number(absNumber.toString().split('').reverse().join(''));
}