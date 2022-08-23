
const contact = new Contact();   
try{
    contact.firstName = "abhis";
    console.log(contact.toString());
} catch(e){
    console.error(e);
}