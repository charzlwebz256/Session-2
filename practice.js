// JS Variables
var x = 5;
var y = 6;
var z = x+y;
console.log(z);


// JS Objects
const person ={
  name: "Pius Digny ",
  age: 20,
  nationality: "Canadian ",
  occupation: "Graphic Designer ",
  company: "Microsoft ",
  Employer: "Bill Gates ",
}
console.log(person.name +"a " +person.nationality + "aged "+  person.age + " years is a " +person.occupation + "employed in " + person.company + "company " +"by " + person.Employer);


// More about JS Arrays and accessing them
let countries =["Uganda", "Kenya", "Tanzania", "Rwanda", "Burundi"];
console.log(countries);
console.log(countries.length);
console.log(countries[3]);
countries.push("Canada");
console.log(typeof countries);
let stringer= countries.join(":");
console.log(stringer);
console.log(countries.indexOf("Canada"))
console.log(countries[3]);
console.log(countries.includes("Malaysia"));
console.log(countries.includes("Kenya"));
console.log(countries.lastIndexOf("Canada"));
console.log(countries.indexOf("Burundi"));
console.log(countries.slice(1,5));
console.log(countries.sort())

 
// Splitting JS arrays as strings
var people = "My name is Lwebuga Charles";
var arr = people.split(" ");
console.log(arr);
console.log(arr.length);


// Merging Arrays
    // Example 001
var num1 = [1,2,3,4];
var num2 = [5,6,7,8];
var num3 = [9,10,11,12];
var num4 = [13,14,15,16];
var num5 = num1.concat(num2,num3,num4)
console.log(num5);
console.log(num5.join("*"))


// More understanding about splitting and joining 
   // Example 002
var nom1 = [1,2,3];
var nom2 = [4,5,6];
var nom3 = nom1.concat(nom2);
console.log(nom3);
console.log(nom3.join("-"))

var home= "I am studying coding at SIR Center ";
console.log(home.split(" "))


// Sorting Arrays
  // Examole 001
var nam1 = [4,8,2,1,6,0,7]
console.log(nam1.sort(function(a,b)
  {return a-b}));
  // Example 002
var em = [109,637,37,83,25,93,03,52,63,45];
console.log(em.sort(function(a,b)
{return a-b}));
 // Example 003
let nom = [637,93,5093,24,537,83,12,53,59,37];
console.log(nom.sort(function(a,b){
  return b-a
}));

// Getting the highest value
 var nip = [45,688,35,73,39,53,037,627,733,763,10];
 console.log(nip.sort(function(a,b){
   return b-a 
 }));
 console.log(nip[0]);
 
// Getting the lowest value
var nip = [45,688,35,73,39,53,037,627,733,763,10];
 console.log(nip.sort(function(a,b){
   return a-b
 }));
 console.log(nip[0]);
 
 var students = [
         {name: "John", age: 7},
         {name: "Monica", age: 5},
         {name: "Paul", age: 6}
      ];
      
      students.sort(function(a, b) {
         return a.age - b.age;
      });
      console.log(students)
      console.log(typeof students)
      console.log(students.length)
    