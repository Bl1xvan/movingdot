const dot = document.getElementById("dot");
const buttonfield = document.getElementById("buttonfield");
const fieldrect = buttonfield.getBoundingClientRect();

document.addEventListener("keydown", function(event){
    let x = event.key;
    let spot = dot.getBoundingClientRect();
    let t = spot.y;
    let l = spot.x;
    if(x === "ArrowDown"){
        let movedown = t + 20;
        dot.style.top = `${movedown}px` ;  
    }
    if(x === "ArrowRight"){
        let moveright = l + 20;
        dot.style.left = `${moveright}px` ;  
    }
    if(x === "ArrowUp"){
        let moveup = t - 20;
        dot.style.top = `${moveup}px` ;  
    }
    if(x === "ArrowLeft"){
        let moveleft = l - 20;
        dot.style.left = `${moveleft}px` ;  
    }

    if(spot.x > fieldrect.x + fieldrect.width){
        dot.style.left = `${fieldrect.x + 20}px`;
    }
})
//This is the new branch!