 let myObj ={
     lock:function(target){
        target.classList.add('lock');
     },
     unlock:function(target){
         target.classList.remove('lock');
     }
 }
 
 // NAV OBJECT
 let navObj = {
    showNav:function(target){
        target.classList.add('lock');
    },
    closeNav:function(target){
        target.classList.remove('lock');
    },
    lockWrap:function(target){
        target.classList.add('lock');
    },
    unLockWrap:function(target){
        target.classList.remove('lock');
    },
    setNav:function(navList,wrap,navContainer){
        for(let idx=0;idx<navList.length;idx++){
            navList[idx].addEventListener('click',function(){
                navObj.unLockWrap(wrap);
                navObj.closeNav(navContainer);
            })
        }
    }
}

// HEADER OBJECT
let headerObj = {            
    lockHeader:function(target){
        target.classList.add('lock');
    },
    unLockHeader:function(target){
        target.classList.remove('lock');
    },
}

