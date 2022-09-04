var x=0;

function change(){
    
    document.getElementById('result').innerHTML=x;
}
function changeS(){
    
    document.getElementById('submit').style.opacity=1;
    document.getElementById('submit').style.cursor='pointer';

}

function change1(){
    x=1;
    
    changeS();
    change();

}

function change2(){
    x=2;changeS();
    
    change();
}

function change3(){
    x=3;changeS();
    
    change();
}

function change4(){
    x=4;changeS();
    change();
}

function change5(){
    x=5;changeS();
    change();
}

function click_1(){
    
    if(x>0)
    {
        
        click_ok();
    } 
}

// function click_ok()
// {
//     document.getElementById('result').innerHTML="Clicked!";  
// }

function click_ok(){

    document.getElementById('content').replaceChildren();//clear content

    let ratedDiv=document.createElement('div');//for div
    ratedDiv.classList.add('thankRating');

    let thankImage=document.createElement('img');//for img
    thankImage.setAttribute("src","./images/illustration-thank-you.svg");
    thankImage.setAttribute('style','background: #1F2630;width:10em;padding:0; border-radius: 0;margin-left:3.2em;');
    thankImage.classList.add("thankimage");

    let thank =document.createElement('h2');//for thank you
    thank.setAttribute("style","text-align:center;");
    thank.innerHTML="Thank you!";

    let thankMessage=document.createElement('p');//for speech
    thankMessage.setAttribute("style","text-align:center;");
    thankMessage.innerHTML="We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch! ";

    //generating new content
    let container =document.getElementById('content');
    container.classList.add("thankContent");
    container.appendChild(thankImage);
    let rated = document.createElement('p');
    rated.setAttribute('style','background: #262F38;padding:.5em;color:#f89045ac;font-weight:500;border-radius: 3em;text-align:center;width:13em;margin-left:2.9em;')
    rated.innerHTML= 'You selected '+ x +' out of 5';
    ratedDiv.appendChild(rated);
    container.appendChild(ratedDiv);
    container.appendChild(thank);
    container.appendChild(thankMessage);
}


