Step 1 \& Step 2 – Python API and Reusable UI Table Component



This branch contains:



A FastAPI-based Python API that serves data from mock\_data.json



A reusable UI component (tableComponent.js and tableStyles.css) to display the data in a table format



▶️ How to Run the Python Backend



Install FastAPI and Uvicorn (if not already installed):



pip install fastapi uvicorn



Run the server:



python main.py



Visit the API in your browser:



http://localhost:8000/api/data



How to Use the Reusable Table Component



Include the following in your HTML file:



<link rel="stylesheet" href="tableStyles.css">

<script src="tableComponent.js"></script>



Add a container where the table will be rendered:



<div id="table-container"></div>



Fetch and render the data:



<script>

&nbsp; fetch('http://localhost:8000/api/data')

&nbsp;   .then(response => response.json())

&nbsp;   .then(data => renderTable(data));

</script>





