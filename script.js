document.getElementById('calc-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get User Inputs
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const age = parseInt(document.getElementById('age').value);
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const activity = parseFloat(document.getElementById('activity').value);
    const carbType = parseFloat(document.getElementById('carb-type').value);

    // Calculate BMR
    const bmr = gender === 'male'
        ? (10 * weight) + (6.25 * height) - (5 * age) + 5
        : (10 * weight) + (6.25 * height) - (5 * age) - 161;

    // Calculate TDEE
    const tdee = bmr * activity;

    // Calculate Carb Intake
    const carbs = ((tdee * carbType) / 4) / 15;

    // Display Results
    document.getElementById('bmr-result').textContent = `BMR: ${bmr.toFixed(2)} kcal/day`;
    document.getElementById('tdee-result').textContent = `TDEE: ${tdee.toFixed(2)} kcal/day`;
    document.getElementById('carb-result').textContent = `ปริมาณคาร์โบไฮเดรต: ${carbs.toFixed(2)} กรัม/มื้อ (15 มื้อ)`;

    document.getElementById('results').classList.remove('hidden');
});
