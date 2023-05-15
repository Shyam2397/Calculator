let H=0;
let M=0;
let S=0;
let MS=0;

let myInterval;

let leadstart= (num)=>{
    return String(num).padStart(2,'0')
}

let root=document.createElement('div')
root.setAttribute('id','root')
document.body.appendChild(root)

let title=document.createElement('h1')
title.innerHTML='STOP-WATCH'
title.style.textAlign='center'
title.setAttribute('id','title')
document.getElementById('root').appendChild(title)

let watch=document.createElement('h2')
watch.innerHTML=`${leadstart(H)}<sub>H</sub> : ${leadstart(M)}<sub>M</sub> : ${leadstart(S)}<sub>S</sub>  <sub>${leadstart(MS)}</sub>`
watch.style.textAlign='center'
watch.setAttribute('id','watch')
document.getElementById('root').appendChild(watch)

let btn_wapper =document.createElement('div')
btn_wapper.setAttribute('id','btn_wapper')
btn_wapper.style.textAlign='center'
document.getElementById('root').appendChild(btn_wapper)

let st_btn = document.createElement('button')
st_btn.setAttribute('id','button')
st_btn.innerHTML="Start"
st_btn.addEventListener('click',()=>{
    if(st_btn.innerHTML==="Start")
    {
        st_btn.innerHTML="Stop"
        start()  
    }
    else
    {
        st_btn.innerHTML="Start"
        stop()
    }
    watch.innerHTML=`${leadstart(H)}<sub>H</sub> : ${leadstart(M)}<sub>M</sub> : ${leadstart(S)}<sub>S</sub>  <sub>${leadstart(MS)}</sub>`
})
document.getElementById('btn_wapper').appendChild(st_btn)


let reset_btn=document.createElement('button')
reset_btn.setAttribute('id','button')
reset_btn.innerHTML='Reset'
reset_btn.addEventListener('click',()=>{
    stop()
    st_btn.innerHTML="Start"
    H=0;M=0;S=0;MS=0;
    watch.innerHTML=`${leadstart(H)}<sub>H</sub> : ${leadstart(M)}<sub>M</sub> : ${leadstart(S)}<sub>S</sub>  <sub>${leadstart(MS)}</sub>`
})
document.getElementById('btn_wapper').appendChild(reset_btn )


function start(){ 
    myInterval = setInterval(()=>{
        ++MS
        if(MS===100){
            ++S
            MS=0
        } 
        if(S===60){
            ++M
            S=0
        }
        if(M===60){
            ++H
            M=0
        }
        watch.innerHTML=`${leadstart(H)}<sub>H</sub> : ${leadstart(M)}<sub>M</sub> : ${leadstart(S)}<sub>S</sub>  <sub>${leadstart(MS)}</sub>`
    },10)
}



function stop(){
    clearInterval(myInterval)
}