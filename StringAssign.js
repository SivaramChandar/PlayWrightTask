
let input = "Sivaramchandar";
let chars = input.split("");
console.log(chars);
let reversed = ''
for (let i = chars.length-1;i>=0; i--){
    //console.log(chars[i])
    reversed += chars[i]
}
console.log(reversed)

// newChar = chars.reverse()
// console.log(newChar)

let result  = input.split("").reverse().join("")
console.log(result)
