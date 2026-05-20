"use strict";

const searchInp = document.querySelector("#search");
const searchBtn = document.querySelector("#searchBtn");

const nameInp = document.querySelector("#nameInput");
const telInput = document.querySelector("#telInput");

const addBtn = document.querySelector("#addBtn");
const list = document.querySelector("#contactsList");

const map = new Map()

function addContact() {
    const nameInpValue = nameInp.value
    const telInpValue = telInput.value

    if (nameInpValue === '' || telInpValue === '') return 

    map.set(nameInpValue, telInpValue)

    nameInp.value = ''
    telInput.value = ''

    renderList()
}

function renderList() {
    list.innerHTML = ''

    for (let [name, phone] of map) {
        const li = document.createElement('li');
        li.textContent = `${name}, ${phone}`;
        list.appendChild(li)
    }
}

function findUser(book, userName) {
    try {

        if (!userName) return
    
        const name = userName.toLowerCase().trim()
    
        return book.filter(contact => {
            contact.nameInpValue.toLowerCase().includes(name)
        })
    } catch(err) {
        console.log(err, "ай донт кнов")
    }
}

addBtn.addEventListener("click", () => {
    addContact()
})

searchBtn.addEventListener("click", () => {
    const result = findUser(map, searchInp.value)
    alert(result)
})