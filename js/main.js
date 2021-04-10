
let parent = document.querySelector(".items-quot"),
    item = document.querySelectorAll(".items-quot .item"),
    prev = document.querySelector(".control .prev"),
    next = document.querySelector(".control .next"),
    count = 0,
    numberItems = parent.children.length;

item.forEach(e => {
    e.style.display = "none";
    parent.children[0].style.display = "block";
})

prev.addEventListener("click", prevEle);
next.addEventListener("click", nextEle);

function nextEle() {
count++;
    if (count > numberItems - 1) {
    count = 0
    }

    item.forEach((e) => {
        e.style.display = "none";
        parent.children[count].style.display = "block";
    })

    next.classList.add("active")
    prev.classList.remove("active")

}

function prevEle() {
    if (count <= 0) {
        count = numberItems;
    }
count--;
    item.forEach((e) => {
        e.style.display = "none";
        parent.children[count].style.display = "block";
    })

    prev.classList.add("active")
    next.classList.remove("active")
}

