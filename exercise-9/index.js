function generatePassword(length) {
    const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const digits = "0123456789";
    const specials = "_-";
    let password = "";
  
    // Add at least one digit
    password += digits.charAt(Math.floor(Math.random() * digits.length));
  
    // Add at least one special character
    password += specials.charAt(Math.floor(Math.random() * specials.length));
  
    // Add remaining characters
    for (let i = 0; i < length - 2; i++) {
      const pool = letters + digits + specials;
      password += pool.charAt(Math.floor(Math.random() * pool.length));
    }
  
    // Shuffle the password
    password = password.split("").sort(function () { return 0.5 - Math.random() }).join("");
  
    return password;
  }
  
  // Example usage
  const password = generatePassword(7);  // Generate a 10-character password
  if (password.length<8) {
    console.log("Please enter a valid number")
  }else{
    console.log(password);
  }
  
