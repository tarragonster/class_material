

// $('document').ready(function () {
//   alert('aaaa')
// })

function person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;

  this.fullName=function() {
    return this.name + " " + this.age;
  }
}

// function

var personA = new person('Ford Happy', 16, 'Male');

console.log(personA.fullName());

var theCentury;
function getCentury(date){
  theCentury = Math.ceil(date/100);

  return theCentury
}

function cutString(inputText){
  var outputText;

  outputText = inputText.substr(0,9);
  outputText =outputText.concat('...')

  return outputText
}

function convertText(inputText) {
  var outputText;

  outputText = inputText.toLowerCase();

  outputText = outputText[0].toUpperCase() + inputText.slice(1);

  return outputText
}

function printMinArray(){
  theInput = prompt("Please enter a number").split("");
  document.write(minArray(theInput));

}

function minArray(array){
  var t = array[0];
  for(var i=0;i<array.length;i++){
    t = min2(t,array[i])
  }
  return t
}
function min2(a,b) {
  if (a<b){
    return a
  }
  return b
}


function arrangeName() {
  arrayName = ['nam', 'thuy','anh','lan','hai']

  arrayName = arrayName.sort();

  for (var i = 0; i < arrayName.length; i++){
    document.write(arrayName[i] + '<br>')
  }
}

// vong lap

function duplicate(entry) {
  var index = 10;
  var finalNumb = entry;
  for(var i=0; i<index-1; i++){
    finalNumb = finalNumb +"-"+ entry
  }
  return finalNumb
}

function factorial(num) {
  var result = 1;
  for (var i = 1; i <= num; i++){
    result = result*i;
  }

  return result;
}

function takeOdd() {
  a = [2,3,7,5,4,8,21]

  for(var i=0;i<a.length;i++){
    a[i] = a[i]%2
  }
  return a
}

function redgreen() {
  var i = 1;
  var toInsertSpan = document.getElementsByClassName('toInsertSpan');
  while (i <= 100){
    if(i%2 == 0){
      toInsertSpan.value = i
    }else{
      toInsertSpan.value = i
    }
    i++
  }
}

// cau dieu kien 1

function max2(num1,num2){
  if (num1 > num2){
    return num1
  }
  return num2
}

function CheckIsNum(input){

  if(Number.isInteger(input) && input > 0){
    return factorial(input)
  }else{
    return "Positive integer number please!"
  }
}

function sortEventNum(){
  input = [1,2,5,3,4,5,6,23,45,36,78,34,53,];

  newArray = theEvenArray(input);

  return newArray.reverse();
}

function theEvenArray(a){
  var array =[];
  for(var i=0;i<a.length;i++){
    if (a[i]%2==0){
      array.push(a[i]);
    }
  }
  return array
}

function validateUser(){
  var user = {
    userName:null,
    password: null,
    confirm: null,
  };
  user.userName = prompt("Please enter your username");
  user.password = prompt("Please enter your password");
  user.confirm = prompt("Please confirm your password");
  if (user.userName.split("").length > 20){
    alert("username must be less than 20 characters!");
  } else if (user.password.split("").length < 6 || user.password.split("").length > 32){
    alert("password must be greater than 6 characters  and less than 32 characters")
  } else if(user.password !==  user.confirm){
    alert("your password is different with the your confirmation")
  }else{
    alert("welcome "+ user.userName)
  }
}

// cau dieu kien 2

function getToday() {
  var now = new Date();
  var date = now.getDate();
  var month = now.getMonth() +1;
  var year = now.getFullYear();
  document.write(date + "-" + month + "-" + year + "<br>");
  getSeasons(month)
}
function getSeasons(testMonth){
  switch (testMonth){
    case 3:
    case 4:
    case 5:
      document.write("it'Spring");
      break;
    case 6:
    case 7:
    case 8:
      document.write("it's Summer");
      break;
    case 9:
    case 10:
    case 11:
      document.write("it's Autumn");
      break;
    case 12:
    case 1:
    case 2:
      document.write("it' Winter");
      break;
  }
}

function checkGrade(x){
  var mark;
  if (0<=x<=3.9){
    mark = "F"
  }
  if (4<=x<=5.4){
    mark = "D"
  }
  if(5.5<=x<=6.9){
    mark = "C"
  }
  if(7<=x<=8.4){
    mark = "B"
  }
  if(8.5<=x<=10){
    mark = "A"
  }
  return "You got an " + mark;
}

function translate(countryCode){
  var foreignWord;
  switch(countryCode){
    case "chinese":
    case "Chinese":
      foreignWord = "你好";
      break;
    case "korean":
    case "Korean":
      foreignWord = "여보세요";
      break;
    case "japanese":
    case "Japanese":
      foreignWord = "こんにちは";
      break;
    case "greek":
    case "Greek":
      foreignWord = "γεια σας";
      break;
    case "romanian":
    case "Romanian":
      foreignWord = "salut";
      break;
    default:
      foreignWord = " Xin Chào";
      break;
  }
  return foreignWord
}

function getTrueIndex(){
  var arr = [false,false,false,true,false,false,true,false];
  var count = 0;
  do{
    count++
  }while (arr[count] === false);
  document.write("The true's index position in the Array is " + count);
}

// ve hinh

function doPrint(string,number){
  for (var i=0; i<number;i++){
    document.write(string)
  }
}

function displayTriangle(a){
  for (var i = 0; i<a; i++){
    doPrint("*",i);
    document.write("<br>")
  }
}

function theRectangle(a,b){
  doPrint("*&nbsp",a);
  document.write("<br>");
  for (var i=0; i<b-2;i++){
    doPrint("*",1);
    doPrint("&nbsp;&nbsp;&nbsp",a-2);
    document.write("&nbsp");
    doPrint("*",1);
    document.write("<br>")
  }
  doPrint("*&nbsp",a);
}

function specialTriangle(a){
  var theSpace = 0;
  for(var j=a*2-1;j>0;j = j-2){
    doPrint("*",j);
    theSpace++;
    document.write("<br>");
    doPrint("&nbsp;&nbsp",theSpace)
  }
}

function printX(theWidth){
  var theArray = [];
  var display = "";
  for (var j= 0; j<theWidth;j++){
    theArray[j] = [];
    for (var i= 0;i<theWidth;i++){
      if(i == j || i == theWidth-j-1){
        theArray[j][i]="*"
      }else{
        theArray[j][i] = "&nbsp;&nbsp"
      }
    }
  }
  for (var t =0; t<j;t++){
    display = display + arrToString(theArray[t]) + "<br>";
  }
  document.write(display);
}
function arrToString(arr){
  var genString ="";
  for(var i = 0; i< arr.length; i++){
    genString = genString + arr[i]
  }

  return genString;
}

function butterfly(theNum){
  var theArray = [];
  var display = "";
  for (let j= 0; j<theNum/2;j++){
    theArray[j] = [];
    for (let i= 0;i<theNum;i++){
      if(i <= j || i >= theNum-j-1){
        theArray[j][i]="*";
      }else{
        theArray[j][i] = "&nbsp;&nbsp"
      }
    }
  }
  for(let j = theNum-1; j>theNum/2; j--){
    theArray[j] = [];
    for(let i=0;i<theNum;i++){
      if(i>= j || i<= theNum-j-1){
        theArray[j][i]="*"
      }else{
        theArray[j][i]="&nbsp;&nbsp"
      }
    }
  }

  for (var t =0; t<theNum;t++){
    display = display + arrToString(theArray[t]) + "<br>";
  }
  document.write(display)
}
