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
    let htmlString = "";

    for(const task of tasks){
      htmlString += `
      <li>
      ${task.content}
      </li>
      `;
    }
    document.querySelector(".js--tasks").innerHTML = htmlString;
  }

// const formElement = document.querySelector(".formElement");

// formElement.addEventListener("submit", (event) => {
//   event.preventDefault();
// });

const init = () => {
  render();
}


init();
}

