const ourList = document.querySelector("#our-list");
const ourButton = document.querySelector("#our-button");
const headLine = document.querySelector("#our-headline");
let itemValue = 1

ourList.addEventListener("click", activateItem);

function activateItem(e) {
  console.log("click");
  if (e.target.nodeName == "LI") {
    headLine.innerHTML = e.target.innerHTML;
    for (let i = 0; i < e.target.parentNode.children.length; i++) {
        e.target.parentNode.children[i].classList.remove("active"); 
    }
    e.target.classList.add("active");
  }
}

ourButton.addEventListener("click", addItem);

function addItem() {
  ourList.innerHTML += "<li>List Item " + itemValue + "</li>";
  itemValue ++;
  ourList.classList.add("list-group-item", "listStyle")
}
