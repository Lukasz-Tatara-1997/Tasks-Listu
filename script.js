{
  const welcome = () => {
    console.log("Hello World. I did my firs tasks List. I hope you enjoy it!");
  };
  welcome();

  const tasks = [
    {
      content: "kupić chleb",
      done: true,
    },
    {
      content: "isć na extra",
      done: false,
    },
  ];

  const render = () => {
    const newTask = document.querySelectorAll(".newTask");
    let htmlString = "";

    for (const task of tasks) {
      htmlString += `
      <li
      }>
      ${task.content}
      </li>
      `;
    }
    document.querySelector(".js--tasks").innerHTML = htmlString;
  };

  const addNewTask = (newTaskContent) => {
    tasks.push({
      content: newTaskContent,
    });
    render();
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    const newTaskContent = document
      .querySelector(".formInput--js")
      .value.trim();

      if (newTaskContent === ""){
        return;
      }
      addNewTask(newTaskContent);
     
  };

  const init = () => {
    render();

    const formElement = document.querySelector(".formElement");
    formElement.addEventListener("submit", onFormSubmit);
  };

  init();
}
