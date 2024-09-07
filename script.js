document.getElementById('addTask').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        return; 
    }

    
    const li = document.createElement('li');
    li.innerHTML = `
        <span>${taskText}</span>
        <button class="remove">Remove</button>
    `;

    
    li.querySelector('span').addEventListener('click', function() {
        this.classList.toggle('completed');
    });

    
    li.querySelector('.remove').addEventListener('click', function() {
        li.remove();
    });

    
    document.getElementById('taskList').appendChild(li);

   
    taskInput.value = '';
});
