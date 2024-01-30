const readline = require("readline-sync");
let travels_1 = {
  travelsName: "Mana6969 Travels",
  busId: "6969",
  bookings: [],
  book: function (name, seatNo) {
    console.log(
      `${name} is booked seat ${this.travelsName} travels with seat number ${seatNo}`
    );
    let obj = {
      passenger: `${name},${this.busId},${this.travelsName},${seatNo}`
    };
    this.bookings.push(obj);
  }
};
let inp = +readline.question("No of Passengers:-");
for (let i = 1; i <= inp; i++) {
  let name = +readline.question("Enter Passenger Name:- ");
  let sNo = +readline.question("Enter Seat No:- ");
  travels_1.book(name, sNo);
}

console.log(travels_1.bookings);
