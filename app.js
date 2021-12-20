// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector("#shopForm");
const ul = document.querySelector("#list");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const item = form.elements.product;
  const qty = form.elements.qty;

  makeList(item.value, qty.value);

  item.value = " ";
  qty.value = " ";
});

const makeList = (item, qty) => {
  const newB = document.createElement("b");
  const newList = document.createElement("li");
  newB.append(item);
  newList.append(newB);
  newList.append(` - ${qty}`);
  ul.append(newList);
};
