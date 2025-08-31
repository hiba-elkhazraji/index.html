new Typewriter("h2", {
  strings: "Hello world welcome to shecodes",
  autoStart: true,
  cursor: "",
  delay: 30,
});

//chalenge 1
let chalenge1Button = document.querySelector("#chalenge-1");
chalenge1Button.setAttribute("disabled", "disabled");
//chalenge 2
let chalenge2Button = document.querySelector("#chalenge-2");
chalenge2Button.style.backgroundColor = "green";
//chalenge 3
let chalenge3Button = document.querySelector("#chalenge-3");
chalenge3Button.classList.add("danger");
