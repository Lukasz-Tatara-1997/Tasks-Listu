{
  const welcome = () => {
    console.log("Hello World. I did my firs tasks List. I hope you enjoy it!");
  };
  welcome();

  const tasks = [];

  const removeTask = (taskIndex) => {
    tasks.splice(taskIndex, 1);
    render();
  };

  const toggleTaskDone = (taskIndex) => {
    tasks[taskIndex].done = !tasks[taskIndex].done;
    render();
  };

  const addNewTask = (newTaskContent) => {
    tasks.push({
      content: newTaskContent,
    });
    render();
  };

  const bindRemoveEvents = () => {
    const removeTaskButtons = document.querySelectorAll(".js--remove ");
  
    removeTaskButtons.forEach((removeTaskButton, taskIndex) => {
      removeTaskButton.addEventListener("click", () =>{
        removeTask(taskIndex);
      });
    });
  };

const bindToggleDoneEvents = () => {
  const toggleDoneButtons = document.querySelectorAll(".toggleButton--js");

  toggleDoneButtons.forEach((toggleDoneButton, taskIndex) => {
    toggleDoneButton.addEventListener("click", () =>{
      toggleTaskDone(taskIndex);
    });
    
  });
};

  const render = () => {
    let htmlString = "";

    for (const task of tasks) {
      htmlString += `
      <li class="list__item"
      }><button class= " task__button task__button--toggleDone toggleButton--js ">
      ${task.done ? "✔" : ""}</button>
      <span class="tasks__content${task.done ? " tasks__content--done" : ""}">
      ${task.content}</span>
      <button class= " task__button task__button--remove js--remove "> 🗑 </button>
      </li>
      `;
    }

    document.querySelector(".js--tasks").innerHTML = htmlString;

    bindRemoveEvents();
    bindToggleDoneEvents();
  };



  const onFormSubmit = (event) => {
    event.preventDefault();

    const newTaskContent = document
      .querySelector(".formInput--js")
      .value.trim();

      const newTaskElement = document.querySelector(".formElement__input");


    if (newTaskContent !== "") {
      addNewTask(newTaskContent);
      newTaskElement.value = "";
    }
    newTaskElement.focus();
  };


  const init = () => {
    render();

    const formElement = document.querySelector(".formElement");
    formElement.addEventListener("submit", onFormSubmit);
  };

  init();
}
