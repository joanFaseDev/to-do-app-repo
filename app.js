/* DOM Objects */
const form = document.querySelector(`.container__form`);
const input = document.querySelector(`.container__input`);
const todoContainer = document.querySelector(`.todo-container`);
const para = document.querySelector(`.todo-init`);
const btnClear = document.querySelector(`.btn-clear`);

/* Call all the other functions in the right order */
function newEntry(evt) {
  /* Make it so the page can't refresh when an entry is submitted */
  evt.preventDefault();
  const value = input.value;
  checkPara();
  checkOl(value);
  resetInput();
}

/* Remove the initial paragraph when the first entry is submitted */
function checkPara() {
  if (document.querySelector(`p`)) {
    document.querySelector(`p`).remove();
  }
}

/* Check if the ordered list have already been created and, if not, create it */
function checkOl(value) {
  let hasOl = false;

  for (let element of todoContainer.children) {
    if (element.nodeName === `OL`) {
      hasOl = true;
    }
  }

  if (hasOl) {
    todoContainer.lastElementChild.append(initElements(value));
  } else {
    const ol = createOl();
    ol.append(initElements(value));
    todoContainer.append(ol);
  }
}

function initElements(value) {
  /* Creation of div/list item, initialisation of list item */
  const div = document.createElement(`div`);
  div.classList.add(`div--spacing`);
  const li = document.createElement(`li`);
  li.textContent = value;

  const btnRemove = createRemoveButton();
  const btnDone = createDoneButton();

  div.append(li, btnRemove, btnDone);
  return div;
}

/* Creation of the remove button and implementation of its logic */
function createRemoveButton() {
  const btnRemove = document.createElement(`button`);
  btnRemove.textContent = `Delete`;
  btnRemove.classList.add(`btn-remove`, `btn-item`);
  btnRemove.addEventListener(`click`, removeEntry);
  return btnRemove;
}

/* Creation of the done button and implementation of its logic */
function createDoneButton() {
  const btnDone = document.createElement(`button`);
  btnDone.textContent = `Done`;
  btnDone.classList.add(`btn-done`, `btn-item`);
  btnDone.addEventListener(`click`, doneEntry);
  return btnDone;
}

function createParagraph() {
  const para = document.createElement("p");
  para.textContent = `There's nothing to do at all!`;
  para.classList.add(`todo-init`);
  todoContainer.prepend(para);
}

/* Create an ordered list... i stick to the single responsability idea */
function createOl() {
  const ol = document.createElement(`ol`);
  return ol;
}

/* Reset the input field (is called every time a new entry have been successfully added */
function resetInput() {
  input.value = ``;
}

/* Remove the ordered list but only if it exists */
function deleteList() {
  if (todoContainer.firstElementChild.nodeName === `OL`) {
    todoContainer.firstElementChild.remove();
    createParagraph();
  }
}

/* Get the div container of the button through the event properties then remove the div and its childs */
function removeEntry(evt) {
  const parentDiv = evt.target.parentElement;
  parentDiv.remove();
}

/* Get the list element in the same div that the doneButton then apply a little Css to show that the entry is done */
function doneEntry(evt) {
  const li = evt.target.previousElementSibling.previousElementSibling;
  li.classList.add(`li--li-through`);
}

form.addEventListener(`submit`, newEntry);
btnClear.addEventListener(`click`, deleteList);
