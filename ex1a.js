const sq1 = function (x) {
   return x*x;
}

const sq2 =  (x) => {
   return x*x;
}


const sq4 =  (x) =>  x*x;

const event1 = {
   name: "birthday",
   printGuestList: function () {
      console.log("list - "+ this.name)
   }
}

const event2 = {
   name: "birthday",
   printGuestList: () => {
      console.log("list - "+ this.name)
   }
}

const event = {
   name: "birthday",
   guests: ['trevor', 'bob', 'julie'],
   printGuestList()  {
      console.log("list - "+ this.name)
      this.guests.forEach(guest => {
         console.log(guest + 'at ' + this.name);
      });
   }
}
//
event.printGuestList();
//console.log(sq(3));