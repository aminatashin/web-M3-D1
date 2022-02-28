

/*

1)
Create a function to calculate the sum of the two given integers. If the two values are same, then returns triple their sum.
*/
const line = function(number){
    console.log("exersice" , number)
}

line('1')
const sum = function(a,b){
    if(a===b){
        
        return (a+b) * 3;
    } else {
        
        return (a+b);

    }
};
console.log(sum(3,3))



/*
2)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
*/
line("2")
const check = function(a,b){
    if(a===50 || b===50 || (a+b===50)){
        return true
    }else {
        return false
    
    }
}
/*
3)
Create a function to remove a character at the specified position of a given string and return the new string.
*/
line("3")

const remove = function(str , pos){
return str.slice(0,pos) + str.slice(pos+1)
}
console.log(remove("strive",3))



/*

4)
 Create a function to find the largest of three given integers.
*/
line("4")

const largest = function (a,b,c){
    if(a>b && a>c){
        console.log(a);
    }else if (b> a && b>c){
        console.log (b);
    }else{
        console.log (c);
    }
}
largest(5,9,6)

/*5)
Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
*/
line("5")
const range = function(a,b){
    if(a >= 40 && a <= 60 && b >= 40 && b <= 60){
        console.log('a and b in range 40..60')
    }else if (a >= 70 && a <= 100 && b >= 70 && b <= 100){
        console.log('a and b in range 70..100')
    } else{
        return false
    }
}
range(45,55)

/*
6) 

Create a function to create a new string of specified copies (positive number) of a given string.
*/
line('6')
const creatCopies = function(str,n){
    if (n <= 0){
        return "n should be positive";
    } else {
        let copies = "";
        for (let i = 0; i < n ; i++) {
            copies += str ;
        }
        
        return copies
    }
    
}
console.log(creatCopies("amin",5))
/*

7)
Create a function to display the city name if the string begins with "Los" or "New" otherwise return blank.
*/
line("7")

const city = function(str){
if (str.startsWith('los') ||str.startsWith('new') ){
   return console.log(str)
}else{
    return console.log('blank')
}
}
city('losangeles')
city('alobama')
/*
8)
Crate a function to calculate the sum of three elements of a given array of integers of length 3.
*/
line('8')

 const calSum = function(...args){
     let sum = 0
     for(let i = 0 ; i< args.length ; i++){
         sum +=args[i]
     }
     return sum
 }
 console.log(calSum(3,5,2))
/*

9)
Create a function to test whether an array of integers of length 2 contains 1 or a 3. 
*/
line('9')

const test = function(arr) {
    // if (arr[0]===1 || arr[0]===3 || arr[1]===1 || arr[1]===3) {
    //    console.log('contains')
    // } else {
    //     console.log('doesnt contain')
    // }
    if(arr.includes(1) || arr.includes(3)){
        console.log('contains')
    }else{
        console.log('doesnt contain')
    }
  }
  test([1,6])
 
/*
10)

Create a function to test whether an array of integers of length 2 does not contain 1 or a 3
/*
*/
line('10')
const test2 = function(arr){
    if(arr[0]!== 1 || arr[0]!==3 ||arr[1]!== 1 || arr[1]!==3 ){
       console.log('doesnt contain')
    } else{
        console.log('contains')
    }
    
}
test2([3,7])

/*
11)

Create a function to find the longest string from a given array of strings.

*/
line('11')

const getLongest = function (arr){
const temp = [];
for(let i=0 ; i< arr.length ; i++){
    temp.push(arr[i].length);
}

    const largest = [...temp].sort((a,b)=> b - a)[0];
    const index = temp.indexOf(largest);
     return arr[index];
}
console.log(getLongest(['aa','cccccc','dd']))
/*
12)

Create a function to find the types of a given angle.

Types of angles:
    Acute angle: An angle between 0 and 90 degrees.
    Right angle: An 90 degree angle.
    btuse angle: An angle between 90 and 180 degrees.
    Straight angle: A 180 degree angle.
*/

line('12')
const anglesType = function(angle){
    if(angle<90){
        return 'acute'
    } else if(angle===90){
        return 'right'
    } else if ((angle>90) && (angle<180)){
        return 'btuse'
    } else if (angle === 180){
        return 'straight'
    }
}
console.log( anglesType(120))

/*
13)

Create a function to find the index of the greatest element of a given array of integers
*/
line('13')
const greatest = function(arr){
    
  
   const higherNumber = [...arr].sort((a,b)=> b - a)[0]
//   console.log(higherNumber)
  return arr.indexOf(higherNumber)
}
console.log(greatest([3,9,25]))
/*
/**
14)

Create a function to get the largest even number from an array of integers.
*/
line('14')

const even = function(arr){
   let yem = []
   for(let i =0 ; i<arr.length; i++){
       if(arr[i]%2===0){
           yem.push(arr[i])
       }
   }
   return yem.sort((a,b)=> b-a)[0];


}
console.log(even([2,7,8,12,18,3]))
/*
16)

Create a function to check from two given integers, whether one is positive and another one is negative.

17)

Create a function to create new string with first 3 characters are in lower case and the others in upper case. If the string length is less than 3 convert all the characters in upper case. 

18)

Create a function to calculate the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.

19)

Create a function to convert a number to a string, the contents of which depend on the number's factors. Follow next example:

If the number has 3 as a factor, output 'Diego'.
If the number has 5 as a factor, output 'Riccardo'.
If the number has 7 as a factor, output 'Stefano'.
If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
Examples
28's factors are 1, 2, 4, 7, 14, 28.
this would be a simple "Stefano".
30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
this would be a "DiegoRiccardo".
34 has four factors: 1, 2, 17, and 34.
this would be "34".

20)
Create a function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC

*/


