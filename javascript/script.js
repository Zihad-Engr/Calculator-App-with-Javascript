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
            Inp.innerHTML=""
    })
    }

    else if(allselector[i]==Equal){
        Equal.addEventListener('click',()=>{

            let mkresult=eval(Inp.innerHTML);
            if(mkresult!=undefined && mkresult!=null){
                Inp.innerHTML = mkresult;
            }
        })}
    

    else{
        
    allselector[i].addEventListener('click',()=>{
        Inp.innerHTML+=allselector[i].innerHTML;
    })
    }
}



