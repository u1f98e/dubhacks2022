const url = "http://localhost:5000"

function today() { return Date().toJSON().slice(0,10) }
function this_month_year() { return Date().toJSON().slice(0,7) }
function this_year() { return Date().toJSON().slice(0,4) }