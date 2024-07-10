function createAnElement(element){
    return document.createElement(element);
}

function addText(element ,text){
    return (element.innerText = text);
}

function appendChild(child , parent){
    return parent.appendChild(child);
}

function select(selector){
    return document.querySelector(selector);
}

function listen(element,event,callback){
    return element.addEventListener(event , callback)
}

function addAttribute(element , attribute , content){
    return element.setAttribute(attribute , content);
}

const shoppinglist = [];

const ol = select ('ol');

listen(document,'DOMContentLoaded',displayItems());

function displayItems(){
    ol.innerHTML = '';
    shoppinglist.forEach(createAListItem);
}

function createAListItem(item){
    const li = createAnElement('li');
    addText(li , item);
    appendChild(li , ol);

    listen(li , 'click', togglechecked);
    li.classList.toggle('checked')
}

const form = select('form')
listen(form , 'submit' ,addItem);

function addItem(event){
    event.preventDefault();

    shoppinglist.push(event.target[0].value);
    console.log(shoppinglist);

    displayItems();

    event.target.reset();
}

const deleteButton = select('.delete');
listen(deleteButton , 'click ', clearlist);

function clearlist(){
    shoppinglist.length = 0;
    displayItems();
}