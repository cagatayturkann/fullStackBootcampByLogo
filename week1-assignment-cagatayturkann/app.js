const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;


function userRequest() {
  let apiUrl = "https://jsonplaceholder.typicode.com/users";
  let response;

  //making new xmlhttprequest
  let req = new XMLHttpRequest();
  //defining http method and url to be requested
  req.open('GET', apiUrl);
  //defining response type as json
  req.responseType = 'JSON';
  //checking if the response is received or not
  req.onload = function () {
    if (this.status == 200) {
      response = JSON.parse(req.responseText);
      console.log("Data received...\n");
    }
    //Printing names to console
    for (let i = 0; i < response.length; i++) {
      console.log(`User ${[i+1]} : ${response[i].name}`)
    }
  };
  //sending the method
  req.send({})
}

userRequest();