let listOfBooks = document.getElementById('book-list');

//delete
listOfBooks.addEventListener('click', function (event) {
    console.log('EVENT', event.target);
    if (event.target.className == 'inp_del') {
        const bookItem = event.target.parentElement.parentElement;
        bookItem.remove();
    }
});

//add

const addForm = document.forms['add-book'];
addForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const value = addForm.querySelector('input[type="text"]').value;
    const li = document.createElement('li');
    const bookName = document.createElement('div');


    bookName.classList.add('ft');


    bookName.textContent = value;
    bookName.insertAdjacentHTML('beforeend', '<input type="submit" class="inp_del" value="delete">');

    li.appendChild(bookName);

    listOfBooks.appendChild(li);

});


//hide

let checkbox = document.getElementById('hide');
checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
        document.getElementById('book-list').hidden = true;
    } else {
        document.getElementById('book-list').hidden = false;
    }
});

//search
let find = document.getElementById('find');
find.onkeyup = function () {
    let filter = find.value.toUpperCase();
    let lis = document.getElementsByTagName('li');
    for (let i = 0; i < lis.length; i++) {
        let name = lis[i].getElementsByClassName('ft')[0].textContent;
        console.log(name);
        if (name.toUpperCase().indexOf(filter) == -1)
            lis[i].style.display = 'none';
        else
            lis[i].style.display = 'list-item';

    }
}
