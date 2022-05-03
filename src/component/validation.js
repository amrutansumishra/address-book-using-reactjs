export const validateName = (value)=>{
    if(value.length==0){
        return "Please enter a value";
    }else if(!isNaN(value)){
        return "Chatercters from a-z/A-Z allowed";
    }else{
        return false;
    }
}

export const validateAddress = (value)=>{
    if(value.length==0){
        return "Please enter a value";
    }else
    if(value.split(" ").length<3){
        return "Address should have a length of atleast 3 words";
    }else{
        return false;
    }
}
export const validateMobile = (value)=>{
    if(value.length==0){
        return "Please enter a value";
    }
    else if(isNaN(value)){
        return "Please enter numeric value";
    }else if(value.length!==10){
        return "Please enter a valid 10 digit mobile number";
    }else{
        return false;
    }
}
export const validateCity = (value)=>{
    if(value.length==0){
        return "Please enter a value";
    }else
    if(!isNaN(value)){
        return "Chatercters from a-z/A-Z allowed";
    }else{
        return false;
    }
}
export const validateStates = (value)=>{
    if(value.length==0){
        return "Please enter a value";
    }else
    if(!isNaN(value)){
        return "Chatercters from a-z/A-Z allowed";
    }else{
        return false;
    }
}
export const validateZip = (value)=>{
    if(value.length==0){
        return "Please enter a value";
    }
    else if(isNaN(value)){
        return "Please enter numeric value";
    }else
    if(value.length!==6){
        return "Please enter a valid 6 digit zip pin";
    }else{
        return false;
    }
}