let h1 = document.querySelector('h1')

let [secs,mins,hrs] = [0,0,0]






function stopwatch(){
    secs = secs + 1;
    if(secs == 60){
        secs = 0;
        mins++
    }
     else if(mins == 60){
        mins = 0
        hrs ++
     }
    let s = secs<10?'0'+secs:secs
    let m = mins<10?'0'+mins:mins
    let h = hrs<10?'0'+hrs:hrs
    h1.innerText=`${h}:${m}:${s}`
}

function start(){
    
    setID = setInterval(stopwatch,1000)  
}
function stop(){
    clearInterval(setID)  
}
function restart(){
    [secs,mins,hrs] = [0,0,0]
    clearInterval(setID)
    h1.innerText='00:00:00'    

}




