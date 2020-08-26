let signal = false



function showDesc(){

    if((window.outerWidth) > 400){    
        if (!signal){
            let block = document.getElementById("descri");
            block.setAttribute('style','display:block');
            signal = true;
        }
        else{
            let block = document.getElementById("descri");
            block.setAttribute('style','display:none');
            signal = false;
        }    
    }
}