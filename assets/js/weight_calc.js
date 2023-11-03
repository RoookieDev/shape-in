var height = document.querySelector("#height");
var gender = document.querySelector("#gender");

height.addEventListener("keyup", function(){
    height_calc();
});

height.addEventListener("change", function(){
    height_calc();
});


gender.addEventListener("change", function(){
    height_calc();
});




function height_calc(){
    var height_user = height.value;
    var gender_val = gender.value;
    if(gender_val==""||gender_val==null){
        $("#answer_bx").html("Select Gender Please");
        return false;
    }
    if(gender_val=='f'){
       var weight = (height_user-100)*0.85;
       if(height_user < 100){
        $("#answer_bx").html("Please Enter Valid Height");
       }
       else{
        $("#answer_bx").html(weight);
       }
    }

    else{
         weight = (height_user-100)*0.90;
       
       if(height_user < 100){
        $("#answer_bx").html("Please Enter Valid Height");
       }
       else{
        $("#answer_bx").html(weight);
       }
    }
}

