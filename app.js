var form = document.getElementById('registrar');
var input = form.querySelector('input');
const ul = document.getElementById('invitedList');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const text = input.value;
    input.value = '';
    const li = document.createElement('li');
    li.textContent = text;
    const label = document.createElement('label');
    label.textContent = 'Confirmed';
    const checkbox = document.createElement('input');
    checkbox.type='checkbox';
    label.appendChild(checkbox);
    li.appendChild(label);
//create a REMOVE button for every li,make it child of LI
    const button = document.createElement('button');
    button.innerHTML='Remove';
    li.appendChild(button);
    
    ul.appendChild(li);//add item to the list
});
//checkboxes
ul.addEventListener('change', (e) => {
    const checkbox = event.target;
    const checked = checkbox.checked;
    const listItem = checkbox.parentNode.parentNode;
    
    if(checked) {
        listItem.className = 'responded';
    } else {
        listItem.className = '';
    }
});

ul.addEventListener('click', (e) => {
    if(e.target.tagName === 'BUTTON'){
        const li = e.target.parentNode;
        const ul = li.parentNode;
        ul.removeChild(li);
    }
});