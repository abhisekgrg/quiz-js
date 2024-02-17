 let getcolor = () => {
    const random_number = Math.floor(Math.random() * 16777215);
    const random_hex = "#" + random_number.toString(16);
    document.getElementById("color").innerHTML = random_hex;
    document.querySelector(".section").style.backgroundColor = random_hex;
    
}
getcolor();
