const ourButton = getElementById("our-button");
const headLine = document.getElementById("our-headline");
const listItems = document.getElementById("our-list").getElementsByTagName("li")

for (let i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener("click", activateItem);
}

function activateItem() {
    console.log("click");
    headLine.innerHTML = this.innerHTML;
}

ourButton.addEventListener("click", addItem);

function addItem() {
    
}