// collect all names of digit 
let clrbt=document.querySelector('.c');
let Inp=document.querySelector('#input-area');
let InpData=document.querySelector('#input-area').innerHTML;
let Equal=document.querySelector('.eq');
let maindiv=document.querySelector('#cal-btn');
let allselector=maindiv.children;


// Calculator Function   
for(let i=0;i<allselector.length;i++){
    if(allselector[i]==clrbt){
        clrbt.addEventListener('click',()=>{
            InpData=""
    })
    }

    else if(allselector[i]==Equal){
        let getResult=InpData;
        let mkresult=eval(getResult);
        InpData = mkresult;
    }

    else{
        
    allselector[i].addEventListener('click',()=>{
        Inp.innerHTML+=allselector[i].innerHTML;
    })
    }
}



