
let pr = document.querySelectorAll(".punct");

for (let i = 0;i < pr.length;i++){

    let pl = pr[i].querySelectorAll("p");
    for(let item of pl){
       item.onclick = showP;
    }
}

 

function showP()
{
    event.stopPropagation();//что бы не вызывало события у предков
    let pt = event.target.dataset.p;
    let mas=document.querySelectorAll("."+pt + "~ .blocks");
    for(let i of mas)
        if(i.style.display == "flex")i.style.display="none";
        else i.style.display="flex";
}