// from data.js
var tableData = data

// select CTA's and define actions
var filter_btn = d3.select('#filter-btn')
var form = d3.select('form')
// when clicked on filter button, it should filter the data
filter_btn.on('click', getUFOData)
// or when form is submitted, it should also filter the data
form.on('submit', getUFOData)

// Define function -- append data to the table
function getUFOData () {
  // get reference to the table body
  var tbody = d3.select('tbody')

  // clear out the table body
  tbody.html('')

  var inputDateElement = d3.select('#datetime')
  var inputDateValue = inputDateElement.property('value')

  tableData.forEach(function (dataItem) {
    if (dataItem.datetime == inputDateValue) {
      var rowData = Object.values(dataItem)
      var tbody = d3.select('tbody')
      var trow = tbody.append('tr')
      for (let i = 0; i < rowData.length; i++) {
        trow.append('td').text(rowData[i])
      }
    }
  })
}
