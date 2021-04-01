let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 
'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 
'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
console.log(secretMessage.length);

let newSecretMessage = secretMessage.pop(); // 2 step
//console.log(newSecretMessage);
console.log(secretMessage.length);

let newStringSecretMessage = secretMessage.push('to', 'Program'); // 3 step
console.log(secretMessage);

secretMessage[7] = 'right'; //4 step
console.log(secretMessage);

let removeItemSecretMessage = secretMessage.shift(); // 5 step
console.log(secretMessage);

let beggingAddSecretMessage = secretMessage.unshift('Programming'); // 6 step
console.log(secretMessage);

let removeStringSecretMessage = secretMessage.splice(6, 11, 'know'); // 7 step
console.log(secretMessage);

console.log(secretMessage.join(' ')); // 8 step 
//Programming,is,not,about,what,you,know,figure,out.,-2015,,Chris,Pine,,Learn,to,Program
//Programming is not about what you know figure out. -2015, Chris Pine, Learn to Program
