export default function toCamelCase(str) {
  // const words = str.split(/[-_, ]+/);
  // const parseStr = words
  //   .map((word, index) => index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
  //   .join('')

  // return parseStr;

  return str.replace(/[-_\s]\w/gi, function (ch) {
    return ch[1].toUpperCase();
  })
}