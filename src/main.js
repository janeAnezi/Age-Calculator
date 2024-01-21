let day = document.getElementById('day')
let month = document.getElementById('month')
let year = document.getElementById('year')

let displayYear = document.getElementById('displayYear')
let displayMonth = document.getElementById('displayMonth')
let displayDay = document.getElementById('displayDay')

let errorDay = document.getElementById('day-result')
let errorMonth = document.getElementById('month-result')
let errorYear = document.getElementById('year-result')

let showDate = document.getElementById('img')
let dayLabel = document.getElementById('label-day')
let monthLabel = document.getElementById('label-month')
let yearLabel = document.getElementById('label-year')
showDate.addEventListener('click', (e)=> {
    e.preventDefault(); // to prevent default form submission
    let dayValue = parseInt(day.value,10); // to get the value in the input
    let monthValue =parseInt(month.value,10);
    let yearValue = parseInt(year.value,10);

     console.log(dayValue);

     // Check if day, month, and year are valid
    {
        if (dayValue >= 1 && dayValue <= 31) {
            displayDay.innerHTML = dayValue;
            errorDay.innerHTML = '';
            clearError(day, dayLabel);
        } else {
            errorDay.innerHTML = "must be a valid day";
           displayError(day, dayLabel);
        }
    }
    {
        if (monthValue >= 1 && monthValue <= 12) {
            displayMonth.innerHTML = monthValue;
            errorMonth.innerHTML = '';
            clearError(month, monthLabel);
        } else {
            errorMonth.innerHTML = "must be a valid month";
           displayError(month, monthLabel);
        }
    }
    {
        if (yearValue >= 1900 && yearValue <= 2024) {
            displayYear.innerHTML = yearValue;
            errorYear.innerHTML = '';
            clearError(year, yearLabel);
        } else {
            errorYear.innerHTML = "must be a valid year";
           displayError(year, yearLabel);
        }
    }
    
 
    
     day.value = ''; // to clear the value in the input box
     month.value = ''; 
     year.value = ''; 

})

function displayError(value, label) {
    label.classList.add('text-red-500');
    value.classList.add('border-red-500')
}
function clearError(value, label) {
    label.classList.remove('text-red-500');
    value.classList.remove('border-red-500')
}



