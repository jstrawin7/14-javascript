// from data.js
var tableData = data;

// Table References
var tbody = d3.select("tbody");

// Clear data
function table(data) {
  tbody.html("");
   
  // Loop
  data.forEach((dataRow) => {
    var row = tbody.append("tr");
    Object.values(dataRow).forEach((val) => {
      var ufo = row.append("td");
        ufo.text(val);
      }
    );
  });
}

function buttonClick() {
 
 // Filtered Data   
 d3.event.preventDefault();
  var date = d3.select("#datetime").property("value");
  let filteredData = tableData;
  if (date) {
    filteredData = filteredData.filter(row => row.datetime === date);
  }

  // Build Table with Data
  table(filteredData);
}
d3.selectAll("#filter-btn").on("click", buttonClick);

// Build Table on page
table(tableData);
