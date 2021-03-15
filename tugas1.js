function Hasil(){
    average();
    highest();
    lowest();
    middle();     
}
function average(){
    var bil1,bil2,bil3;
    bil1 = parseFloat(document.getElementById("first").value);
    bil2 = parseFloat(document.getElementById("second").value);
    bil3 = parseFloat(document.getElementById("third").value);
    document.getElementById("rata_rata").innerHTML = (bil1+bil2+bil3)/3;
}
function highest(){
    var bil1,bil2,bil3;
    bil1 = parseFloat(document.getElementById("first").value);
    bil2 = parseFloat(document.getElementById("second").value);
    bil3 = parseFloat(document.getElementById("third").value);
    if(bil1 > bil2 && bil1 > bil3){
        document.getElementById("max").innerHTML = bil1;
    }
    else if(bil1 == bil2 && bil1 > bil3){
        document.getElementById("max").innerHTML = bil1;
    }
    else if(bil2 == bil3 && bil2 > bil1){
        document.getElementById("max").innerHTML = bil2;
    }
    else if(bil3 == bil1 && bil3 > bil2){
        document.getElementById("max").innerHTML = bil3;
    }
    else if(bil2 > bil1 && bil2 > bil3){
        document.getElementById("max").innerHTML = bil2;
    }
    else if(bil3 > bil1 && bil3 > bil2){
        document.getElementById("max").innerHTML = bil3;
    }
    else if(bil3 == bil1 && bil3 == bil2 && bil1 == bil2){
        document.getElementById("max").innerHTML = bil1;
    }     
}
function lowest(){
    var bil1,bil2,bil3;
    bil1 = parseFloat(document.getElementById("first").value);
    bil2 = parseFloat(document.getElementById("second").value);
    bil3 = parseFloat(document.getElementById("third").value);
    if(bil1 < bil2 && bil1 < bil3){
        document.getElementById("min").innerHTML = bil1;
    }
    else if(bil1 == bil2 && bil1 < bil3){
        document.getElementById("min").innerHTML = bil1;
    }
    else if(bil2 == bil3 && bil2 < bil1){
        document.getElementById("min").innerHTML = bil2;
    }
    else if(bil3 == bil1 && bil3 < bil2){
        document.getElementById("min").innerHTML = bil3;
    }
    else if(bil2 < bil1 && bil2 < bil3){
        document.getElementById("min").innerHTML = bil2;
    }
    else if(bil3 < bil1 && bil3 < bil2){
        document.getElementById("min").innerHTML = bil3;
    }
    else if(bil3 == bil1 && bil3 == bil2 && bil1 == bil2){
        document.getElementById("min").innerHTML = bil1;
    }  
}
function middle(){
    var bil1,bil2,bil3;
    bil1 = parseFloat(document.getElementById("first").value);
    bil2 = parseFloat(document.getElementById("second").value);
    bil3 = parseFloat(document.getElementById("third").value);
    var arr = [bil1,bil2,bil3];
    arr.sort(function(a, b) {return a - b});
    document.getElementById("mid").innerHTML = arr[1];
}
function Hapus(){
    location.reload();
}