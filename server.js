var express = require("express")
var app = express()



const VerifierDate=((request, response, next) => {
    
        let date = Date.now()
        let dateuser = new Date(date)
        if (dateuser.getDay()==0 || dateuser.getDay()==6 || 
        dateuser.getHours()<9 || dateuser.getHours()>18){
        response.send('Merci de revisiter notre site durant les horaires de travail');
        return;
        }
        next();
     
    
})

app.use(VerifierDate)
app.get('/', (request, response) => {
    response.sendFile(__dirname+"/pages/home.html")
});
app.get('/contact', (request, response) => {
    response.sendFile(__dirname+"/pages/contact.html")
});
app.get('/services', (request, response) => {
    response.sendFile(__dirname+"/pages/services.html")
});



app.listen(8080, ()=>{
    console.log('Running on port 8080');
})
