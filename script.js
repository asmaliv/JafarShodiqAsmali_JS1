
// if, else
let umur = 18;

if (umur >= 18) {
  console.log("Anda sudah dewasa.");
} else {
  console.log("Anda belum dewasa.");
}

// nested if
let nilai = 80;

if (nilai >= 90) {
  console.log("Anda mendapatkan nilai A.");
} else if (nilai >= 80) {
  console.log("Anda mendapatkan nilai B.");
} else if (nilai >= 70) {
  console.log("Anda mendapatkan nilai C.");
} else {
  console.log("Anda mendapatkan nilai D.");
}

// switch case
let hari = "Senin";

switch (hari) {
  case "Senin":
    console.log("Hari ini adalah hari Senin.");
    break;
  case "Selasa":
    console.log("Hari ini adalah hari Selasa.");
    break;
  case "Rabu":
    console.log("Hari ini adalah hari Rabu.");
    break;
  case "Kamis":
    console.log("Hari ini adalah hari Kamis.");
    break;
  case "Jumat":
    console.log("Hari ini adalah hari Jumat.");
    break;
  case "Sabtu":
    console.log("Hari ini adalah hari Sabtu.");
    break;
  case "Minggu":
    console.log("Hari ini adalah hari Minggu.");
    break;
  default:
    console.log("Hari yang Anda masukkan tidak valid.");
}

// for statement
// for loop
let a = 0;
for (a = 0; a < 10; a++) {
  console.log("Nilai a adalah " + a);
}

// foreach loop
let angka = [1, 2, 3, 4, 5];

angka.forEach(function (angka) {
  console.log("Angka adalah " + angka);
});

// while, do while
// while loop
let i = 0;
while (i < 10) {
  console.log("Nilai i adalah " + i);
  i++;
}

// do while loop
let u = 0;
do {
  console.log("Nilai u adalah " + u);
  u++;
} while (u < 10);

// function
function greet(nama) {
    console.log("Halo, " + nama + "!");
  }
  
  greet("Ja'far Shodiq Asmali");
  