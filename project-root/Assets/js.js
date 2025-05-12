const form = document.getElementById("form");
if (form) {
  let startTime = 0;
  const emailInput = document.getElementById("email");
  const usernameInput = document.getElementById("username");
  const messageInput = document.getElementById("message");

  const startTimer = () => {
    startTime = Date.now();
  };
  form.addEventListener("focusin", startTimer, { once: true });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const endTime = Date.now();
    const durationMs = endTime - startTime;
    let durationText;
    if (durationMs < 60000) {
      durationText = `${(durationMs / 1000).toFixed(1)} seconds`;
    } else {
      durationText = `${(durationMs / 60000).toFixed(1)} minutes`;
    }

    const formData = {
      email: emailInput.value.trim(),
      username: usernameInput.value.trim(),
      message: messageInput.value.trim(),
    };
    if (!formData.email || !formData.username || !formData.message) {
      alert("Please fill in all fields");
      return;
    }
    alert(`Form successfully submitted! Time taken: ${durationText}`);

    form.reset();

    startTime = 0;
    form.addEventListener("focusin", startTimer, { once: true });
  });
}

const sortbutton = document.getElementById("sortbtn");

if (sortbutton) {
  sortbutton.addEventListener("click", () => {
    const arrayofnames = [...document.querySelectorAll("li")].map((li) =>
      li.textContent.trim()
    );
    let sortedarray = arrayofnames.sort();
    const list_items = sortedarray.map((text) => `<li>${text}</li>`).join("");

    const ul = document.querySelector("ul");
    ul.innerHTML = "";
    ul.innerHTML = list_items;
  });
}
