// check for palindrome
const str  = "naman";
let str1 = "";
for(let i=0; i<str.length; i++){
    str1+=str[str.length-1-i];
}
console.log(str1)

if(str1==str) console.log("Yes");
else console.log("No");