document.getElementById('calc-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get User Inputs
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const age = parseInt(document.getElementById('age').value);
    const gender = document.getElementById("gender").value;
    const activity = parseFloat(document.getElementById('activity').value);
    const carbType = parseFloat(document.getElementById('carb-type').value);

     if (!weight || !height || !age || !activity || !carbType) {
        alert("กรุณากรอกข้อมูลให้ครบถ้วน!");
        return;
    }

 // คำนวณ BMR
    let bmr;
    if (gender === "male") {
        bmr = 66 + (13.7 * weight) + (5 * height) - (6.8 * age);
    } else {
        bmr = 665 + (9.6 * weight) + (1.8 * height) - (4.7 * age);
    }

    // Calculate TDEE
    const tdee = bmr * activity;

    // Calculate Carb Intake
    const carbs = ((tdee * carbType) / 4) / 15;

    // Display Results
    document.getElementById('bmr-result').textContent = `BMR: ${bmr.toFixed(2)} แคลอรี/วัน`;
    document.getElementById('tdee-result').textContent = `TDEE: ${tdee.toFixed(2)} แคลอรี/วัน`;
    document.getElementById('carb-result').textContent = `ควรรับประทานคาร์โบไฮเดรต: ${carbs.toFixed(2)} คาร์บต่อวัน`;

    document.getElementById('results').classList.remove('hidden');
});
