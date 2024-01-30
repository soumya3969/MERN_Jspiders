let travels_1 = {
    travelsName: "vrl",
    busId: "vrl1",
    bookings: [],
    book: function(name, seatNo) {
      console.log(
        `${name} is booked seat ${this.travelsName} travels with seat number ${seatNo}`
      );
      let obj = {
        passenger: `${name},${this.busId},${this.travelsName},${seatNo}`
      };
      this.bookings.push(obj);
    }
  };
  
  travels_1.book("soumya", 11);
  travels_1.book("sandhya", 12);
  console.log(travels_1.bookings);
  