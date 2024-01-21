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
let dateLabel = document.getElementById('label-day')
showDate.addEventListener('click', (e)=> {
    e.preventDefault(); // to prevent default form submission
    let dayValue = parseInt(day.value,10); // to get the value in the input
    // let monthValue =parseInt(month.value,10);
    // let yearValue = parseInt(year.value,10);

     console.log(dayValue);

     // Check if day, month, and year are valid
    {
        if (dayValue >= 1 && dayValue <= 31) {
            displayDay.innerHTML = dayValue;
            errorDay.innerHTML = '';
            clearError();
        } else {
           displayError();
        }
    }
    
 
    
     day.value = ''; // to clear the value in the input box
    //  month.value = ''; 
    //  year.value = ''; 

})

function displayError() {
    errorDay.innerHTML = "must be a valid day";
    dateLabel.classList.add('text-red-500');
    day.classList.add('border-red-500')
}
function clearError() {
    dateLabel.classList.remove('text-red-500');
    day.classList.remove('border-red-500')
}



