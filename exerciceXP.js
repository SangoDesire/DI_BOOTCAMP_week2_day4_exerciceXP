//EXERCICE_1 : Information======================================
//======= === === === === === === === === === === === === === === === === === === === === =

//Part I : function with no parameters

function infoAboutMe() {}
//The function should console.log a sentence about you (ie. your name, age, hobbies ect…).
function infoAboutMe() {
    console.log("My name is sango désiré");
}
//Call the function.
function infoAboutMe() {
    console.log("My name is sango désiré");
}
infoAboutMe();

//Part II : function with three parameters
//Create a function called infoAboutPerson(personName, personAge, personFavoriteColor) that takes 3 parameters.
function infoAboutPerson(personName, personAge, personFavoriteColor) {}

//The function should console.log a sentence about the person (ie. “You name is …, you are .. years old, your favorite color is …”)
function infoAboutPerson(personName, personAge, personFavoriteColor) {
    console.log("My name is " + personName + ", I have " + personAge + "" + "years old" + "" + "My Favorite color is:" + personFavoriteColor + "" + "...");

}


//Appelez la fonction deux fois avec les arguments suivants :
//infoAboutPerson("David", 45, "blue")
//infoAboutPerson("Josh", 12, "yellow")
function infoAboutPerson(personName, personAge, personFavoriteColor) {
    console.log("My name is " + personName + ", I have " + personAge + "" + "years old" + "" + "My Favorite color is:" + personFavoriteColor + "" + "...");

}
infoAboutPerson("David", 45, "blue")
infoAboutPerson("Josh", 12, "yellow")

//EXERCICE 2 : Conseils
//Créez une fonction nommée calculateTip()qui ne prend aucun paramètre.
function calculateTip() {}
//Inside the function, use prompt to ask John for the amount of the bill.
function calculateTip() {
    let amount = prompt("Please! Enter the amount of the bill ")
}

//Here are the rules
//If the bill is less than $50, tip 20 % .
//If the bill is between $50 and $200, tip 15 % .
//If the bill is more than $200, tip 10 % .
function calculateTip() {
    let bill = prompt("Please! Enter the amount of the bill ")
    if (bill < 50) {
        console.log("laissez un pourboire de 20 %")
    } else if (bill >= 50 && bill <= 200) {
        console.log("laissez un pourboire de 20 %")
    } else if (bill > 200) {
        console.log("laissez un pourboire de 20 %")

    }
}
//Console.log the tip amount and the final bill (bill + tip).
function calculateTip() {
    let bill = prompt("Please! Enter the amount of the bill ")
    if (bill < 50) {
        console.log("Vous devez payez :" + "" + (bill * 0, 20) + bill)
    } else if (bill >= 50 && bill <= 200) {
        console.log("Vous devez payez :" + "" + (bill * 0, 15) + bill)
    } else if (bill > 200) {
        console.log("Vous devez payez :" + "" + (bill * 0, 10) + bill)

    }
}

//Appelez la calculateTip()fonction.
function calculateTip() {
    let bill = prompt("Please! Enter the amount of the bill ")
    if (bill < 50) {
        console.log("Vous devez payez :" + "" + (bill * 0, 20) + bill)
    } else if (bill >= 50 && bill <= 200) {
        console.log("Vous devez payez :" + "" + (bill * 0, 15) + bill)
    } else if (bill > 200) {
        console.log("Vous devez payez :" + "" + (bill * 0, 10) + bill)

    }
}
calculateTip();

//EXERCICE 3 : Find The Numbers Divisible By 23

//Create a function call isDivisible() that takes no parameter.
function isDivisible() {}
//In the function, loop through numbers 0 to 500.
function isDivisible() {
    for (i = 0; i < 500; i++) {}
}
//Console.log all the numbers divisible by 23.
let sum = 0;

function isDivisible() {
    for (i = 0; i < 500; i++) {
        if (i % 23 == 0) {
            console.log(i);
            sum = sum + i
        }

    }
    console.log("La somme est : " + " " + sum)
}
isDivisible();

////At the end, console.log the sum of all numbers that are divisible by 23.(A revoir)

//Bonus: Add a parameter divisor to the function (A revoir)
function isDivisible(divisor) {
    let sum = 0;

    for (i = 0; i < 500; i++) {
        if (i % divisor == 0) {
            console.log(i);
            sum = sum + i
        }
    }
    console.log("all the numbers divisible by " + isDivisible(3) + " " + "and their est:" + sum)
    console.log("all the numbers divisible by " + isDivisible(45) + " " + "and their est:" + sum)
}


//EXERCICE 4 : Shopping List
//Add the stock and prices objects to your js file.
const stock = {
    "banana": 6,
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry": 1
}
const prices = {
    "banana": 4,
    "apple": 2,
    "pear": 1,
    "orange": 1.5,
    "blueberry": 10
}

//Create an array called shoppingList with the following items: “banana”, “orange”, and
//“apple”. It means that you have 1 banana, 1 orange and 1 apple in your cart.
shoppingList = ["banana", "orange", "apple"];

//Create a function called myBill() that takes no parameters.
function myBill() {}
//The function should return the total price of your shoppingList.
//In order to do this you must follow these rules:
//The item must be in stock. (Hint : check out if .. in)

sum = "";

function myBill() {
    for (let x in stock) {
        console.log(sum += sum)
    }
}

//If the item is in stock find out the price in the prices object.
function myBill() {
    for (let x in stock) {
        console.log(sum = sum + x)
    }
    if (x in stock) {
        console.log(x.prices);
    }
}
myBill();

//Bonus : Si l'article est en stock, diminuez le stock de l'article de 1
function myBill() {
    for (let x in stock) {
        console.log(sum = sum + x)
    }
    if (x in stock) {
        console.log(x.prices - 1);
    }
}
myBill();

//EXERCICE  5 : Qu'y A-T-Il Dans Mon Portefeuille ?

//Create a function named changeEnough(itemPrice, amountOfChange) that receives two arguments :
function changeEnough(itemPrice, amountOfChange) {}

//In the function, determine whether or not you can afford the item.
//If the sum of the change is bigger or equal than the item’ s price
//(ie.it means that you can afford the item), the the function should return true
//If the sum of the change is smaller than the item’s price
//(ie.it means that you cannot afford the item) the function should return false

let sumAmount = 0;

for (i of amountOfChange) {
    let convertisseur
    if (amountOfChange.indexOf(i) == 0) { convertisseur = 0, 25 }
    if (amountOfChange.indexOf(i) == 1) { convertisseur = 0, 10 }
    if (amountOfChange.indexOf(i) == 2) { convertisseur = 0, 05 }
    if (amountOfChange.indexOf(i) == 3) { convertisseur = 0, 01 }
    sumAmount = (sumAmount + 1) * convertisseur
}
if (sumAmount > itemPrice) {
    console.log(true)
} else {
    console.log(false)
}

changeEnough(14, 11[2, 100, 0, 0])
changeEnough(0.75, [0, 0, 20, 5])


//EXERCICE 6 : Vacations Costs =======================================================
//========= === === === === === === === === === === === === === === === === === === === === ===
//Define a function called hotelCost().
//Define a function called hotelCost().
//It should ask the user
//for the number of nights they would like to stay in the hotel.
//If the user doesn’ t answer or
//if the answer is not a number, ask again.
//The hotel costs $140 per night.The function should return the total price of the hotel

function hotelCost() {
    let nights = prompt("the number of nights they would like to stay in the hotel ?")
    if (nights = !isNaN || nights == "") {
        console.log("Please, Enter a Number")
    }
    const sumtotal = nights * 140
    console.log("Vous payez au total la somme de:" + "" + sumtotal + "$")
    return sumtotal
}


//Define a function called planeRideCost().
//It should ask the user for their destination.
//If the user doesn’ t answer or if the answer is not a string, ask again.
//The function should return a different price depending on the location.“London”:
//183 $“ Paris”: 220 $ All other destination: 300 $
function planeRideCost() {
    let destination = ""
    while (destination == "" || lettre(destination)) {
        destination = prompt("Please , where are-you going?")
    }


    if (destination == "London") {
        console.log("Welcome! for London you must pay :", "183$")



    } else if (destination == "Paris") {
        console.log("Welcome! for Paris you must pay :", "220$")

    } else {
        console.log("s you must pay :", "300$")

    }
}

function lettre(ad) {

    const regex = new RegExp(/\d/)
    return regex.test(ad)
}

//Define a function called rentalCarCost().It should ask the user
//for the number of days they would like to rent the car.
//If the user doesn’ t answer or if the answer is not a number, ask again.
//Calculate the cost to rent the car.The car costs $40 everyday.
//If the user rents a car for more than 10 days, they get a 5 % discount.
//The function should return the total price of the car rental
function rentalCarCost() {
    let Nbrek
    while (!nombre(Nbrek)) {

        Nbrek = prompt("How many days do you want to rent the car ")
    }

    if (Nbrek < 10) {

        console.log(" La voiture coute :", Nbrek * 40)
    } else {

        const t = Nbrek * 40 - Nbrek * 0.05

        console.log(" La voiture coute:", t)


    }

}

//Define a function called totalVacationCost() that returns the total cost of the user’s
//vacation by calling the 3 functions that you created above.
//Example: The car cost: $x, the hotel cost: $y, the plane tickets cost: $z.
//Hint: You have to call the functions hotelCost(), planeRideCost() and rentalCarCost() inside the

function totalVacationCost()

function totalVacationCost() {

    hotelcost()
    planeRideCost()
    rentalCarCost()

}