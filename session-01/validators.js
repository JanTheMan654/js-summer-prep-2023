/*
  Write a function that returns true or false if the given username
  is valid according to the following rules:
  - username must be between (and including) 3-10 characters in length
  - username must begin with a letter
  - username may contain numbers and letters
  - username cannot contain special characters
*/
function validUsername(username) {
    let valid = true;
    let specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if(username.length<3 && username.length>10)
    {
        console.log("username must be between 3-10 characters in length");
        valid = false;
    }
    if(username.includes(specialChars))
    {
        console.log("username cannot contain special characters");
        valid = false;
    }
    if(username.includes(/[0-9]/), 0)
    {
        valid = false;
    }

    return valid;
  }
  
  /*
    Write a function that returns true or false if the given password
    is valid according to the following rules:
    - password must be between (and including) 10-64 characters in length
    - password must contain at least 1 letter, 1 number, and 1 special character
  */
  function validPassword(password) {
    let regex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,64}$/;

    return regex.test(password);
  }
  
  module.exports = { validUsername, validPassword };
