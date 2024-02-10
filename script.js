function copySpan(i){
    var copyText = document.getElementsByClassName("copytext")[i].innerHTML;
    navigator.clipboard.writeText(copyText);
    popToast();
}

function popToast(){
    var toast = document.getElementById("snackbar");
    toast.className = "visible";
    setTimeout(function(){ toast.className = toast.className.replace("visible", ""); }, 3000);
}