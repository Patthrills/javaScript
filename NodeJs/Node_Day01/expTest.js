exports.newDate = function(){
    let x = new Date();
var y = "1234567890";
x.setTime(y);
if (isNaN(x)) {
    return("Passed");
    } else {
        return(x.getDate() 
        + ` This is a new begining.`);
    }
}