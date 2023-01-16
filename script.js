const form = document.getElementById("form");
const inputField = document.getElementById("inputField");
const parentEl = document.getElementById("ul-main");
const addTaskBtn = document.getElementById('add-task')


document.addEventListener('DOMContentLoaded', function() {

  addTaskBtn.addEventListener("click", addItem);
  parentEl.addEventListener("click", removeItem);
  
  
  function addItem(event) {
    event.preventDefault();
    
      // Grabbing the value of the text Input
      const newItem = inputField.value;
  
      if (newItem === ''){
        alert('InputField cannot be empty please enter a task..')
        return false;
      }
  
  
    // creating a new li element
    newli = document.createElement("li");
    // adding a class to it
    newli.className = "todo-items";
    // appending a text node
    newli.appendChild(document.createTextNode(newItem));
  
    // creating the delete button
    delEl = document.createElement("button");
    // add the class btn
    delEl.className = "btn";
    // appending a text node
    delEl.appendChild(document.createTextNode("X"));
  
    parentEl.appendChild(newli);
    newli.appendChild(delEl);
  }
  
  
  function removeItem(e) {
    if (e.target.classList.contains("btn")) {
      if (confirm("Are you sure you want to delete this Task?")) {
        newli = e.target.parentElement;
        parentEl.removeChild(newli);
      }
    }
  }
  
});
