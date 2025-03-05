document.addEventListener('DOMContentLoaded', function() {
    const studentForm = document.getElementById('studentForm');
    const studentDetails = document.getElementById('studentDetails');

    studentForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const studentName = document.getElementById('studentName').value;
    const studentAge = document.getElementById('studentAge').value;
    studentDetails.innerHTML = `
    <h2>Submitted Student Details:</h2>
    <p><strong>Name:</strong> ${studentName}</p>
    <p><strong>Age:</strong> ${studentAge}</p>
    `;
    studentForm.reset();
    });

    const courseForm = document.getElementById('courseForm');
    const courseDetails = document.getElementById('courseDetails');

    courseForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const courseName = document.getElementById('courseName').value;
    const courseCode = document.getElementById('courseCode').value;
    courseDetails.innerHTML = `
    <h2>Submitted Course Details:</h2>
    <p><strong>Course Name:</strong> ${courseName}</p>
    <p><strong>Course Code:</strong> ${courseCode}</p>
    `;
    courseForm.reset();
    });

    const facultyForm = document.getElementById('facultyForm');
    const facultyDetails = document.getElementById('facultyDetails');

    facultyForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const facultyName = document.getElementById('facultyName').value;
    const facultyDept = document.getElementById('facultyDept').value;
    facultyDetails.innerHTML = `
    <h2>Submitted Faculty Details:</h2>
    <p><strong>Name:</strong> ${facultyName}</p>
    <p><strong>Department:</strong> ${facultyDept}</p>
    `;
    facultyForm.reset();
    });

    const gradeForm = document.getElementById('gradeForm');
    const gradeDetails = document.getElementById('gradeDetails');

    gradeForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const studentId = document.getElementById('studentId').value;
    const courseId = document.getElementById('courseId').value;
    const grade = document.getElementById('grade').value;
    gradeDetails.innerHTML = `
    <h2>Submitted Grade Details:</h2>
    <p><strong>Student ID:</strong> ${studentId}</p>
    <p><strong>Course ID:</strong> ${courseId}</p>
     <p><strong>Grade:</strong> ${grade}</p>
    `;
        gradeForm.reset();
    });
});
