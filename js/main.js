var changeBtn = document.getElementById("changeBtn");
var body = document.body;

// creat function to generate random color

function generateColor(){
    
    var chars = [0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"];
    var color = ""
    for(var i =1; i<= 6; i++){
        var randomIndex = Math.trunc(Math.random() * 16);
        var randomChar = chars[randomIndex];
        // console.log(randomChar);
        color += randomChar
        // console.log(color);
    };
    return "#" + color;    
}


// console.log(generateColor());

// generateColor();


// creat function to change linear-gradient with two colors 

function changeGradient(){
    body.style.backgroundImage = `linear-gradient(135deg, ${generateColor()} ,${generateColor()})`
}


changeBtn.addEventListener("click", changeGradient);