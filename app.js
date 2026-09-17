const API_URL = "https://jsonplaceholder.typicode.com/users";

const customStudents = [
    {
        name: "Bhernadette Sul",
        email: "bhernadette@gmail.com",
        city: "Naga City",
        school: "University of the Philippines"
    },
    {
        name: "Lalisa Manoban",
        email: "lalisa@gmail.com",
        city: "Manila",
        school: "De La Salle University"
    },
    {
        name: "Jennie Kim",
        email: "jenniekim@gmail.com",
        city: "Quezon City",
        school: "Ateneo de Manila University"
    },
    {
        name: "Park Rose",
        email: "parkrose@gmail.com",
        city: "Cebu City",
        school: "University of San Carlos"
    },
    {
        name: "Jisoo Kim",
        email: "jisoookim@gmail.com",
        city: "Naga City",
        school: "Naga College Foundation"
    }
];

const loadUsersButton = document.getElementById("loadUsers");
const statusMessage = document.getElementById("status");
const userList = document.getElementById("userList");

async function loadUsers() {
    statusMessage.textContent = "Loading students...";
    userList.innerHTML = "";

    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error("Failed to load students");
        }

        const users = await response.json();

        renderStudents(users);

        statusMessage.textContent = "Students loaded successfully!";
    } catch (error) {
        statusMessage.textContent = "Error loading students.";
        console.log(error);
    } finally {
        console.log("Request finished.");
    }
}

function renderStudents(users) {
    users.slice(0, 5).forEach(function(user, index) {
        const student = customStudents[index];

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${user.id}</td>
            <td>${student.name}</td>
            <td>${user.username}</td>
            <td>${student.email}</td>
            <td>${student.city}</td>
            <td>${student.school}</td>
        `;

        userList.appendChild(row);
    });
}

loadUsersButton.addEventListener("click", loadUsers);