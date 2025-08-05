let time = new Date;
let currentYear  = time.getFullYear();
let footerYear = document.querySelector("#current-year");

footerYear.innerHTML = currentYear;