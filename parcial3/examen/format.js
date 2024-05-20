function codificado(){
    let abece = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    let cifra = ["I","C","Ñ","H","O","M","T","L","B","S","A","R","Q","P","E","W","J","F","V","U","K","X","D","Y","N","Z","G"];
    let num = [1,2,3,4,5,6,7,8,9,0];
    let isnum = 2;
    let word = (document.forms[0].palabra.value);
    word=word.toUpperCase();
    let mcif = [];

    for(let i=0;i<word.length;i++){
        for(let j=0;j<10;j++){
            if(word[i]==num[j] && word[i] != " "){
                isnum=1;
            }
        }
    }

    if(word.length<=100 && word.length>=1 && isnum==2){

        for(let i=0;i<word.length;i++){
            for(let j=0;j<27;j++){
                if(word[i]==abece[j]){
                    mcif[i]=cifra[j];
                }
                if(word[i]==" "){
                    mcif[i]=" ";
                }
            }
        }
        var doc = new jsPDF();
        doc.setFontSize(10);
        doc.text(90,10,"CLAVE PARA EL CÓDIGO");
        doc.text(60,20,"A B C D E F G H I J K L M N Ñ O P Q R S T U V W X Y Z");
        doc.text(60,25,"I C Ñ H O M T L B S A R Q P E W J F V U K X D Y N Z G");
        doc.text(10,40,"Su palabra es: "+word);
        doc.text(10,45,"Su codificada es : "+mcif.join(''));
        var string = doc.output('datauristring');
        $('iframe').attr('src', string);
    
        document.getElementById("resultado").innerHTML = "SU MENSAJE CODIFICADO:";
        document.getElementById("word").innerHTML = mcif.join('');
    } else{
        document.getElementById("word").innerHTML = "Ingrese una cadena con más de 1 carácter y 100 o menos y que no contenga numeros";
    }

    return false;
}