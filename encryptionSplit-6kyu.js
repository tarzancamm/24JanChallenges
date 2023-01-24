// Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

// Examples:
// encrypt("012345", 1)  =>  "135024"
// encrypt("012345", 2)  =>  "135024"  ->  "304152"
// encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

// Together with the encryption function, you should also implement a decryption function which reverses the process.

// If the string S is an empty value or the integer N is not positive, return the first argument without changes.

const encrypt = (text, n) => {
  if ((text === '' || text === null || n < 0)) {
    return text;
  }

  let newString = [];
  let nextString = text;
  let times = 1;

  while (times <= n) {
    for (let i = 1; i < nextString.length; i += 2) {
      newString.push(nextString[i]);
    }
    for (let k = 0; k < nextString.length; k += 2) {
      newString.push(nextString[k]);
    }
    times++;
    nextString = newString.join("");
    newString = [];
  }
  return nextString;
};

const decrypt = (encryptedText, n) => {
  if ((encryptedText === '' || encryptedText === null || n < 0)) {
    return encryptedText;
  }

  let decrypted = [];
  let decryptedStr = encryptedText;
  let times = 1;

  while (times <= n) {
    let evenEncrypted = decryptedStr.slice(
      decryptedStr.length / 2,
      decryptedStr.length
    );
    let oddEncrypted = decryptedStr.substring(0, decryptedStr.length / 2);
    for (let i = 0; i < decryptedStr.length; i++) {
      decrypted.push(evenEncrypted[i]);
      decrypted.push(oddEncrypted[i]);
    }
    times++;
    decryptedStr = decrypted.join("");
    decrypted = [];
  }
  return decryptedStr;
};

console.log(encrypt("This is a test!", 2)); //"s eT ashi tist!"
console.log(decrypt("hsi  etTi sats!", 1)); // "This is a test!"
console.log(decrypt("s eT ashi tist!", 2)); //"This is a test!"
