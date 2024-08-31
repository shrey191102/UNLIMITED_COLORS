const randomcolor=function(){
    const hex='0123456ABCDEF'
    let color='#'
    for(i=0;i<6;i++){
        color +=hex[Math.floor(Math.random() * 16)]
    }
    return color
};
let auto
const startchange=function(){
    const changing=function(){document.body.style.backgroundColor=randomcolor()}
   if(!auto){
    auto= setInterval(changing,100)
   }

}
const stopchange=function(){
    clearInterval(auto)
    auto=null;
}
document.querySelector('#start').addEventListener('click',startchange)
document.querySelector('#stop').addEventListener('click',stopchange)
