
//? start custom carousel [line 92 in index.pug]
// parent of items
let parent = document.querySelector(".items-quot"),
    // items
    item = document.querySelectorAll(".items-quot .item"),
    // button prev
    prev = document.querySelector(".control .prev"),
    // button next
    next = document.querySelector(".control .next"),
    // counter
    count = 0,
    // number of items
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
    // add class active to next btn
    next.classList.add("active")
    // remove class active from prev btn
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

//? end custom carousel [line 92 in index.pug]