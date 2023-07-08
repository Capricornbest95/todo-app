
function createTask() {
    // Get the input value
    var text = document.getElementById("inputText").value;

    // Create a new div element
    var taskItem = document.createElement("div");
    taskItem.className = "div-item";

    // Create a span for the text
    var newText = document.createElement("span");
    newText.className = "div-item-text";
    newText.textContent = text;

    // Created Date Function
    var createdDate = document.createElement("span");
    createdDate.className = "date";
    var taskHours = new Date().getHours();
    var taskMins = new Date().getMinutes();
    var taskSecs = new Date().getSeconds();
    createdDate.textContent = "Created at: " + taskHours + ":" + taskMins + ":" + taskSecs;


    // here is edit button function
    var editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.className = "edit-btn";
    editButton.onclick = function() {
      var editText = prompt("Enter new text:", newText.textContent);
      if (editText !== null) {
        newText.textContent = editText;
      }
    };

    // here is delete button function
    var deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.className = "delete-btn";
      deleteButton.onclick = function() {
      taskItem.remove();
     };

    // here is task comepleted checkbox function 
     var completeCheckbox = document.createElement("input");
        completeCheckbox.type = "checkbox";
        completeCheckbox.className = "check-input";
        completeCheckbox.onchange = function() {
          if (completeCheckbox.checked) {
            taskItem.style.textDecoration = "line-through";
            var completedContainer = document.getElementById("completedContainer");
            completedContainer.appendChild(taskItem);
            deleteButton.remove();
            editButton.remove();
          } else {
            taskItem.style.textDecoration = "none";
            var divContainer = document.getElementById("Tasklist");
            divContainer.appendChild(taskItem);
            taskItem.appendChild(deleteButton);
            taskItem.appendChild(editButton);
          }
        };


    // Appended Task div and other buttons 
    taskItem.appendChild(completeCheckbox);
    taskItem.appendChild(newText);
    taskItem.appendChild(createdDate);
    taskItem.appendChild(deleteButton);
    taskItem.appendChild(editButton);
    

   
    var Tasklist = document.getElementById("Tasklist");
    Tasklist.appendChild(taskItem);
  }