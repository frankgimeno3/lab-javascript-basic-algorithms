// ITERATION1
let hacker1 = "Pepito";
let hacker2 = "Manolo";
console.log(`The navigator's name is ${hacker2}`);

// ITERATION2
console.log("ITERATION2")

if (hacker1.length > hacker2.length){
  console.log(`The driver, ${hacker1}, has the longest name, it has ${hacker1.length} characters.`);
}
else{
  if (hacker2.length > hacker1.length){
    console.log(`It seems that the navigator, ${hacker2}, has the longest name, it has ${hacker2.length} characters.`);
  }
  else{
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`);
  }
}
// ITERATION3
console.log("ITERATION3")
console.log(`
Spaced name:`)

let hacker1Spaced = hacker1[0]
for(i=1; i<hacker1.length; i++){
    let upperLetter = hacker1[i].toUpperCase();
    hacker1Spaced = `${hacker1Spaced} ${upperLetter}`;
}
console.log(hacker1Spaced);
console.log(`
Reversed name:`)
let hacker2reversed = "";
for(i=hacker2.length; i>0; i--){
  let reversedLetter = hacker2[i-1];
  hacker2reversed = `${hacker2reversed}${reversedLetter}`;
}
console.log(hacker2reversed);

console.log(`
What name is first in lexicographic order?`)
if(hacker1[0]>hacker2[0]){
  console.log("Yo, the navigator goes first definitely.");
}
else{
  if(hacker2[0]>hacker1[0]){
    console.log("The driver's name goes first.");
  }
  else{
    console.log("What?! You both have the same name?")}
}
// BONUS
console.log(".....................");
console.log(`
BONUS 1`);
let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer cursus consequat augue, vel dapibus magna. Etiam mollis turpis nec aliquet laoreet. Maecenas sollicitudin semper mi nec placerat. Sed eu nunc a velit aliquam gravida vitae id dolor. Vestibulum quis viverra quam, elementum suscipit arcu. Nunc elit leo, vulputate finibus euismod nec, tincidunt a neque. Pellentesque finibus, enim a vehicula auctor, purus nisi aliquet felis, eget pellentesque tellus leo vitae quam.

Morbi convallis molestie ipsum nec bibendum. Proin dignissim, mauris euismod cursus elementum, ligula nisi vulputate tellus, a sollicitudin risus quam ullamcorper risus. Sed a dictum eros. Phasellus commodo ultrices nibh, in venenatis sem. In laoreet orci magna, sit amet aliquet neque imperdiet sit amet. Pellentesque et hendrerit dui. Nam eu mauris sit amet purus mattis semper id sit amet dui. Donec sed nunc turpis. Nam elementum leo non justo hendrerit posuere. Quisque vel dignissim nulla, vitae suscipit ex. Duis in leo sit amet augue pulvinar sodales non at velit. Cras ornare nibh tellus, eget euismod lorem lobortis quis. Morbi pretium congue tempus. Morbi dapibus, odio vitae venenatis viverra, neque ligula dapibus nisi, et consequat risus risus vitae velit. Donec lacus erat, aliquam quis vestibulum eu, cursus vel lorem.

Nam non lacus felis. Mauris ut tortor dolor. Cras auctor augue at lobortis porta. Nullam et libero justo. Maecenas dignissim mi eget urna efficitur, ac scelerisque neque varius. Etiam dignissim, tellus vel consequat volutpat, libero lectus porttitor ex, sit amet facilisis mi urna vel erat. Suspendisse potenti. Nulla porttitor et justo sit amet vehicula. Praesent volutpat massa vel enim placerat, vel vehicula eros placerat. Donec dapibus posuere scelerisque. Donec facilisis euismod vestibulum. Donec faucibus odio a nisi euismod, et finibus tortor pulvinar.`;
let countwords = 0;
let countEts=0
for(i=0; i<longText.length; i++){
  if(longText[i] == " "){
    countwords++
  }
  if(longText[i-1] == " " || longText[i] == "e" || longText[i+1] == "t" || longText[i+2] == " "){
    countEts++
  }
}
console.log(`The 3 first paragraphs of Lorem Ipsum have ${countwords} words`);
console.log(`The 3 first paragraphs of Lorem Ipsum have ${countEts} times the word et`);
// BONUS 2
console.log(".....................");
console.log(`
BONUS 2`);

let phraseToCheck = "A man, a plan, a canal, Panama!"
;
let leanPhrase = phraseToCheck.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
let leanPhrase2 = leanPhrase.replace(/ /g, "");
console.log(leanPhrase2);

let reversedleanPhrase2=leanPhrase2.split("").reverse().join("");
if (leanPhrase2.toUpperCase() == reversedleanPhrase2.toUpperCase()){
  console.log("It's a PALINDROME!");
} else{console.log("It's NOT!")}
