function addRow() {
    const table = document.getElementById("myTable");
    const newRow = table.insertRow(table.rows.length);
    newRow.innerHTML = `
        <td contenteditable="true"></td>
        <td contenteditable="true"></td>
        <td contenteditable="true"></td>
        <td contenteditable="true"></td>
    `;
}

function removeRow(button) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}
function downloadJSON() {
    const tableData = [];
    const table = document.getElementById("myTable");
    const rows = table.getElementsByTagName("tr");
    for (let i = 1; i < rows.length; i++) {
        const row = rows[i];
        const cells = row.getElementsByTagName("td");
        const rowData = {
            name: cells[0].textContent,
            email: cells[1].textContent,
            age: cells[2].textContent,
            phone: cells[3].textContent
        };
        tableData.push(rowData);
    }

    const jsonContent = JSON.stringify(tableData, null, 2);
    const blob = new Blob([jsonContent], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "table_data.json";
    a.click();
}

function fun1() {
    const input = document.getElementById("myInput");
    const filter = input.value.toUpperCase();
    const table = document.getElementById("myTable");
    const rows = table.getElementsByTagName("tr");
    for (let i = 1; i < rows.length; i++) {
        const row = rows[i];
        const cells = row.getElementsByTagName("td");
        const name = cells[0].textContent.toUpperCase();
        if (name.includes(filter)) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    }
}