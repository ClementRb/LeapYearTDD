export function LeapYear(year: number) {
  let i = 0;
  while (i <= year) {
    if (i % 4 === 0) {
      if (i % 100 === 0) {
        if (i % 400 === 0) {
          console.log(i, " is a Leap Year");
          i++;
        } else i++;
      } else i++;
    } else i++;
  }
}

console.log(LeapYear(2020));
