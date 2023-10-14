const inputText = document.querySelector("#email");
const button = document.querySelector("#button");
const pMessage = document.querySelector(".error-message");
console.log(pMessage);

const validEmail = (email) => {
  const regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
  return regex.test(email);
};

const buttonClick = () => {
  const email = inputText.value;
  const valid = validEmail(email);
  if (valid) {
    pMessage.textContent = "Thanks for subscribing!";
    pMessage.style.color = "#90EE90"
    inputText.style.borderColor = "";
  } else {
    inputText.style.backgroundColor = "rgba(255,0,0,0.2)";
    inputText.style.borderColor = "red";
    pMessage.textContent = "Valid email required";
  }
};

button.addEventListener("click", buttonClick);
