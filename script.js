// U72955273

d3.csv("mock_stock_data.csv").then(function(data) {
    console.log(data);

    data.forEach(function(d) {
        d.Price = +d.Price;
    });

    function filterData(stockName, startDate, endDate) {
        return data.filter(d =>
            d.STock === stockName &&
            new Date(d.Date) >= new Date(startDate) &&
            new Date(d.Date) <= new Date (endDate)
        );
    }

    let filteredData = filterData('Apple', '2023-01-01', '2023-01-05');
    console.log(filteredData);
});

function renderChart(data) {
    const svg = d3.select("#chart").append("svg")
    .attr("width", 600)
    .attr("height", 600);

document.getElementById('stockSelector').addEventListener('change', function() {
    updateVisualization();
});
function updateVisualization() {
    const stockName = document.getElementById('stockSelector').value;
    let filteredData = filterData(stockName, '2023-01-01', '2023-01-31');
    renderChart(filteredData);
}
}