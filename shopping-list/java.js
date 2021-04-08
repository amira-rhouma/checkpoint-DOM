

function increment(){
    var text=document.getElementById("a1").value;
    text++;
    document.getElementById("a1").value=text;
    total()
    totals()
    
    
}

function decrement(){
    var text=document.getElementById("a1").value;
    if(text>=1){
    text--;
    document.getElementById("a1").value=text;}
    total()
    totals()
    
}

 function removeItem(){
    var parent = document.getElementById('ITEMS');
    var child = document.getElementById('item1');
    parent.removeChild(child);
}



function like(){
    let red=document.getElementById("heart");
    if(red.style.color=='black')
    {red.style.color='#FF0000'
    }
    else red.style.color='black'


}


function increment1(){
    var text=document.getElementById("a2").value;
    text++;
    document.getElementById("a2").value=text;
    total1()
    totals()
}

function decrement1(){
    var text=document.getElementById("a2").value;
    if(text>=1){
    text--; 
    document.getElementById("a2").value=text;}
    total1()
    totals()
    
}

 function removeItem1(){
    var parent = document.getElementById('ITEMS');
    var child = document.getElementById('item2');
    parent.removeChild(child);
}


function like1(){
    let red=document.getElementById("heart1");
    if(red.style.color=='black')
    {red.style.color='#FF0000'
    }
    else red.style.color='black'


}


function increment2(){
    var text=document.getElementById("a3").value;
    text++;
    document.getElementById("a3").value=text;
    total2()
    totals()
    
}

function decrement2(){
    var text=document.getElementById("a3").value;
    if(text>=1){
    text--;
    document.getElementById("a3").value=text;}
    total2()
    totals()

}

 function removeItem2(){
    var parent = document.getElementById('ITEMS');
    var child = document.getElementById('item3');
    parent.removeChild(child);
 }

function like2(){
    let red=document.getElementById("heart2");
    if(red.style.color=='black')
    {red.style.color='#FF0000'
    }
    else red.style.color='black'

}
//fonction totals
function total(){
    var prix=document.getElementById("a1").value*1379.00;
    document.getElementById("prix1").innerHTML=prix;
}

function total1(){
    var prix=document.getElementById("a2").value*176.80;
    document.getElementById("prix2").innerHTML=prix;
}
function total2(){
    var prix=document.getElementById("a3").value*249.00;
    document.getElementById("prix3").innerHTML=prix;
}
function totals(){
    var prix1=Number(document.getElementById("prix1").innerHTML);
    var prix2=Number(document.getElementById("prix2").innerHTML);
    var prix3=Number(document.getElementById("prix3").innerHTML);
    var somme=prix1+prix2+prix3;
    document.getElementById("finalPrice").value=somme;


    
}



   