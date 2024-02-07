let userInput = document.getElementById("js-date");
userInput = new Date().toISOString().split("T")[0];

function calculateAge() {
  let birthDate = new Date(userInput.value);

  let d1 = birthDate.getDate();
  let m1 = birthDate.getMonth() + 1;
  let y1 = birthDate.getFullYear();

  let today = new Date();

  let d2 = today.getDate();
  let m2 = today.getMonth() + 1;
  let y2 = today.getFullYear();

  let d3, m3, y3;

  y3 = y2 - y1;

  if (m2 >= m1) {
    m3 = m2 - m1;
  } else {
    y3--;
    m3 = 12 + m2 - m1;
  }

  if (d2 >= d1) {
    d3 = d2 - d1;
  } else {
    m3--;
    d3 = getDaysInMonth(y1, m1) + d2 - d1;
  }
  if (m3 < 0) {
    m3 = 11;
    y3--;
  }
  console.log(y3, m3, d3);
}

function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}

/*
function calculateAge(userInput){
  const today = new Date();
  const birthdateObj = new Date(userInput.value)

  let months = today.getMonth() - birthdateObj.getMonth();
  let days = today.getDate() - birthdateObj.getDate();
  let years = today.getFullYear() - birthdateObj.getFullYear();

  // If the birthdate month is greater than the current month, adjust years and months
  if(months < 0 || (months === 0 && days < 0)) {
    months += 12;
    years--;
  }

  //If the birthdate day is greater than the current day, adjust months and days
  if (days < 0) {
    months--;
    days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }

  console.log( months, days, years );
}

//Example usage;

const birthDate = new Date("1990-05-15"); // Enter the birthdate in "YYYY-MM-DD" formate
const age = calculateAge(birthDate);
console.log("The person is " + age.years + " years, " + age.months + " months, and " + age.days + " days old.");
*/