//variables
const toDoList = document.querySelector('.todo-list');
const toDoInput = document.querySelector('.todo-input');
const toDoBtn = document.querySelector('.todo-btn');
const warningMsg = document.querySelector('.warning-msg');
const filterOption = document.querySelector('.filter-todo');

//event listeners
toDoBtn.addEventListener('click', addTodo);
toDoList.addEventListener('click', deleteCheck);
window.addEventListener('scroll',() =>{
    console.log('f**k you');
})
filterOption.addEventListener('click',function filterTodo(e){
    const todos = toDoList.childNodes;
    todos.forEach((todo) =>{
        switch(e.target.value){
            case "all":
                todo.style.display = 'flex'
            case "Completed":
                if (todo.clasList.contains('completed')) {
                    todo.style.display = 'flex';
                }else{
                    todo.style.display = 'none'
                }
        }
    });
});
//functions
function addTodo(event){
    //Prevent form from submitting
    event.preventDefault();
    
    //create the todo div
    const toDoDiv = document.createElement('div');
    toDoDiv.classList.add('todo');

    //create li
    const newTodo = document.createElement('li');
    if(toDoInput.value !== ''){
        newTodo.innerText = toDoInput.value;
        warningMsg.style.display = 'none';
    }else{
        return warningMsg.style.display = 'block';
    }
    newTodo.classList.add('todo-item');

    toDoDiv.appendChild(newTodo);

    //checkmark button
    const completedBtn =document.createElement('button');
    completedBtn.innerHTML= '<i class = \'fas fa-check\'> </i>';// or regular create element | they both work :)
    completedBtn.classList.add('complete-btn');

    toDoDiv.appendChild(completedBtn);

    //trash button
    const trashBtn =document.createElement('button');
    trashBtn.innerHTML= '<i class = \'fas fa-trash\'> </i>';// or regular create element | they both work :)
    trashBtn.classList.add('trash-btn');

    toDoDiv.appendChild(trashBtn);

    //add the f**king div to the list =|
    toDoList.appendChild(toDoDiv);

    //clear input
    toDoInput.value = '';
}


function deleteCheck(event){
    //console.log(event.target);
    const item = event.target;

    //delete TODO
    if(item.classList[0] === 'trash-btn'){
        const todo = item.parentElement;
        
        //animation
        todo.classList.add('fall');
        todo.addEventListener('transitionend',() =>{
            todo.remove()
        })
        //todo.remove();
    }

    //check mark
    if (item.classList[0] === 'complete-btn') {
        const todo = item.parentElement
        todo.classList.toggle('completed');
    }
}


