
function writeCards(names, event) {
    let messages = []; 
  
    for (let i = 0; i < names.length; i++) {  
      let message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`; 
      messages.push(message);  
    }
  
    return messages; 
  }
  
  module.exports = writeCards;

  function countDown(number) {
    while (number >= 0) {  // Loop from number down to 0
      console.log(number);
      number--;  // Decrease the number by 1 each time
    }
  }
  
  // Export the function for testing
  module.exports = countDown;