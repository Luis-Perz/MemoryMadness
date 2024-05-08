// loading icons from image folder
var iconList = [
    "html-5",
    "css-3",
    "java-script",
    "java",
    "python",
    "php",
    "c-",
    "react"
]

var myIcons;
var board = [];
var rows = 4;
var cols = 4;


window.onload = function()  {
    randIcons();
    start();
}
// randomize icons
function randIcons(){
    // create icon pairs
    myIcons = iconList.concat(iconList);
    
    // create random icon output
    for (let i = 0; i < myIcons.length; i++){
        // output a random number and multipy it by the length of 'myIcons' list
        let j = Math.floor(Math.random() * myIcons.length);
        // save initial icon i and replace it with random icon j
        var loadedIcon = myIcons[i];
        myIcons[i] = myIcons[j];
        myIcons[j] = loadedIcon;
    }
    // verify that icons are outputting properly
    console.log(myIcons);
}

function start() {
    
    for (let k  = 0; k < rows; k++) {
        // creating rows for game board
        let rows = [];
        
        for( let l = 0; l < cols; l++){
            // remove the current icon from list
            let iconLogos = myIcons.pop();
            // insert next icon from list
            rows.push(iconLogos);
            // load icon images to game board
            let icon = document.createElement("img");
            icon.src = "images/" + iconLogos + ".png";
            document.getElementById("board").append(icon);
        }
        board.push(rows);
    }
}