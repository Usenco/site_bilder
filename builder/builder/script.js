
/*DRAG & DROP*/
function inner_another_block(elem1){
    let new_el = document.createElement("div");
    new_el.classList.add("newblocks");
    arr.push(new_el);
    down(new_el); 
    elem1.append(new_el);
}
let bool = true;
let backc;
let borders;
let notCurrentBelowElement;
let child_fl = document.querySelector("#left_panel");
let arr_child = new Array();
arr_child.push(document.querySelector("#left_panel"));

all_ch(child_fl);
function all_ch(child_fl){
    for(let item of child_fl.childNodes){
        arr_child.push(item);
        if(item != null){
            all_ch(item);
        }
    }
 }
 child_fl = document.querySelector(".h");
 arr_child.push(document.querySelector(".h"));
 all_ch(child_fl);

let arr = new Array();
function down(element){
    event.stopPropagation();
    element.onmousedown = function(){
         element.style.position = 'absolute';
         element.style.zIndex = 1000;
         element.style.height = "70px";
         element.style.width = "100px";
         element.style.border = "3px solid black";

         document.body.append(element);
         document.onmousemove = function(event){
            element.style.left = event.pageX - element.offsetWidth-10 + 'px';
            element.style.top = event.pageY - element.offsetHeight-10 + 'px';
            let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
            element.style.left = event.pageX - element.offsetWidth / 2 + 'px';
            element.style.top = event.pageY - element.offsetHeight / 2 + 'px';
            if (!elemBelow){
                element.onmouseup = null;
            }
            else {
                up(element);
            }
            //console.log();
            //if(elemBelow.nodeName != "BODY"&&elemBelow.nodeName !="HTML" && bool){
            for(let i = 0;i <arr.length;i++){
                if(notCurrentBelowElement != elemBelow &&notCurrentBelowElement&&notCurrentBelowElement.nodeName !="HTML"
                &&notCurrentBelowElement.nodeName !="BODY"){
                    bool = true;
                    for(let item of arr_child){
                       console.log(item.className);
                       if(notCurrentBelowElement.className == item.className ||notCurrentBelowElement.id == item.id){
                           if(item.className||item.id){
                       bool = false;break;}}
                    }
                    if(bool){
                        notCurrentBelowElement.style.backgroundColor = backc;notCurrentBelowElement.style.border = borders}
                }
                if(elemBelow.id == "header"||elemBelow.id == "main"||elemBelow.id == "footer"||arr[i].className == elemBelow.className){
                    if(notCurrentBelowElement != elemBelow){
                        //if(notCurrentBelowElement)notCurrentBelowElement.style.backgroundColor = backc;
                        backc = elemBelow.style.backgroundColor;
                        borders = elemBelow.style.border;
                    }
                    elemBelow.style.backgroundColor = "green";
                    elemBelow.style.border = "5px solid black";
                }           
                notCurrentBelowElement = elemBelow;
            }
       // }

            element.style.left = event.pageX - element.offsetWidth / 2 + 'px';
            element.style.top = event.pageY - element.offsetHeight / 2 + 'px';

         }
     }
     up(element);
     off(element);
}
function up(element){

    element.onmouseup = function(){
        element.style.left = event.pageX - element.offsetWidth-10 + 'px';
        element.style.top = event.pageY - element.offsetHeight-10 + 'px';
        let elemBelows = document.elementFromPoint(event.clientX, event.clientY);
        element.style.left = event.pageX - element.offsetWidth / 2 + 'px';
        element.style.top = event.pageY - element.offsetHeight / 2 + 'px';

        notCurrentBelowElement.style.backgroundColor = backc;notCurrentBelowElement.style.border = borders;
        
        if(elemBelows.id == "header"){
            element.remove();
            arr.splice(arr.indexOf(element), 1);
            inner_another_block(elemBelows)
        }

        document.onmousemove=null;
    }
}
function off(element){
    element.ondragstart = function() {
        return false;
    }
}



let elements = document.querySelectorAll(".subpunct");
let arrobj = new Array();

for(let i = 0; i < elements.length;i++){
     let elem;
     elements[i].onmousedown = function(){
        if(i == 0){
               elem = document.createElement("div");
               elem.classList.add("blocksElem");
               down(elem);
               elem.onmousedown();
               elem.style.left = event.pageX - elem.offsetWidth / 2 + 'px';
               elem.style.top = event.pageY - elem.offsetHeight / 2 + 'px';
               document.body.append(elem);
               arr.push(elem);
        }
        else if(i == 1){
                elem = document.createElement("img");
                elem.classList.add("imgElem");
                elem.src = "https://cs8.pikabu.ru/post_img/big/2016/02/04/7/145458292112119207.jpg";
                down(elem);
                elem.onmousedown();
                elem.style.left = event.pageX - elem.offsetWidth / 2 + 'px';
                elem.style.top = event.pageY - elem.offsetHeight / 2 + 'px';
                document.body.append(elem);
                arr.push(elem);
        }
        else if(i == 2){
                elem = document.createElement("p");
                elem.classList.add("pElem");
                elem.innerText = "текст";
                down(elem);
                elem.onmousedown();
                elem.style.left = event.pageX - elem.offsetWidth / 2 + 'px';
                elem.style.top = event.pageY - elem.offsetHeight / 2 + 'px';
                document.body.append(elem);
                arr.push(elem);
        }
    }
}