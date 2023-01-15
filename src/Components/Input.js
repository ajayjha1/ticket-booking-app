import React from 'react'
import data from './data';

function Input() {
    const [noOfTicket, setNoOfTicket] = React.useState("");
    const [message, setMessage] = React.useState("");
    var seatBooked = [] // An array to store the seat numbers booked for the user

  // Function to check if all the seats are available in a single row or not
  const checkRow = () => {
    var bool = false;
    if (noOfTicket.target.value <= 7) {
      // This loop will check if all the seats are available in asingle row
      for (var i = 0; i <= 12; i++) {
        var a = 0;
        for (var j = i*7; j < (i + 1) * 7 && j <=80; j++) {
          if(data[j] != null ){
          if (data[j].booked == null || data[j].booked == false) {
            a++;
            if (a >= parseInt(noOfTicket.target.value)) {
              bool = true;
              bookTicket(i);
              console.log(data);
              return;
            }
          }
        }
        }
      }
      if (bool == false) { // If seats are not found in a single row this if statement will be executed
        var blankSeats = 0;
        // This function will check if the seats are available or not
        for (var i = 0; i < data.length; i++) {
          if (data[i].booked == null || data[i].booked == false) {
            blankSeats++;
          }
          if (blankSeats === parseInt(noOfTicket.target.value)) {
            bookTicketNearby(); // This function will be called when seats are not available in one row
            bool = true;
            return;
          }
        }
        if(bool == false){
          setMessage("Only " + blankSeats+ " seats available")
        }
      }
    } else{
        // if the user enters a number more than 7 an error message will be displayed
        setMessage("Enter value less than 7")
    }
  };

  // This function will book nearby tickets if all seats cannot be arranged in a single row
  const bookTicketNearby = () => {
    seatBooked = [];
    var bool = false;
    var allotedSeats = 0;
    var m = 2
    var a = 0
    while(m<=13){
      for (var j = 0; j <= m*7 - 1 ; j++) {
        if(data[j] != null){
        if(data[j].booked == null || data[j].booked == false){
          a++
          if(a == parseInt(noOfTicket.target.value)){
            for(var k = 0; k <= m*7 -1 ; k++){
              if(data[k].booked == false || data[k].booked == null){
              data[k].booked = true;
              allotedSeats++;
              
              seatBooked.push(k+1);
              }
              if(allotedSeats == parseInt(noOfTicket.target.value)){
                bool = true;
                setMessage("Your seats are " + seatBooked)
                return;
              } else{
                m++;
                continue;
              }

            }
            if(bool == true){
                setMessage("Your seats are " + seatBooked)
                return;
              }
          }
        }
      }
      }
      m++;
    }
  };

  // This function will book tickets in asingle row
  const bookTicket = (i) => {
    seatBooked = [];
    var k = i * 7;
    var n = parseInt(noOfTicket.target.value) + k;
    for (var j = k; j < n; j++) {
      var i = 0;
      if (data[j].booked == null || data[j].booked == false) {
        data[j].booked = true;
        var arr = [];
        arr[i] = j+1;
        i++;
        seatBooked.push(j+1)
      }
    }
    setMessage("Your seats are " + seatBooked)
  };
  console.log(data);
  
  return (
    <div className="App">
      <h2>Ticket booking app</h2>
      <h3>Enter no. of tickets you want to book</h3>
      <input type={"number"} onChange={(e) => setNoOfTicket(e)} />
      <button onClick={checkRow}>Submit</button>
      <br />
      <h4>{message}</h4>
    </div>
  )
}

export default Input;