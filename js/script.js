// Fungsi untuk menghitung BMI dan menampilkan hasil
function calculateBMI() {
  // Mencegah form auto reset setelah disubmit
  bmiForm.addEventListener("submit", function (event) {
    event.preventDefault();
  });

  // Ambil nilai input untuk gender, umur, tinggi, dan berat
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const age = document.getElementById("age").value;
  const height = document.getElementById("height").value;
  const weight = document.getElementById("weight").value;

  // Validasi input
  if (gender === "" || age === "" || height === "" || weight === "") {
    alert("Mohon isi semua data yang diperlukan.");
    return false;
  }

  // Cek apakah nilai input positif
  if (age <= 0 || height <= 0 || weight <= 0) {
    alert("Umur, tinggi, dan berat badan harus berupa angka positif.");
    return false;
  }

  // Hitung BMI: berat (kg) / (tinggi (m) * tinggi (m))
  const heightInMeters = height / 100; // Konversi tinggi ke meter
  const bmi = weight / (heightInMeters * heightInMeters);

  // Tentukan kategori BMI
  let category;
  let category_color;

  if (bmi < 18.5) {
    category = "Kekurangan Berat Badan";
    category_color = "#56BADC";
  } else if (bmi < 24.9) {
    category = "Normal (Sehat)";
    category_color = "#53AD8A";
  } else if (bmi < 29.9) {
    category = "Kelebihan Berat Badan";
    category_color = "#F5C139";
  } else {
    category = "Obesitas";
    category_color = "#F3947E";
  }

  // Tampilkan hasil dengan penjelasan berdasarkan gender, umur, dan BMI
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `
      <header class="text-center">
        <h2>HASIL PERHITUNGAN</h2>
      </header>
      <p>Jenis Kelamin: <strong>${gender}</strong></p>
      <p>Umur: <strong>${age}</strong> tahun</p>
      <div class="result-section" id="result-group-box">
        <p>BMI : ${bmi.toFixed(1)}</p>  
        <p id="category">${category}</p>
      </div>
      <p><strong>Penjelasan:</strong></p>
      <article>
          BMI antara 18.5 dan 24.9 dianggap sebagai berat badan sehat.<br />
          Jika BMI Anda di bawah 18.5, Anda mungkin perlu meningkatkan asupan gizi.<br />
          Jika di atas 24.9, menjaga pola makan dan berolahraga dapat membantu.
      </article>
  `;
  document.getElementById("result-group-box").style.backgroundColor =
    category_color;
  document.getElementById("result").style.display = "block";
}

function resetForm() {
  bmiForm.reset();
  document.getElementById("result").style.display = "none";
}
