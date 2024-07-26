const handledata = (e) => {
    e.preventDefault();

    let user = {
      username: document.getElementById("username").value,
      email: document.getElementById("email").value,
      number: document.getElementById("number").value,
      select: document.getElementById("select").value,
      check: document.getElementById("check").value,
      none: document.getElementById("none").value,
      }

      const UserNameRegex = /^[a-zA-Z0-9_-]{4,16}$/;
      if (!UserNameRegex.test(user.username)) {
        alert("Username should be between 4 to 16 characters long and contain only alphanumeric characters, hyphens, and underscores");
        return;
      }
      
      const numberRegex = /^(?:\+91|91)?[6789]\d{9}$/;
      if (!numberRegex.test(user.number)) {
        alert("Please enter a valid 10 digit number starting with 6, 7, 8, or 9");
        return;
      }

      const passRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
      if (passRegex.test(user.password)) {
        alert("Password should be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character");
        return;
      }

      if(user.select === user.none){
        alert("Please select at least one option");
        return;
      }

      console.log(user);
  }

  document.getElementById("userdata").addEventListener("submit",handledata);