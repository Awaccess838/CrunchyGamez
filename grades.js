let rowCount = 1;

document.getElementById('add-row').addEventListener('click', function () {
    rowCount++;
    const gradeRows = document.getElementById('grade-rows');
    const newRow = document.createElement('div');
    newRow.className = 'grade-row';
    newRow.innerHTML = `
        <label for="grade-${rowCount}">Class ${rowCount}:</label>
        <input type="text" id="grade-${rowCount}" placeholder="e.g., 85">
    `;
    gradeRows.appendChild(newRow);
});

document.getElementById('gpa-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    const gradesArray = [];
    for (let i = 1; i <= rowCount; i++) {
        const gradeInput = document.getElementById(`grade-${i}`).value;
        const grade = parseFloat(gradeInput.trim());
        if (!isNaN(grade) && grade >= 0 && grade <= 100) {
            gradesArray.push(grade);
        }
    }

    if (gradesArray.length === 0) {
        document.getElementById('result').textContent = 'Please enter valid grades.';
        return;
    }

    const gpa = calculateGPA(gradesArray);
    document.getElementById('result').textContent = `Your GPA is: ${gpa.toFixed(2)}`;
});

function calculateGPA(grades) {
    const totalPoints = grades.reduce((sum, grade) => {
        if (grade >= 90) return sum + 4.0; // A
        if (grade >= 80) return sum + 3.0; // B
        if (grade >= 70) return sum + 2.0; // C
        if (grade >= 60) return sum + 1.0; // D
        return sum; // F
    }, 0);
    return totalPoints / grades.length;
}
