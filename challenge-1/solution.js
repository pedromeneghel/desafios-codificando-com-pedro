export default function maskify(input) {
  // const inputLength = input.length;
  // const lastFourChars = input.slice(-4);
  // const finalString = lastFourChars.padStart(inputLength, '#');


  // return finalString;

  return input.slice(-4).padStart(input.length, '#');
}