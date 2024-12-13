var array = JSON.parse(localStorage.getItem('books')) ||[]
function enter(){
    if(space.value === '' || time.value === ''){
    warning.style.display = 'block'
    }
    else{
    warning.style.display = 'none'
    var info = {
        things: space.value,
        when: time.value
    };
    
        array.push(info)
        console.log(array);
        storage()
        show()
    }
}

function show(){
    display.innerHTML = ''
    display.innerHTML = `<p class = "fs-3 fst-italic text-center border-bottom border-3 border-dark">To-Do List...</p>`
    space.value = ''
    time.value = ''
    for(i=0; i<array.length; i++){
        display.innerHTML += `<p class="fs-4"> . ${array[i].things} -->  ${array[i].when}</p>`
}
}

function deleteIt() {
    var del = prompt('What number do you want to delete?');
    var index = parseInt(del) - 1;  
    if (isNaN(index) || index < 0 || index >= array.length) {
        alert('Invalid input! Please enter a valid task number.');
        return;
    }
    if (confirm('Press OK to confirm deletion.')) {
        array.splice(index, 1); 
        storage(); 
        show();  
    }
}

function storage(){
    localStorage.setItem('books', JSON.stringify(array))
}