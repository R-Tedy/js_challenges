// Current age calculator

function calculateAge(birthday) {
  const currentDate = new Date("2025-11-27");
  const bornDate = new Date (birthday);
  const milDifference = currentDate.getTime() - bornDate.getTime();
  const yearsPassed = milDifference/(1000*60*60*24*365.2425);
  birthday = Math.floor(yearsPassed);
  return birthday;
}

console.log(calculateAge("2000-12-01"));