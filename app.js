//document.addEventListener('DOMContentLoaded' () => {
    var form = document.getElementById('registrar');
    var input = form.querySelector('input');

    var mainDiv = document.querySelector('.main');
    var ul = document.getElementById('invitedList');

    var div = document.createElement('div');
    var filterLabel = document.createElement('label');
    var filterCheckbox = document.createElement('input');

    filterLabel.textContent = 'Hide those who have not responded';
    filterCheckbox.type = 'checkbox';
    div.appendChild(filterLabel);
    div.appendChild(filterCheckbox);
    mainDiv.insertBefore(div, ul);

    filterCheckbox.addEventListener('change', (e) => {
        const isChecked = e.target.checked;
        const lis = ul.children;
        if(isChecked){
            for(let i = 0; i < lis.length; i += 1){
               let li = lis[i]; 
                if(li.className === 'responded'){
                    li.style.display === '';
                } else {
                    li.style.display = 'none';
                }
            }
        } else {
            for(let i = 0; i < lis.length; i += 1){
                let li = lis[i];
                li.style.display = '';
            }
        }
    });


    function createLI(text){
        const li = document.createElement('li');
        const span = document.createElement('span');//wrap the text input with span to become an html element
        span.textContent = text;
        li.appendChild(span);
    //create a a checkbox 
        const label = document.createElement('label');
        label.textContent = 'Confirmed';
        const checkbox = document.createElement('input');
        checkbox.type='checkbox';
        label.appendChild(checkbox);
        li.appendChild(label);
    //create an EDIT button for every li,make it child of LI
        const editButton = document.createElement('button');
        editButton.innerHTML = 'edit';
        li.appendChild(editButton);
    //create a REMOVE button for every li,make it child of LI
        const removeButton = document.createElement('button');
        removeButton.innerHTML='remove';
        li.appendChild(removeButton);
        return li;
    }

    form.addEventListener('submit', function(e){
        e.preventDefault();
        const text = input.value;
        input.value = '';
        const li = createLI(text);
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
            const button = e.target;//declaring button as the target
            if(button.textContent === 'remove'){
                ul.removeChild(li);
            } else if(button.textContent === 'edit'){
                const span = li.firstElementChild;
                const input = document.createElement('input');
                input.type = 'text';
                input.value = span.textContent;//so the name still appears on the input to edit
                li.insertBefore(input, span);
                li.removeChild(span);
                button.textContent = 'save';
            } else if(button.textContent === 'save'){
                const input = li.firstElementChild;
                const span = document.createElement('span');
                span.textContent = input.value;
                li.insertBefore(span, input);
                li.removeChild(input);
                button.textContent = 'edit';
            }
        }
    });

//});