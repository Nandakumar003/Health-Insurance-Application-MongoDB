// Notes List form
let num = 1;


document.getElementById("userNotes").addEventListener("input", function () {
    document.getElementById("error-message").innerHTML = ''
});


document.getElementById("notes-list").addEventListener('submit', AddNotes);
function AddNotes(e) {
    e.preventDefault();

    let notesdetails = document.getElementById("userNotes").value;
    var userData = JSON.parse(localStorage.getItem('user'))
    if (notesdetails == '') {
        let error = document.getElementById("error-message")
        error.style.color = "red";
        error.innerHTML = `Error: Insert some Notes before adding!! 🙂`
    }
    else {
        const usernotes =
        {
            UserId: userData[0].UserID,
            NotesId: `Note-${num}`,
            NotesDetail: notesdetails
        }
        num++;
        fetchData('/notes/AddNotes', usernotes, 'POST')
            .then(data => {
                if (!data.message) {
                    let success = document.getElementById("error-message")
                    success.style.color = "green";
                    let p = document.getElementById("userNotes").value
                    success.innerHTML = `<span style="color: black;">"${p}"</span> was Added Successfully!! &#128077`
                    document.getElementById("userNotes").value = ''
                }
            })
            .catch(err => {
                let error = document.getElementById("error-message")
                error.style.color = "red";
                error.innerHTML = `Error: ${err}.`
            })
    }
}

//FUNCTION TO PULL PREVIOUS NOTES
function GetPreviousNotes() {
    var userData = JSON.parse(localStorage.getItem('user'))
    var queryParams = {
        UserId: userData[0].UserID
    }
    let err = document.getElementById("error-message")
    const url = '/notes/GetUserNotes';
    const queryString = new URLSearchParams(queryParams).toString();
    const fullUrl = `http://localhost:3000${url}?${queryString}`;

    fetch(fullUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`The user doesn't exist or There are no notes for this User! &#128577`);
            }
            return response.json();
        })
        .then(data => {
            const keysToRemove = ["SNo", "UserId", "NotesId"];
            removeUnnecessaryKeys(data, keysToRemove);
            for (let i = 0; i < data.length; i++) {
                const formattedDate = formatDate(data[i].CreatedOn);
                data[i].CreatedOn = formattedDate;
            }
            data.sort((a, b) => new Date(b.CreatedOn) - new Date(a.CreatedOn));
            generateTable(data);
        })
        .catch(error => {
            // Handle errors
            err.style.color = "red";
            err.innerHTML = `${error.message}`
        });
}

//Generate the table
function generateTable(jsonData) {
    const tableContainer = document.getElementById('table-container');

    // Remove existing table if any
    tableContainer.innerHTML = '';

    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');

    // Create table header
    const headers = Object.keys(jsonData[0]);
    const headerRow = document.createElement('tr');
    headers.forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);

    // Create table rows
    jsonData.forEach(rowData => {
        const row = document.createElement('tr');
        headers.forEach(header => {
            const cell = document.createElement('td');
            cell.textContent = rowData[header];
            row.appendChild(cell);
        });
        tbody.appendChild(row);
    });

    table.appendChild(thead);
    table.appendChild(tbody);
    tableContainer.appendChild(table);
}

// Call the function to generate table
async function fetchData(route = '', data = {}, methodType) {
    const response = await fetch(`http://localhost:3000${route}`, {
        method: methodType, // *POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    if (response.ok) {
        return await response.json(); // parses JSON response into native JavaScript objects
    } else {
        throw await response.json();
    }
}

function removeUnnecessaryKeys(data, keysToRemove) {
    data.forEach(obj => {
        keysToRemove.forEach(key => {
            delete obj[key];
        });
    });
}

function formatDate(inputDate) {
    const date = new Date(inputDate);
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${month}/${day}/${year} ${hours}:${minutes}:${seconds}`;
}