interface Student {
  firstName: string;
  lastName: string;
  age: string;
  location: string;
  }

  const student1: Student = {
    firstName: "Amal",
    lastName: "Alaoui",
    age: 30,
    location: "Rabat"
};

  const student2: Student = {
    firstName: "Hajar",
    lastName: "Alaoui",
    age: 24,
    location: "Fes"
};

  const studentsList: Student[] = [student1, student2];


  // Create the table element
const table = document.createElement('table');

// Create the table header
const headerRow = document.createElement('tr');
const headerName = document.createElement('th');
headerName.textContent = 'First Name';
const headerLocation = document.createElement('th');
headerLocation.textContent = 'Location';
headerRow.appendChild(headerName);
headerRow.appendChild(headerLocation);
table.appendChild(headerRow);

// Append rows for each student
studentsList.forEach(student => {
  const row = document.createElement('tr');
  const cellName = document.createElement('td');
  cellName.textContent = student.firstName;
  const cellLocation = document.createElement('td');
  cellLocation.textContent = student.location;
  row.appendChild(cellName);
  row.appendChild(cellLocation);
  table.appendChild(row);
});

// Append the table to the document body
document.body.appendChild(table);
