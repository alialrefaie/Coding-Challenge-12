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