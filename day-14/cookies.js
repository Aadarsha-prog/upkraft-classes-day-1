const tableBody = document.querySelector("tbody");
const form = document.querySelector("form");
const keyInput = document.querySelector("#key");
const valueInput = document.querySelector("#value");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const keyInputValue = keyInput.value;
  const valueInputValue = valueInput.value;

  console.log({ keyInputValue, valueInputValue });
  const cookieString = `${keyInputValue}=${valueInputValue}; max-age=60;`;
  document.cookie = cookieString;
  renderCookiesTable();
});

function renderCookiesTable() {
  const cookies = document.cookie;
  const cookiesArray = cookies.split("; ");

  tableBody.innerHTML = "";
  cookiesArray.forEach((cookie) => {
    const keyValue = cookie.split("=");

    const [key, value] = keyValue;

    const tr = document.createElement("tr");
    const tdKey = document.createElement("td");
    const tdValue = document.createElement("td");
    const deleteBtn = document.createElement("button");

    tdKey.textContent = key;
    tdValue.textContent = value;
    deleteBtn.textContent = "Delete";

    tr.appendChild(tdKey);
    tr.appendChild(tdValue);
    tr.appendChild(deleteBtn);
    tableBody.appendChild(tr);
  });
}

renderCookiesTable();
