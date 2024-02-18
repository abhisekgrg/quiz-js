const uppercase_set = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase_set = "abcdefghijklmnopqrstuvwxyz";
const number_set = "1234567890";
const symbol_set = "~!@#$%^&*()_+?><";

const password_box = document.getElementById("password-box");
const password_length = document.getElementById("password-length");
const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const number = document.getElementById("number");
const symbol = document.getElementById("symbol");

const get_random_data = (dataset) => {
 return dataset[Math.floor(Math.random(dataset)*dataset.length)];
}

const generate_password = (password="") => {
    
    if (uppercase.checked){
        password += get_random_data(uppercase_set)
    }
    if (lowercase.checked){
        password += get_random_data(lowercase_set)
    }
    if (number.checked){
        password += get_random_data(number_set)
    }
    if (symbol.checked){
        password += get_random_data(symbol_set)
    }

    if(password.length < password_length.value){
        return generate_password(password)
    }
    password_box.innerHTML = truncateString(password, password_length.value)
    
}
function truncateString(str, num) {
    if (str.length > num) {
      return str.slice(0, num);
    } else {
      return str;
    }
  }
document.getElementById('btn').addEventListener("click",function (){generate_password();})