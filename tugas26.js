let deret = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];
let cek = isFinite(deret);

for (let i = 0; i < deret.length; i++) {
  if (cek == true) {
    console.log("Angka", deret[i], "Infinity");
  } else {
    console.log("Angka", deret[i], "NOT Infinity");
  }
}
