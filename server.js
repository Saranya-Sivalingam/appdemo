var express=require('express');
var path=require('path');
const app=express();
//Configure public folder as static folder  to express module
var staticFolder=express.static(path.join(__dirname,"public"));
app.use(staticFolder);
app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname + '/index.html'));
});
app.listen(9000);
console.log("Website is being hosted on port no 9000");