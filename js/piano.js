const buttons = document.querySelectorAll("button");
const audio = document.querySelectorAll(".myAudio");
const BACKGROUND = "linear-gradient(rgb(239, 239, 239), rgb(204, 204, 204))";

function playAudio(e) {
    switch(e.keyCode){
        case 65:
        audio[0].play();
        buttons[0].style.background = BACKGROUND; 
            break;  
        case 83:
        audio[1].play();
        buttons[1].style.background = BACKGROUND;
            break; 
        case 68:
        audio[2].play();
        buttons[2].style.background = BACKGROUND;
            break;  
        case 70:
        audio[3].play();
        buttons[3].style.background = BACKGROUND;
            break; 
        case 71:
        audio[4].play();
        buttons[4].style.background = BACKGROUND;
            break;  
        case 72:
        audio[5].play();
        buttons[5].style.background = BACKGROUND;
            break; 
        case 74:
        audio[6].play();
        buttons[6].style.background = BACKGROUND;
            break;  
        case 75:
        audio[7].play();
        buttons[7].style.background = BACKGROUND;
            break; 
    }


    function defaultBackround() {
      buttons.forEach((button)=>{
          button.style.background = "white"; 
      });
  }
  setTimeout(defaultBackround,100);
     
}

addEventListener(`keydown`,  playAudio );
