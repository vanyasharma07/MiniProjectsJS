const prompt = require("prompt-sync")()
const contacts = []

function printInfo(){
    console.log("Following Operations can be performed: ")
    console.log("OPERATION 1: ")
    console.log("OPERATION 2: ")
    console.log("OPERATION 3: ")
    console.log("OPERATION 4: ")
    console.log("OPERATION 5: ")
}
function listContacts(contacts){
    for(let contact of contacts){
        console.log("name: ", contact.name)
        console,log("email: ", contact.email)
    }
}
function addContacts(){
    const name = prompt("name: ")
    const email = prompt("email: ")
    const contact = {
        name: name,
        email: email
    }
    contacts.push(contact)
}
function deleteContacts(){
    for(let i = 0;i<contacts.length; i++){
        const contact = contacts[i]
        console.log((i+1),toString() + ":", contact.name)
    }///first we assigned numner ids to contacts
    const number = parseInt(prompt("enetr the contact id number: "))
    if(isNaN(number) || number>contacts.length){
        console.log("invalid contact id")
    }
    else{
        contacts.splice(number-1, 1)
    }
}
function searchContacts(){
    const search = prompt("to search: ").toLowerCase()
    const result=[]
    for(let contact of contacts ){
        if(contact.name.includes(search)) {
            result.push(contact)
        }
    }
    console.log(result)
}

printInfo()

const number = prompt("enter the operation number: ")
let keepGoing = true
while(keepGoing){
    switch(number) {
        case "1":
            listContacts(contacts)
            break;
        case "2":
            addContacts()
            break;
        case "3":
            searchContacts()
            break;
        case "4":
            deleteContacts()
            break;
        case "5":
            keepGoing = false
            break;
        default:
            console.log("invalid operation")
            break;
    }
}