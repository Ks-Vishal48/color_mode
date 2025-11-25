let m= document.querySelector("#myclass");
let curr="light";

m.addEventListener("click",() =>{
    if(curr=='light'){
        curr='dark';
        document.querySelector('body').style.backgroundColor='black';
    }
    else{
        curr='light';
        document.querySelector('body').style.backgroundColor='white';
    }




})
