let startString = "I am in the easycode";

for(let i = 0; i<startString.length;i++) {
    if(startString[i-1] == ' ') {
       let newSymbol = startString[i].toUpperCase();
      startString =  startString.substr(0, i)+ newSymbol + startString.substring(i+newSymbol.length);
    }
}
console.log(startString);

let c = "tseb eht ma i";
let d = "";

for (let i = c.length-1; i>=0; i--)
{
    d = d+c[i];
}
c = d;
console.log(c);

let factorial=1;
for (let i = 1; i<=10; i++)
{
    factorial*=i;
}
console.log(factorial);

let string1 = "Считаем до 10и: ";
document.write(string1);
for (let i = 1; i<=10; i++) {
    document.write((i===10)? i : i + ",");
}

let startString = "JavaScript is a pretty good language";

for(let i = 0; i<startString.length;i++) {
    if(startString[i-1] == ' ') {
        let newSymbol = startString[i].toUpperCase();
        startString =  startString.substr(0, i-1)+ newSymbol + startString.substring(i+newSymbol.length);
    }
}
console.log(startString);

let i = 0;
for (;i<=15;i++) {
    if(i%2!=0) {
        console.log(i);
    }
}









