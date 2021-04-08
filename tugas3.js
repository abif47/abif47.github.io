$(document).ready(function(){
    Dunia();
    Negara();
    setInterval(function(){
        Dunia();
        Negara();
    }, 3000);
    
    
    function Dunia(){
        $.getJSON({
            url : 'https://covid19.mathdro.id/api',
            success : function(data){
                try{
                    var positif = data.confirmed.value;
                    var mati = data.deaths.value;
                    var sembuh = data.recovered.value; 
                    $('#positif_global').html(positif);
                    $('#mati_global').html(mati);
                    $('#sembuh_global').html(sembuh);
                }catch{
                    alert('Error');
                }
            }
        });
    }
    function Negara(){
        $.getJSON({
            url : 'https://covid19.mathdro.id/api/countries/Indonesia',
            success : function(data){
                try{
                    var positif = data.confirmed.value;
                    var mati = data.deaths.value;
                    var sembuh = data.recovered.value; 
                    $('#positif_indonesia').html('Positif : '+positif+' Orang');
                    $('#mati_indonesia').html('Meninggal : '+mati+' Orang');
                    $('#sembuh_indonesia').html('Sembuh : '+sembuh+' Orang');
                }catch{
                    alert('Error');
                }
            }
        });
        $.getJSON({
            url : 'https://covid19.mathdro.id/api/countries/Malaysia',
            success : function(data){
                try{
                    var positif = data.confirmed.value;
                    var mati = data.deaths.value;
                    var sembuh = data.recovered.value; 
                    $('#positif_malaysia').html('Positif : '+positif+' Orang');
                    $('#mati_malaysia').html('Meninggal : '+mati+' Orang');
                    $('#sembuh_malaysia').html('Sembuh : '+sembuh+' Orang');
                }catch{
                    alert('Error');
                }
            }
        });
        $.getJSON({
            url : 'https://covid19.mathdro.id/api/countries/Singapore',
            success : function(data){
                try{
                    var positif = data.confirmed.value;
                    var mati = data.deaths.value;
                    var sembuh = data.recovered.value; 
                    $('#positif_singapura').html('Positif : '+positif+' Orang');
                    $('#mati_singapura').html('Meninggal : '+mati+' Orang');
                    $('#sembuh_singapura').html('Sembuh : '+sembuh+' Orang');
                }catch{
                    alert('Error');
                }
            }
        });
        $.getJSON({
            url : 'https://covid19.mathdro.id/api/countries/Timor-Leste',
            success : function(data){
                try{
                    var positif = data.confirmed.value;
                    var mati = data.deaths.value;
                    var sembuh = data.recovered.value; 
                    $('#positif_timorLeste').html('Positif : '+positif+' Orang');
                    $('#mati_timorLeste').html('Meninggal : '+mati+' Orang');
                    $('#sembuh_timorLeste').html('Sembuh : '+sembuh+' Orang');
                }catch{
                    alert('Error');
                }
            }
        });
        $.getJSON({
            url : 'https://covid19.mathdro.id/api/countries/Brunei',
            success : function(data){
                try{
                    var positif = data.confirmed.value;
                    var mati = data.deaths.value;
                    var sembuh = data.recovered.value; 
                    $('#positif_brunei').html('Positif : '+positif+' Orang');
                    $('#mati_brunei').html('Meninggal : '+mati+' Orang');
                    $('#sembuh_brunei').html('Sembuh : '+sembuh+' Orang');
                }catch{
                    alert('Error');
                }
            }
        });
    }
})
function Kembali(){
    history.go(-1);
}
