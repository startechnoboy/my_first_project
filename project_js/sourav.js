document.addEventListener("DOMContentLoaded", () => {
  const addStudentButton = document.getElementById("addStudentButton");
  const studentNameInput = document.getElementById("studentName");
  const emailInput = document.getElementById("email");
  const phoneNumberInput = document.getElementById("number");
  const studentList = document.getElementById("studentList");
  const searchInput = document.getElementById("serch");
  const studentsArray = [];

  addStudentButton.addEventListener("click", () => {
    const studentName = studentNameInput.value.trim();
    const email = emailInput.value.trim();
    const phoneNumber = phoneNumberInput.value.trim();

    if (studentName && email && phoneNumber) {
      const studentInfo = {
        name: studentName,
        email: email,
        phoneNumber: phoneNumber,
      };
      studentsArray.push(studentInfo);
      studentNameInput.value = "";
      emailInput.value = "";
      phoneNumberInput.value = "";

      displayStudents(studentsArray);
    } else {
      alert('Please fill in all details. 😠');
    }
  });

  searchInput.addEventListener("input", () => {
    const query = searchInput.value.trim().toLowerCase();
    const filteredStudents = studentsArray.filter((student) =>
      student.name.toLowerCase().includes(query)
    );
    displayStudents(filteredStudents);
  });

  function displayStudents(students) {
    studentList.innerHTML = "";
    students.forEach((student) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${student.name}</td>
        <td>${student.email}</td>
        <td>${student.phoneNumber}</td>
      `;
      studentList.appendChild(row);
    });
  }
});
