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
    const bookName = document.createElement('span');
    const deleteBtn = document.createElement('span');

    bookName.classList.add('name');
    deleteBtn.classList.add('delete');

    bookName.textContent = value;
    deleteBtn.textContent = 'delete';

    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    listOfBooks.appendChild(li);

});

