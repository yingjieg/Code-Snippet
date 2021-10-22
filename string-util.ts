export function encodeStringToHex(str: string): string {
  let number = '';
  const length = str.length;
  for (let i = 0; i < length; i++) number += str.charCodeAt(i).toString(16);
  return number;
}


export function decodeHexString(str: string): string {
  let string = '';
  //str = str.slice(2);
  const length = str.length;
  for (let i = 0; i < length; ) {
    const code = str.slice(i, (i += 2));
    string += String.fromCharCode(parseInt(code, 16));
  }
  return string;
}


const message = "helloworld!@#<>_+`";

const encoded = encodeStringToHex(message);

console.log(message);
console.log(encoded);
console.log(decodeHexString(encoded));


