let input=document.querySelector(".input")
    let item=document.querySelector(".item")
    function Add(){
        if(input.value==""){
            alert("please enter task")
        }else{
            let newitem=document.createElement("li");

            newitem.innerHTML = `${input.value}<i id="i2" class="fa-solid fa-trash">`;
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

            newitem.querySelector("#i1").addEventListener("click",function(){
                let todolistitem=document.querySelectorAll('.item')
                todolistitem.forEach((item,index)=>{
                    item.id=`newitem-${index}`;
                });
                function edititem(event){
                    let todoitemid=event.target.parentNode.id;
                    let todoitem=document.getElementById(todoitemid);
                    let todoitemtext=todoitem.textContent;
                    let textinput=document.createElement('input');
                    textinput.type='text';
                    textinput.value=todoitemtext;
                    todoitem.parentNode.removeChild(textinput,todoitem)
                    textinput.addEventListener('blur',()=>{
                        let newtodoitemtext=textinput.value;
                        let newtodoitem=document.createElement('span');
                        newtodoitem.textContent=newtodoitemtext;
                        textinput.parentNode.replaceChild(newtodoitem,textinput);
                    })
                }
            })
        }
    }