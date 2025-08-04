// Scenario: Website Login Access Control
// You are building a login form for a website. After the user enters their username and password, check if the entered username is "admin" and password is "1234".
// If both match, show a welcome message. Otherwise, show "Invalid credentials".

// let u='admin';
// let p='1234';

// let user= prompt("enter your user name");
// let passward= prompt("enter your password");

// if( (user==u)  &&  (passward==p) ){
//     console.log("welcom to admin panel");   
// }else{
//     console.log(" wrong user name and password");
    
// }

// Scenario: Smart Shopping Cart Discount System

// A customer adds items to their cart on an e-commerce site. Based on the total amount:

// If total is above ₹5000, apply a 20% discount.

// If total is between ₹2000 and ₹5000, apply a 10% discount.

// If total is less than ₹2000, no discount.


let amount=prompt("enter totsl amount for aplicable discount");

if (amount>=5000) {
    console.log("Congracts you got a 20% DISCOUNT on your purchase. Please pay " + (amount - (amount * 0.20)));
    
}else if (amount >= 2000 && amount < 5000) {
    console.log("You got a 10% DISCOUNT on your purchase. Please pay " + (amount - (amount * 0.10)));
    
}else if (amount < 2000) {
    console.log("No discount available. Please pay the full amount of " + amount);
}else {
    console.log("Invalid amount entered. Please enter a valid total amount.");
}


// Scenario: Dynamic Weather-Based Clothing Suggestions

// You are creating a smart clothing app. Based on real-time input values:

// If temperature < 10°C and it's raining: suggest “Wear a heavy jacket and carry an umbrella”

// If temperature < 10°C and not raining: suggest “Wear a heavy jacket”

// If temperature between 10°C–20°C and it's raining: suggest “Wear a sweater and carry an umbrella”

// If temperature > 20°C and it’s sunny: suggest “Wear light clothes and sunglasses”

// For all other conditions, suggest “Wear comfortable clothes”


