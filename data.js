const nama = "Aldy Fariha";
let usia = 33;

let biodata = document.getElementById("biodata");

function generateBiodata() {
let generasi;

if (usia > 13 && usia < 18) {
    generasi = "Anda masih remaja";
}
else if (usia > 18 && usia < 30) {
    generasi = "Selamat anda sudah Dewasa";
}
else if (usia > 30) {
    generasi = "Anda sudah tua";
}
else {
    generasi = "Anda masih bayi";
}
    biodata.innerHTML = generasi;
}

console.log(`Nama saya adalah ${nama} dan usia saya adalah ${usia}. Terima Kasih`)
generateBiodata();