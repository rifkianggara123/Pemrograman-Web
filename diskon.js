const membershipStatus = {
    Lena: true,  // Lena memiliki membership
    Rio: false   // Rio tidak memiliki membership
};

// Fungsi untuk mengecek membership dan menampilkan hasil
function checkMembership(name, isMember) {
    const message = isMember ? "Mendapatkan diskon 5%" : "Tidak mendapatkan diskon";
    document.getElementById(`${name.toLowerCase()}-result`).textContent = `${name}: ${message}`;
}

// Mengecek membership untuk Lena dan Rio
checkMembership('Lena', membershipStatus.Lena);
checkMembership('Rio', membershipStatus.Rio);
