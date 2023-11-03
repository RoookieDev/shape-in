let menu = document.querySelector(".upper_con");

window.onscroll = function(){scrollFunction()};

function scrollFunction(){
    if(document.body.scrollTop > 20||document.documentElement.scrollTop > 20 ){
       menu.style.background='white';
       $(".menu a").css("color","black");
    }
    else{
        menu.style.background='none';
        $(".menu a").css("color","white");
    }

    
}


window.addEventListener('scroll', ()=>{
    let card_bx = document.querySelector(".road_map");
    let contentPosition = card_bx.getBoundingClientRect().top;
    let screenPosition = window.innerHeight/2;

    let calc_bx = document.querySelector(".calc_bx");
    let calc_content = calc_bx.getBoundingClientRect().top;




    if(contentPosition < screenPosition){
      card_bx.style.opacity = 1;
      card_bx.style.tranform='scale(1)'; 
    }
    else if(calc_content < screenPosition){
        //calc_bx.style.opacity = 1;
        //calc_bx.style.tranform = 'scale(1)';
        calc_bx.innerHTML = "heelo";
    }
    

    else{
        card_bx.style.opacity = 0;
        card_bx.style.tranform='scale("0.1")';
    
    }
});

