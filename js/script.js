// Fungsi untuk menghitung BMI dan menampilkan hasil
function calculateBMI() {
  // Ambil nilai input untuk gender, umur, tinggi, dan berat
  const genderElements = document.getElementsByName("gender");
  let gender = "";
  for (const element of genderElements) {
    if (element.checked) {
      gender = element.value;
      break;
    }
  }

  const ageInput = document.getElementById("age").value;
  const heightInput = document.getElementById("height").value;
  const weightInput = document.getElementById("weight").value;

  // Validasi input
  if (
    gender === "" ||
    ageInput === "" ||
    heightInput === "" ||
    weightInput === ""
  ) {
    alert("Mohon isi semua data yang diperlukan.");
    return;
  }

  const age = parseInt(ageInput);
  const height = parseFloat(heightInput);
  const weight = parseFloat(weightInput);

  // Cek apakah nilai input positif
  if (age <= 0 || height <= 0 || weight <= 0) {
    alert("Umur, tinggi, dan berat badan harus berupa angka positif.");
    return;
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
        <h2>Hasil</h2>
      </header>
      <p>Jenis Kelamin: <strong>${gender}</strong></p>
      <p>Umur: <strong>${age}</strong> tahun</p>
      <br />
      <div class="result-section" id="result-group-box">
        <p>BMI : <strong>${bmi.toFixed(1)}</strong></p>  
        <h4 id="category">${category}</h4>
      </div>
      <br /><br />
      <p>Penjelasan:</p>
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
