let quotes = [
  "Do Your Best and Keep Going",
  "Do not Give up",
  "Everyone makes mistake, This Is How You Can Love and Forgive Yourself",
];

// window.addEventListener("load", () => {
//   alert(`Welcome with the quote:\n"${quotes[Math.floor(Math.random() * 3)]}"`);
// });

const changeBg = (event) => {
  const getId = event.target.id;
  document.body.style = `background-color: ${getId}`;
  document.getElementsByTagName('span')[0].textContent = event.target.innerHTML
  console.log(event)
};

document.querySelector(`button#red`).addEventListener("click", changeBg);
document.querySelector(`button#green`).addEventListener("click", changeBg);
document.querySelector(`button#blue`).addEventListener("click", changeBg);
