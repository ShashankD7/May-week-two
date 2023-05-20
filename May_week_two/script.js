let employees = [
    { name: "John Doe", profession: "Developer", age: 30 },
    { name: "Jane Smith", profession: "Admin", age: 35 }
  ];

  // Function to filter employees by profession
 // Function to filter employees by profession
function filterEmployees() {
    const professionSelect = document.getElementById("profession");
    const selectedProfession = professionSelect.value;
  
    if (selectedProfession === "") {
      alert("Please select a profession.");
      return;
    }
  
    const filteredEmployees = employees.filter(
      employee => employee.profession.toLowerCase() === selectedProfession.toLowerCase()
    );
    displayEmployees(filteredEmployees);
  }
  
  // Function to display employees
  
function displayEmployees(employeesList) {
    const employeeListDiv = document.querySelector(".employee-list");
  
    if (employeesList.length === 0) {
      employeeListDiv.innerHTML = "<p>No employees found.</p>";
      return;
    }
  
    employeeListDiv.innerHTML = ""; // Clear the list before appending
  
    employeesList.forEach((employee, index) => {
      const employeeDiv = document.createElement("div");
      employeeDiv.className = "employee";
  
      const serialNumberSpan = document.createElement("span");
      serialNumberSpan.textContent = index + 1 + ".";
      employeeDiv.appendChild(serialNumberSpan);
  
      const nameSpan = document.createElement("span");
      nameSpan.textContent = "Name: " + employee.name;
      employeeDiv.appendChild(nameSpan);
  
      const professionSpan = document.createElement("span");
      professionSpan.textContent = "Profession: " + employee.profession;
      employeeDiv.appendChild(professionSpan);
  
      const ageSpan = document.createElement("span");
      ageSpan.textContent = "Age: " + employee.age;
      employeeDiv.appendChild(ageSpan);
  
      employeeListDiv.appendChild(employeeDiv);
    });
  }
  

  // Event listener for the filter button
  const filterButton = document.querySelector(".filter-button");
  filterButton.addEventListener("click", filterEmployees);

  // Event listener for the add user button
  const addUserButton = document.querySelector(".add-user-button");
  addUserButton.addEventListener("click", function() {
    const nameInput = document.getElementById("name");
    const professionInput = document.getElementById("new-profession");
    const ageInput = document.getElementById("age");

    const name = nameInput.value;
    const profession = professionInput.value;
    const age = ageInput.value;

    if (name && profession && age) {
      const newUser = { name, profession, age };
      employees.push(newUser);
      displayEmployees(employees);

      // Clear input fields
      nameInput.value = "";
      professionInput.value = "";
      ageInput.value = "";
    } else {
      alert("Please enter all the details.");
    }
  });

  // Initial display of employees
  displayEmployees(employees);