//Q7 Area of rect,

function areaOfRectangle(length, width){
    return length * width;
}

// Q8 Palndrome Check, 

function isPalindrome(str){
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}

// Q9 High School Grader, 

function highSchoolGrader(a,b,c,d,e){
    let grade=[a,b,c,d,e];
    let total=0;
    for(let i=0;i<grade.length;i++){
        total+=grade[i];
    }
    let average=total/grade.length;
    return average;
}

// Q10 Even Number Filter,

function evenNumberFilter(arr){
    return arr.filter(num => num % 2 === 0);
}

// Q11 Shopping Cart Total, 

function shoppingCartTotal(cart){
    var total=(cart.reduce((accumulator, currentValue) => accumulator + currentValue.price * currentValue.quantity, 0));
    return total;
}

// Q12 Book Inventory,

function bookInventory(title, author, isRead){
    return "Title: " + title + ", Author: " + author + ", Read: " + isRead;
}

// Q13 Object Array Finder, 

function objectArrayFinder(arr, movieTitle, rating){
    var name= arr.find(({ratinf}) => rating === 5);
    return name;
}

// Q14 Random Dice Roller,

function randomDiceRoller(){
    let roll = Math.floor(Math.random() * 6) + 1;
    return roll;
}

// Q15 Vowel Counter

function vowelCounter(str){
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    for (let char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}


console.log(areaOfRectangle(5, 10)); 
console.log(isPalindrome("racecar"));
console.log(highSchoolGrader(90, 85, 78, 92, 88)); 
console.log(evenNumberFilter([1, 2, 3, 4, 5, 6]));
console.log(shoppingCartTotal([{ price: 10, quantity: 2 }, { price: 5, quantity: 3 }]));
console.log(bookInventory("The Great Gatsby", "F. Scott Fitzgerald", true));
console.log(objectArrayFinder([{ title: "Inception", rating: 5 }, { title: "Interstellar", rating: 4 }], "Inception", 5));
console.log(randomDiceRoller());
console.log(vowelCounter("Hello World"));