
$(document).ready(function(){
    let angkaTekan, hasilakhir, angkaSebelumnya = 0, angkaSekarang = 0,hasiltxt, txtoperator, operator;

    $('.angka').click(function(e){
        angkaTekan = $(this).val();
        mencetakAngka(angkaTekan);
    });

    function mencetakAngka (angka) {
        if(angkaSekarang != 0){    
            angkaSekarang = angkaSekarang + angka

        }
        else{
            angkaSekarang = "" + angka

        }

        if(hasilakhir != undefined){
            angkaSekarang = angkaSekarang
        }

        $('#hasil').text(angkaSekarang);
        return angkaSekarang;
    }
    

    $('.operator').click(function () {
        txtoperator = $(this).text();
        operator = $(this).val();
        if(hasilakhir != undefined){
            hasiltxt = hasilakhir + txtoperator

        }else{
            hasiltxt = angkaSekarang + txtoperator
        }
        
        if(angkaSebelumnya != 0){
            hasiltxt = angkaSebelumnya +txtoperator;
        }
        
        angkaSekarang = angkaSekarang + operator
        $('#hasil').text(hasiltxt);
    
    })

    $('.reset').click(function () { 
        angkaTekan, hasilakhir, angkaSebelumnya = 0, angkaSekarang = 0,hasiltxt, txtoperator, operator;
        $('#hasil').text(0);
    })

    $('.samadengan').click(function(){
        try {
            hasilakhir = eval(angkaSekarang)
            $('#hasil').text(hasilakhir);
            angkaSebelumnya = hasilakhir;
            angkaSekarang = hasilakhir
            hasiltxt = '';
        }
            catch(err) {
            $('#hasil').text("Syntax error");
        }
        
    })

    $('.tombol').mousedown(function(){
        $(this).css({
            'backgroundColor':'rgb(246, 128, 30)',
            'color':'white'
        })
    })

    $('.tombol').mouseup(function(){
        $(this).css({
            'backgroundColor':'rgb(34, 34, 34)',
            'color':'rgb(0, 185, 130)'
        })
    })

    


    
});














