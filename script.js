let input=document.querySelector(".input")
    let item=document.querySelector(".item")
    function Add(){
        if(input.value==""){
            alert("please enter task")
        }else{
            let newitem=document.createElement("li");

            newitem.innerHTML = `${input.value}<i id="i1" class="fa fa-pencil" aria-hidden="true"></i><i id="i2" class="fa-solid fa-trash">`;
            item.appendChild(newitem)
            input.value="" ;

            newitem.querySelector("#i2").addEventListener("click",remove)
            function remove(){
                newitem.remove()
            }
    
            newitem.addEventListener("click",function(){
            if(newitem.style.textDecoration=="none"){
                newitem.style.textDecoration="line-through"
            }else{
                newitem.style.textDecoration="none"
            }
            })

            newitem.querySelector("#i1").addEventListener("click", edititem);

function edititem(event){
    let todoitem = event.target.parentNode;
    let todoitemtext = todoitem.firstChild.textContent;
    let textinput = document.createElement('input');
    textinput.type = 'text';
    textinput.value = todoitemtext;

    // Replace the todo item text with the input box
    todoitem.replaceChild(textinput, todoitem.firstChild);

    textinput.addEventListener('blur', () => {
        let newtodoitemtext = textinput.value;
        let newtodoitem = document.createTextNode(newtodoitemtext);
        todoitem.replaceChild(newtodoitem, textinput);
    });
}
}
}