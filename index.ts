import inquirer from 'inquirer';
console.clear();

console.log(`---------------Count Your Words!------------`)
let checkreply = true;
async function Start(){
const text = await inquirer.prompt([{
    type : 'input',
    message :'Enter some text',
    name: 'userText',
}]);
//This function will return the total number of words in the text
function totalWordCount(){
    return new Promise((resolve,reject) =>{
        setTimeout(()=> {
            resolve(text.userText.split(' ').length)},1000);
        });

}
//This fucntion will return the total number of characters including white spaces.
function totalCharactersWithSpaces(){
    return new Promise((resolve,reject) =>{
        setTimeout(()=> {
            resolve(text.userText.split('').length)},1250);
        });

}
//This fucntion will display the total number of characters excluding the white spaces.
function totalCharactersWithoutSpaces(){
    return new Promise((resolve,reject) =>{
        setTimeout(()=> {
            resolve(text.userText.replace(/ /g,'').split('').length)},1500);
        });

}
//This fucntion will display the word count and character count in a sequential manner. Tried this to beautify the code.
async function displayCount(){
    try{
        let countOne = await totalWordCount();
        console.log(`Total number of words in the text : ${countOne}`);
        let countTwo = await totalCharactersWithSpaces();
        console.log(`Total Characters With Spaces : ${countTwo}`);
        let countThree = await totalCharactersWithoutSpaces();
        console.log(`Total Characters Without Spaces : ${countThree}`)
    }
    catch(error){
        console.log(error)
    }
    //This is to start the program again. so it is basically a loop.
    tryAgain();
   }

//This is the function  to implement a loop
async function tryAgain(){
    const reply = await inquirer.prompt([
        {
            type:'confirm',
            message:'Do you want to try again?',
            name:'confirm',
        }
    ]);
    checkreply = reply.confirm  
    if(!checkreply){
     console.log(`Adios,Hope to see you again...`)
        
    }
    else{
        Start();
    }

}
displayCount();

}

Start();
