class DataTable {
    constructor(apiUrl, containerId) {
        this.apiUrl = apiUrl;
        this.containerId = containerId;
    }

    async render() {
        try {
            const response = await fetch(this.apiUrl);
            const data = await response.json();

            const container = document.getElementById(this.containerId);
            const table = document.createElement("table");

            // Create table headers
            const headers = Object.keys(data[0]);
            const thead = document.createElement("thead");
            const headerRow = document.createElement("tr");
            headers.forEach(header => {
                const th = document.createElement("th");
                th.innerText = header;
                headerRow.appendChild(th);
            });
            thead.appendChild(headerRow);
            table.appendChild(thead);

            // Create table body
            const tbody = document.createElement("tbody");
            data.forEach(row => {
                const tr = document.createElement("tr");
                headers.forEach(header => {
                    const td = document.createElement("td");

                    // Fix: render HTML inside cells properly
                    td.innerHTML = row[header];

                    tr.appendChild(td);
                });
                tbody.appendChild(tr);
            });
            table.appendChild(tbody);

            container.appendChild(table);
        } catch (err) {
            console.error("Error rendering table:", err);
        }
    }
}
