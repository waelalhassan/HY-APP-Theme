
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

//? start fix input text and email & textarea when blur [line 33 in contact.pug]
let InputText = document.querySelector("#inputText"),
    InputEmail = document.querySelector("#inputEmail"),
    textarea = document.querySelector("#textArea"),
    parentForm = document.querySelector(".get-in-touch");

checkIfInputNotImpty(InputText, "PreventPlaceholderName", parentForm);
checkIfInputNotImpty(InputEmail, "PreventPlaceholderEmail", parentForm);
checkIfInputNotImpty(textarea, "PreventPlaceholderTextarea", parentForm);

function checkIfInputNotImpty(ele, className, parent) {
    if (ele) {
        ele.addEventListener("blur", ()=> {
            if (!(ele.value === "")) {
                parent.classList.add(className)
            } else {
                parent.classList.remove(className)
            }
        })
    }
}
//? end fix input text and email & textarea when blur [line 33 in contact.pug]

//? start Failed Input [line 33 in contact.pug]
// submit button
let sub = document.querySelector("#sub");
// form tag
let Form = document.querySelector(".get-in-touch form");
// create elements for warning
let WarningText = document.createElement("span");
let WarningEmail = document.createElement("span");
let WarningTextarea = document.createElement("span");
// change textContent 
theText(WarningText, "Please enter your name");
theText(WarningEmail, "Please enter your email");
theText(WarningTextarea, "Leave your message here !");

function theText (ele, text) {
    ele.textContent = text;
};
// put element before inputs
insertB(WarningText, InputText);
insertB(WarningEmail, InputEmail);
insertB(WarningTextarea, textarea);

function insertB (ele, position) {
    if (Form) {
        Form.insertBefore(ele, position)
    }
};
// add class for each element
WarningClassName(WarningText ,"WarningText");
WarningClassName(WarningEmail ,"WarningEmail");
WarningClassName(WarningTextarea ,"WarningTextarea");

function WarningClassName(ele, className) {
    ele.className = className;
};
// change position for each element, with some properties
WarinigStyle(WarningText, "55px");
WarinigStyle(WarningEmail, "155px");
WarinigStyle(WarningTextarea, "340px");

function WarinigStyle(ele, top) {
    ele.style.position = "absolute";
    ele.style.top = top;
    ele.style.left = "-15px";
    ele.style.color = 'red';
    ele.style.padding = '10px';
    ele.style.borderRadius = '4px';
    ele.style.display = "none";
}
// add event click on submit button
if (sub) {
    sub.addEventListener("click", function(e) {
        // check if text field and email and textarea is empty
        if (InputText.value === "" || InputEmail.value === "" || textarea.value === ""){
            // stop sending
            e.preventDefault();
        } if (InputText.value === "") {
            // change border to red color for text field
            InputText.style.borderColor = "red";
            // show warning for text field
            WarningText.style.display = "block";
        } else {
            // set default border color 
            InputText.style.borderColor = "";
            // remove warning for text field
            WarningText.style.display = "none";
        }
        
        if (InputEmail.value === "") {
            InputEmail.style.borderColor = "red";
            WarningEmail.style.display = "block";
        } else {
            InputEmail.style.borderColor = "";
            WarningEmail.style.display = "none";
        }
        
        if (textarea.value === "") {
            textarea.style.borderColor = "red";
            WarningTextarea.style.display = "block";
        } else {
            textarea.style.borderColor = "";
            WarningTextarea.style.display = "none";
        }
    })
}
//? end Failed Input [line 33 in contact.pug]