function flippingBits(n) {
  let bits = "";
  let binary = "";
  let binaryNum = n.toString(2);

  // add zeroes to the binary num
  for (let i = 0; i < 32 - binaryNum.length; i++) {
    bits += "0";
  }

  bits += binaryNum;

  // flip bits
  for (let bit of bits) {
    if (bit == "1") {
      binary += "0";
    } else {
      binary += "1";
    }
  }

  // convert binary number to decimal

  const lastIndex = binary.length - 1;
  let total = BigInt(0);

  for (let i = 0; i < binary.length; i++) {
    if (binary[lastIndex - i] === "1") {
      total += BigInt(2) ** BigInt(i);
    }
  }

  return total;
}

console.log(flippingBits(3));
flippingBits(214783);
flippingBits(1);
flippingBits(2);
