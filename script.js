//Definir Variables y listas 
let name = "Pepe";
let age = "25";
let price = "99.90";
let favoriteSeries = ["Dark", "Mr Robot", "The Big Bang Theory"];
let favoriteMovies = [
    {
        name: "Forrest Gump",
        age: 1994,
        protagonists:["Tom Hanks", "Robin Wright", "Gary Sinise", "Mykelti Williamson", "Sally Field", "Michael Conner Humphreys"]
    },
    {
        name: "Interstellar",
        age: 2014,
        protagonists:["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain", "Mackenzie Foy"]
    },
]

//Mostrar todos esos valores por consola 

console.log("Name:", name);
console.log("Age:", age);
console.log("Price:", price);
console.log("Favorite Series:", favoriteSeries);
console.log("Favorite Movies:", favoriteMovies);


// incrmentar la edad en 1 y volver a mostrarla

age ++;
console.log("Age:", age)

// agregar una serie a la lista de series favoritas y volver a mostrarla 

favoriteSeries.push("Friends");
console.log("Favorite series updated:", favoriteSeries)


