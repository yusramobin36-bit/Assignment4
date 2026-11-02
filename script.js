let marks = [70, 80, 65, 90, 85] 
// Calculate total sum.
let sum=0
for (var i=0 ; i<marks.length ; i++)
{sum+=marks[i];}
console.log (sum)


let arr = [12, 45, 2, 99, 34, 5] 
//Find max and min number.
 let max=arr[0]
 let min=arr[0]
for ( var i=0 ; i<arr.length ; i++)
{if (arr[i]<min){min=arr[i]}
if (arr[i]>max){max=arr[i]}}
console.log(max)
console.log(min)


let names = ["Ali", "Ahmed", "Sara", "Fatima"];
//Reverse the array without using reverse().
names.splice(0,4,"fatima","sara","ahmed","ali")
console.log(names)


 let students = ["Zaid", "Hania", "Umar", "Hania", "Aiman"] 
 //Count how many times "Hania" appears.
let times=0
 for (var i=0 ;i<students.length;i++){
 if(students[i]==='Hania'){times++}}
console.log(times)


 let fruits = ["Apple", "Banana", "Guava"]  //Push "Mango" and then pop last element.
fruits.push("Mango")
console.log(fruits)
let fruitsagain =['Apple','Banana','Guava','Mango']
fruitsagain.pop()
console.log(fruitsagain)


let cities = ["Karachi", "Lahore", "Islamabad"] //Unshift "Quetta" then shift first element.
cities.unshift('quetta')
console.log(cities)
let citiesagain =["Karachi", "Lahore", "Islamabad","quetta"] 
cities.shift(0)
console.log(citiesagain)


let colors = ["Red", "Blue", "Yellow", "Green", "Black"] 
//Delete 1 element from index 2 and add "White" and "Purple".
colors.splice(2,2,"white","purple")
console.log(colors)


let items = ["Pen", "Book", "Copy", "Pencil", "Eraser", "Sharpener"] 
//Slice index 1 to 4 into new array, and splice "Pencil", "Eraser" with "Marker
let copy=items.slice(1,4)
console.log(copy)
items.splice(3,2,"Marker")
console.log(items)