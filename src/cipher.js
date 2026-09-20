export default function cipher(string, offset) {
  return Array.from(string)
    .map((char) => {
      let code = char.charCodeAt(0);
      if (code >= 97 && code <= 122) {
        code = ((code - 97 + offset) % 26) + 97;
      } else if (code >= 65 && code <= 90) {
        code = ((code - 65 + offset) % 26) + 65;
      }
      return String.fromCharCode(code);
    })
    .join("");
}
