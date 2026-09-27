const input = document.querySelector("#productInput");
const button = document.querySelector("#addButton");
const list = document.querySelector("#productList");

button.addEventListener("click", () => {
     const product = input.value.trim();

    if (product === "") {
        return;
    };

      const li = document.createElement("li");
       li.textContent = product;
         list.append(li);
         input.value = ""
});


