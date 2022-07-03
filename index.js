// document.querySelector("button").addEventListener("click",handleClick); 
// function handleClick(){

//     alert(" I got clicked lol");
    
//     }
for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    //This u=is some gibberish which I tried lol...don't look at it  :)

    // document.querySelectorAll("button")[i].addEventListener("click",function(){
    //      });}
    // document.querySelectorAll("button")[i].addEventListener("click",playDrum);
    // function playDrum(querySelectorAll("button")[i]){
    //     var file="sounds/"
    //     var audio=new Audio('audio-file-name');

    //             audio.play();
    // document.querySelectorAll("button")[i].addEventListener("click",function(){
    //     console.log(this);
    //     this.style.color="white";
    //     });
    // // }





//DETECTING A wMOUSE-CLICK

    document.querySelectorAll(".drum")[i].addEventListener("click", function(){

        var buttonInnerHtml=this.innerHTML; //here "this" represents the button that caused the event     .....its inner html.
        
       
        makeSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);



    });}
    // DETECTING KEYBOARD PRESS
    


document.addEventListener("keydown",function(event){

    makeSound(event.key);
    buttonAnimation(event.key);
    
    });
    
    
    function makeSound(key){

        switch(key){
        
            case "w":
            
            var tom1=new Audio("sounds/tom-1.mp3");
            
            tom1.play();    //following the same old syntax..
            
            break;
            
            case "a":
            
            var tom2=new Audio("sounds/tom-2.mp3");
            
            tom2.play();
            
            case "s":
            
            var tom3=new Audio("sounds/tom-3.mp3");
            
            tom3.play();
            break;
            
            case "d":
            
            var tom4=new Audio("sounds/tom-4.mp3");
            
            tom4.play();
            
            break;
            
            case "j":
            
            var snare=new Audio("sounds/snare.mp3");
            
            snare.play();
            
            break;
            
            
            
            case "k":
            
            var kick=new Audio("sounds/kick-bass.mp3");
            
            kick.play();
            
            break;
            
            case "l":
            
            var crash=new Audio("sounds/crash.mp3");
            
            crash.play();
            
            break;
            
            default: console.log(button.InnerHtml); // if anything goes wrong then this is carried out.
            
            }
            
        }
        function buttonAnimation(currentKey){

            var activeButton = document.querySelector("."+currentKey); 
            activeButton.classList.add("pressed");
            
            setTimeout(function(){

                activeButton.classList.remove("pressed");
                
                },100); 
                
                }
            
            
        