let input = document.getElementById('input'),
    submit = document.getElementById('submitBtn'),
    pending = document.getElementById('pending'),
    canceled = document.getElementById('canceled'),
    complete = document.getElementById('complete'),
    parse = new DOMParser();


// adding todo input value to pending
submit.addEventListener('click', (event)=>{
    event.preventDefault();
    if(input.value == ''){
        input.placeholder = 'Field is empty';
        input.style.borderBlockColor = 'rgba(239, 68, 68)';
    }else{
        pendingText =`<div class="todo" draggable="true">
                                <label class="checkbox">${input.value}
                                    <input type="checkbox" class="absolute opacity-0 w-0 h-0">
                                    <span class="checkmark"></span>
                                </label>
                                <div class="mr-4">
                                    <i class="fa-regular fa-pen-to-square text-green-500 text-sm mr-2 cursor-pointer edit"></i>
                                    <i class="fa-solid fa-trash-can text-red-500 text-sm cursor-pointer delete"></i>
                                </div>
                            </div>`;
        let convertToHTML = parse.parseFromString(pendingText, 'text/html');
        convertToHTML = convertToHTML.body.children[0]
        updateList(pending, convertToHTML);
        input.value = '';
    }

});

    pending.addEventListener('click', (e)=>{
    // deleting checked item and move to canceled box
        if(e.target.classList.contains('delete')){
            let item = e.target.parentNode.parentNode;
            item.children[1].removeChild(item.children[1].firstElementChild);
            updateList(canceled, item)
        }else if(e.target.classList.contains('checkbox')){
            let item = e.target.parentNode;
            item.children[1].removeChild(item.children[1].firstElementChild);
            updateList(complete, item);
        }else if(e.target.classList.contains('edit')){
            let item = e.target.parentNode.parentNode;
            if(input.value == ''){
                input.value = item.firstElementChild.textContent.trim();
                item.remove();
            }else{
                let promptMSG = `Looks like you have an ongoing update already,"${input.value}"`
                alert(promptMSG);
            }
        }
    });


complete.addEventListener('click', (e)=>{
    // deleting checked item from complete box
    if(e.target.classList.contains('delete')){
        let item = e.target.parentNode.parentNode;
        updateList(canceled, item)
    }else if(e.target.classList.contains('checkbox')){
            let item = e.target.parentNode;
            let edit = `<i class="fa-regular fa-pen-to-square text-green-500 text-sm mr-2 cursor-pointer edit"></i>`;
            let convertToHTML = parse.parseFromString(edit, 'text/html');
            convertToHTML = convertToHTML.body.children[0]
            item.children[1].prepend(convertToHTML);
            updateList(pending, item);
        }
});

canceled.addEventListener('click', (e)=>{
    // deleting checked item from canceled box
    if(e.target.classList.contains('delete')){
        let item = e.target.parentNode.parentNode;
        item.remove();
    }
});

function updateList(box, boxArray){
    box.prepend(boxArray);
}
// clear all item in the box
let  test = document.getElementsByClassName('clear');
let reset = document.getElementById('reset')
for(let x=0; x< test.length; x++){
    test[x].addEventListener("click", function(){
        test[x].parentNode.children[1].innerHTML = '';
    })
    reset.addEventListener('click', function(){
        test[x].parentNode.children[1].innerHTML = '';
    })
}