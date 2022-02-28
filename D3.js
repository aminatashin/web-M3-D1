

/*

1)
Create a function to calculate the sum of the two given integers. If the two values are same, then returns triple their sum.
*/
const line = function(number){
    console.log("exersice" , number)
}


const sum = function(a,b){
    if(a===b){
        
        return 3*(a+b)
    }else {
        
        return (a+b)

    }
}
sum(4,5)




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
let arr = ["lion" , 'frog' , 'dog']
const remove = function(){
arr.slice([0])
return arr.push('cow');
}
remove()



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
    if(a >= 40 || a <= 60 || b >= 40 || b <= 60){
        return true;
    }else{
        return false;
    }
}
range(45,55)

/*
6) 

Create a function to create a new string of specified copies (positive number) of a given string.
*/

/*

7)
Create a function to display the city name if the string begins with "Los" or "New" otherwise return blank.
*/
line("7")
// const city = function(name){
// if (){
//    return console.log(name)
// }else{
//     return console.log('blank')
// }
// }
// city('losangeles')
/*
8)
Crate a function to calculate the sum of three elements of a given array of integers of length 3.
*/

/*

9)
Create a function to test whether an array of integers of length 2 contains 1 or a 3. 
*/
line('9')

function is13(nums) {
    if (nums.indexOf(1) == 0 || nums.indexOf(3) == 0){
        return true;
    } else {
        return false;
    }
  }
  
  console.log(is13([7, 8]));
  console.log(is13([3, 2]));
  console.log(is13([0, 1])); 
/*

10)

Create a function to test whether an array of integers of length 2 does not contain 1 or a 3

11)

Create a function to find the longest string from a given array of strings.

12)

Create a function to find the types of a given angle.

Types of angles:
    Acute angle: An angle between 0 and 90 degrees.
    Right angle: An 90 degree angle.
    btuse angle: An angle between 90 and 180 degrees.
    Straight angle: A 180 degree angle.

13)

Create a function to find the index of the greatest element of a given array of integers

14)

Create a function to get the largest even number from an array of integers.

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


