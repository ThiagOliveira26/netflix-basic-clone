let signal = false

function showDesc(){

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

