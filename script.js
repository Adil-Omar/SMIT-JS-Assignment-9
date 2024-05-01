// a) Return the length of a given string.
function strLength(str){
    return str.length
}
var name="Adil Omar"
console.log("The length of string is: " + strLength(name))
// b) Concatenate two strings together.
function addString(string1,string2){
    return string1 +" "+string2
}
var name="Adil"
var fName="Omar"
console.log(addString(name,fName))
// c) Determine if a given string is empty.
function emptyString(str){
    if(str==""){
        console.log("The string is empty")
    }
    else{
        console.log("The string is not empty")
    }
}
var string=""
emptyString(string)
// d) Count the number of vowels in a string.
function countVowels(name){
    let count=0
    name = name.toUpperCase()
    for(let i=0; i<name.length; i++){
        let character= name.charAt(i)
        if(character=="A" || character=="E" || character=="I" ||character=="O" || character=="U"){
            count++
        }    
    }
    return count
}
let adil="Adil Omar"
console.log("Number of vowels in string are: "+countVowels(adil))
// e) Reverse a given string.
function reverse(string){
    reverseString=""
    for(let i=string.length-1; i>=0; i--){
        reverseString += string[i]
    }
    console.log(reverseString)
}
string="Adil Omar"
reverse(string)
// f) Check if a string is a palindrome.
function checkPalindrome(string){
    str=""
    for(let i=string.length-1; i>=0; i--){
        str += string[i]
    }
    if(str==string){
        console.log("String is palindrome")
    }else{
        console.log("Sting is not palindrome")
    }
}
string=prompt("Enter String")
checkPalindrome(string)
// g) Convert a string to uppercase.'
function upperCase(string){
    string=string.toUpperCase()
    return string
}
let input=prompt("Enter String")
console.log("Upper case string= " + upperCase(input))
// h) Find the first occurrence of a given character in a string
function findOccurence(string,char){
    string=string.toUpperCase()
    for(let i=0; i<string.length; i++){
        if(string[i]==char){
            return i
        }
    }
}
char="A"
string="Mohammad Adil"
console.log(findOccurence(string,char))

// i) Replace all occurrences of a given character in a string with another character.
function replaceOccurence(string,char,char1){
    let newString=""
    for (let i=0; i<string.length; i++){
        if(string[i]===char){
             newString+=char1
        }
        else{
            newString+=string[i]
        }
    }
    return newString
}
string="Samsung Galaxy"
char="a"
char1="b"
console.log(replaceOccurence(string,char,char1))
// j) Trim leading and trailing whitespace from a string.
function trimSpaces(string){
    let trimedString=string.trim()
    console.log(trimedString)
}
string="          My name is Adil Omar      "
trimSpaces(string)
// k) Count the number of words in a string.
function countWords(string){
    counter =0;
    for(let i=0; i<string.length; i++){
        counter ++;
    }
    return counter
}
string="Adil Omar"
console.log(countWords(string))
// l) Check if a string contains only numeric characters.
function checkNumber(string){
let character
     for(let i=0; i<string.length; i++){
        character=parseInt(string[i])
     }
     if(isNaN(character)){
        console.log("The string is not numeric")
    }else{
        console.log("The string is numeric")
    }
}

string="2357"
checkNumber(string)
// m) Check if a string is a valid email address.
function validEmail(email) {
    if (email.length === 0) {
        console.log("Invalid Email")
    }
    let atIndex = -1
    let dotIndex = -1
        for (let i = 0; i < email.length; i++) {
        if (email[i] === '@') {
            if (atIndex !== -1 || i === 0 || i === email.length - 1) {
                console.log("Invalid Email")
            }
            atIndex = i;
        } else if (email[i] === '.') {
            if (atIndex !== -1 && i !== email.length - 1) {
                dotIndex = i;
            }
        }
    }
    if (atIndex === -1 || dotIndex === -1 || dotIndex < atIndex || dotIndex === email.length - 1) {
        console.log("Invalid Email")
    }
    console.log("Valid Email")
}
validEmail("example@mail.com")
validEmail("example@mail")  

// n) Extract the domain name from a URL string.
function extractDomain(url) {
    if (url.length === 0) {
        return ""
    }
    let domain = ""
    let startIndex = -1
    let endIndex = -1
    for (let i = 0; i < url.length; i++) {
        if (url[i] === '/' && i + 1 < url.length && url[i + 1] === '/') {
            startIndex = i + 2
            break
        }
    }
    if (startIndex === -1) {
        return ""
    }
    for (let i = startIndex; i < url.length; i++) {
        if (url[i] === '/' || url[i] === ':' || url[i] === '?') {
            endIndex = i
            break
        }
    }
    if (endIndex === -1) {
        endIndex = url.length
    }
    domain = url.substring(startIndex, endIndex)
    return domain
}
console.log(extractDomain("https://www.example.com/path/to/page"))
// o) Convert a string into title case (the first letter of each word capitalized).
function toTitleCase(str) {
    let titleCaseStr = ""
    let capitalizeNext = true
    for (let i = 0; i < str.length; i++) {
        if (capitalizeNext && /[a-zA-Z]/.test(str[i])) {
            titleCaseStr += str[i].toUpperCase()
            capitalizeNext = false
        } else {
            titleCaseStr += str[i].toLowerCase()
        }
        if (str[i] === ' ') {
            capitalizeNext = true
        }
    }
    return titleCaseStr
}
console.log(toTitleCase("hello world"))
console.log(toTitleCase("this is a test string"))


// p) Remove all non-alphabetic characters from a string.
function removeNonAlphabetic(str) {
    let alphabeticStr = ""
    for (let i = 0; i < str.length; i++) {
        if ((str[i] >= 'a' && str[i] <= 'z') || (str[i] >= 'A' && str[i] <= 'Z')) {
            alphabeticStr += str[i]
        }
    }
    return alphabeticStr
}
console.log(removeNonAlphabetic("hello123"))
// q) Check if a string is a valid palindrome permutation (ignoring spaces).
function palindromePermutation(str) {
    let stringWithoutSpaces = str.replace(/\s/g, '');
    let charCount = {};
    for (let i = 0; i < stringWithoutSpaces.length; i++) {
        let char = stringWithoutSpaces[i].toLowerCase();
        charCount[char] = (charCount[char] || 0) + 1;
    }
    let oddCount = 0;
    for (let char in charCount) {
        if (charCount[char] % 2 !== 0) {
            oddCount++;
        }
    }
    return oddCount <= 1
}
console.log(palindromePermutation("race car"))
console.log(palindromePermutation("hello"))

// r) Check if a string is an anagram of another string.
// s) Find the longest word in a string.
// t) Perform string compression by replacing repeated characters with the character followed by the count.