
//? start custom carousel [line 92 in index.pug]
    // parent of items
let parent = document.querySelector(".items-quot");
    // items
let item = document.querySelectorAll(".items-quot .item");
    // button prev
let prev = document.querySelector(".control .prev");
    // button next
let next = document.querySelector(".control .next");
    // counter
let count = 0;
    // number of items
let numberItems;
// if parent not return null
if (!(parent === null)) {
    numberItems = parent.children.length;
}
// loop on items
item.forEach(e => {
    e.style.display = "none";
    if (parent) {
        parent.children[0].style.display = "block";
    }
})
// fix addEventListener if null
if (prev) {
    prev.addEventListener("click", prevEle);
}
if (next) {
    next.addEventListener("click", nextEle);
}

function nextEle() {
count++;
    if (count > numberItems - 1) {
    count = 0
    }
    item.forEach((e) => {
        e.style.display = "none";
        // if parent not null
        if (parent) {
            parent.children[count].style.display = "block";
        }
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
        // if parent not null
        if (parent) {
            parent.children[count].style.display = "block";
        }
    })
    prev.classList.add("active")
    next.classList.remove("active")
}
//? end custom carousel [line 92 in index.pug]

//? start fix input text and email when blur [line 33 in contact.pug]

// let text = document.querySelector(".get-in-touch input[type='text']");
// let parentForm = document.querySelector(".get-in-touch");

// text.addEventListener("blur", ()=> {
//     if (!(text.value === "")) {
//         parentForm.classList.add("preventSpan");
//     } else {
//         parentForm.classList.remove("preventSpan");
//     }
// })

//? end fix input text and email when focus [line 33 in contact.pug]
