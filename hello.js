let change = true;
function Changecolor(){
    if(change){
    document.getElementById("ooo").style.backgroundColor = "purple";
        change = false
    } else {
    document.getElementById("ooo").style.backgroundColor = "white";
    change = true
        
    }
}
