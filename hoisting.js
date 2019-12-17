foo();

var foo = 2;
var foo = 3;

console.log(foo);
function foo(){
    console.log('bar');
}
console.log(bar);
var bar = 1;
console.log(bar);


function foo(){
   // console.log(foo());
  
   console.log('baz');
   if(true){
    var a = 'bala';
   }
   console.log(a);

 
}
a();

function b(){
    console.log('inside b');
}

function a(){
    console.log('inside a');
    b();
}


var cat = {
 
   name: "Gus",
   color: "gray",
   age: 15,
 
   printInfo: function() {
      console.log("Name:", this.name, "Color:", this.color, "Age:", this.age); //line 1, prints correctly
 
      nestedFunction = function() {
          console.log("Name:", this.name, "Color:", this.color, "Age:", this.age); //line 2, loses cat scope
      }
 
   nestedFunction();
   }
}
cat.printInfo();

