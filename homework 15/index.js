import dayjs from "https://unpkg.com/dayjs@1.8.9/esm/index.js";
import isSatSun from "./weekend.js";

/*15 a-display date in the format <Month> < Day of Month>*/

//get today's date
const today = dayjs();
const days = 5; //the number of days leading up to the duedate
const months = 1; //the number of months leading up to the duedate

let due = today.add(days, "day");
console.log(due.format("MMMM D"));

/*15 b*/
due = today.add(months, "month");
console.log(due.format("MMMM D"));

/*15c */
due = today.subtract(months, "month");
console.log(due.format("MMMM D"));

/**15d */
console.log(today.format("dddd"));

/**15e */
console.log(isSatSun(today));
console.log(isSatSun(today.add(3, "days")));
console.log(isSatSun(today.add(7, "days")));
console.log(isSatSun(today.add(5, "days")));
console.log(isSatSun(today.add(4, "days")));
console.log(isSatSun(today.add(8, "days")));
//t f t f f t

//for the rest of the homework looks for java-script-amazon project repo