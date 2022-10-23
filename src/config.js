export const url = "http://localhost:5000"

export function today() { return (new Date).toISOString().slice(0,10) }
export function this_month_year() { return (new Date).toISOString().slice(0,7) }
export function this_year() { return (new Date).toISOString().slice(0,4) }
