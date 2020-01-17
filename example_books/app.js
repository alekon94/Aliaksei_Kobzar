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
document.getElementById('hide').onclick = function () {
    document.getElementById('book-list').hidden = true;
    document.getElementById('hide').onclick = function () {
        document.getElementById('book-list').hidden = false;
    }
}
//search
let find = document.getElementById('find');
find.onkeyup = function () {
    let filter = find.value.toUpperCase();
    let lis = document.getElementsByTagName('li');
    for (let i = 0; i < lis.length; i++) {
        let name = lis[i].getElementsByClassName('ft')[0].innerHTML;
        if (name.toUpperCase().indexOf(filter) == 0)
            lis[i].style.display = 'list-item';
        else
            lis[i].style.display = 'none';
    }
}
