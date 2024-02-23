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

//for light mode darkmode toggle buttom 
document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('togglebtn');
    const body = document.body;
  
    toggleButton.addEventListener('click', function () {
      // Toggle between 'light-mode' and 'dark-mode' classes on the body
      body.classList.toggle('light-mode');
      body.classList.toggle('dark-mode');
  
      // Toggle the position of the inner circle for visual indication
      const innerCircle = toggleButton.querySelector('.inner-circle');
      innerCircle.classList.toggle('dark-mode');
    });
  });
  
showDate.addEventListener('click', (e)=> {
    e.preventDefault(); // to prevent default form submission
    let dayValue = parseInt(day.value,10); // to get the value in the input
    let monthValue =parseInt(month.value,10);
    let yearValue = parseInt(year.value,10);
    //console.log(dayValue);

    // to Get current date
    var currentDate = new Date();
  

    // to Create a date object with the entered date
    var enteredDate = new Date(yearValue, monthValue - 1, dayValue);

    // Calculate the difference in milliseconds
    var dateDifference = currentDate - enteredDate;
    //console.log(dateDifference);

    // Convert milliseconds to years, months, and days
    var years = Math.floor(dateDifference / (365.25 * 24 * 60 * 60 * 1000));
    var months = Math.floor((dateDifference % (365.25 * 24 * 60 * 60 * 1000)) / (30.44 * 24 * 60 * 60 * 1000));
    var days = Math.floor((dateDifference % (30.44 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000));


    


     // Check if day, month, and year are valid
    {
        if(day.value.trim() === '') {
            // Input is empty
            errorDay.innerHTML = "This field is required" ;
            displayError(day, dayLabel);
        } else if(dayValue >= 1 && dayValue <= 31) {
            displayDay.innerHTML = days.valueOf(days);
            errorDay.innerHTML = '';
            clearError(day, dayLabel);
        } else {
            errorDay.innerHTML = "Must be a valid day";
           displayError(day, dayLabel);

            
        }
    }
    {
        if(month.value.trim() === '') {
            // Input is empty
            errorMonth.innerHTML = "This field is required";
            displayError(month, monthLabel);
        } else if (monthValue >= 1 && monthValue <= 12) {
            displayMonth.innerHTML = months.valueOf(days);
            errorMonth.innerHTML = '';
            clearError(month, monthLabel);
        } else {
            errorMonth.innerHTML = "Must be a valid month";
           displayError(month, monthLabel);
           
        }

    }
    {
        if(year.value.trim() === '') {
            // Input is empty
            errorYear.innerHTML = "This field is required";
            displayError(year, yearLabel);
        } else if (yearValue >= 1900 && yearValue < 2025) {
            displayYear.innerHTML = years.valueOf(years);
            errorYear.innerHTML = '';
            clearError(year, yearLabel);
        } else {
            errorYear.innerHTML = "Must be a valid year";
           displayError(year, yearLabel);
        }
    }
    let age = {'years': years.valueOf(years), 'months': months.valueOf(days), 'days': days.valueOf(days)};
     console.log(age);
    localStorage.setItem('Guest', age);

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

