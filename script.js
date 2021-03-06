const dot = document.getElementById("dot");

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
})

//left, top right etc, need to start with their default values.