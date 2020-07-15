console.log("Array Practice");


var friends = ["Muluken", "Rahel", "Meron", "Melat", "Sami"];
console.log(friends);
friends.push("Daneal");
console.log(friends);

console.log(friends[2]);

//  function Exercide one

console.log("Functions Practice");

function myFirst(){
    console.log("Hello");
}
myFirst();


//  function Exercide two

function mySecond(a){
    console.log(a);
}
mySecond("Rahel")


//  function Exercide two


function myThird(i){
    mySecond(i);
}
myThird("Muluken");



//  function Exercide 4

var i=["rahel", 23, "Mule", "87"];
function myFourth(i) {
     console.log(i[0]);

}

myFourth(i);



//  function Exercide 5

function myFifth(a){
    let c= a[0] + a[1];
    console.log(c);
}
myFifth([4, 6,]);



//  function Exercide 6

function demir(b){
    let a=b[0] + b[1];
    return(a);

}
demir([10, 6]);

//write another function to uses demir function
function demirWithReturn(c){
    demir(c);
    document.write("<h2> " + demir(c) +" </h2>");
}
demirWithReturn([5,10 ]);



