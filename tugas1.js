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
    document.getElementById("max").innerHTML = Math.max(bil1,bil2,bil3);       
}
function lowest(){
    var bil1,bil2,bil3;
    bil1 = parseFloat(document.getElementById("first").value);
    bil2 = parseFloat(document.getElementById("second").value);
    bil3 = parseFloat(document.getElementById("third").value);
    document.getElementById("min").innerHTML = Math.min(bil1,bil2,bil3);
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
function Kembali(){
    history.go(-1);
}