// Array of student objects
const students = [
    {
        name: "Sumaiya",
        marks: 85
    },
    {
        name: "Momo",
        marks: 72
    },
    {
        name: "Sadia",
        marks: 58
    },
    {
        name: "Mim",
        marks: 45
    }
];

// Arrow function to calculate grade
const getGrade = (marks) => {

    if (marks >= 80) {
        return "A+";
    }
    else if (marks >= 70) {
        return "A";
    }
    else if (marks >= 60) {
        return "B";
    }
    else if (marks >= 50) {
        return "C";
    }
    else if (marks >= 40) {
        return "D";
    }
    else {
        return "F";
    }
};

// Select result container
const result = document.getElementById("result");

// Display each student
for (const student of students) {

    const grade = getGrade(student.marks);

    result.innerHTML += `
        <div class="student-card">

            <h2>${student.name}</h2>

            <p class="marks">
                Marks: <strong>${student.marks}</strong>
            </p>

            <p>
                Grade:
                <span class="grade">${grade}</span>
            </p>

        </div>
    `;
}