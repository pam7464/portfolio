let myObj ={
    lock:function(target){
    target.classList.add('lock');
    },
    unlock:function(target){
        target.classList.remove('lock');
    },
    setNav:function(navList,wrap,navContainer){
        for(let idx=0;idx<navList.length;idx++){
            navList[idx].addEventListener('click',function(){
                myObj.unlock(wrap);
                myObj.unlock(navContainer);
            })
        }
    }
}
 
