const gen_btn = document.getElementById("gen_btn");

const notes_Container = document.querySelector(".notes_Container");

const remove_btn = document.querySelectorAll(".content_box img");

function Generate_notes() {
  let Content_box = document.createElement("div");
  Content_box.classList.add("content_box");

  let input = document.createElement("p");
  input.classList.add("input_box");
  input.setAttribute("contenteditable", "true");
  Content_box.appendChild(input);

  let del_img = "imgs/delete.png";
  let img = document.createElement("img");
  img.setAttribute("src", del_img);
  Content_box.appendChild(img);

  notes_Container.appendChild(Content_box);

  Store_data();
}

// Store_Data using localStorage
function Store_data() {
  localStorage.setItem("notes", notes_Container.innerHTML);
}

// Restore_Data from localStorage

function Restore_Data() {
  notes_Container.innerHTML = localStorage.getItem("notes");
}

Restore_Data();

notes_Container.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    Store_data();
  } else if (e.target.tagName === "P") {
    let input = document.querySelectorAll("p");
    input.forEach((p) => {
      p.addEventListener("input", () => {
        Store_data();
      });
    });
  }
});

gen_btn.addEventListener("click", Generate_notes);

// Generate new input on pressing Delete

document.onkeyup = (e) => {
  if (e.key === "Delete") {
    let p = notes_Container.querySelectorAll(".content_box");
    if (p.length > 0) {
      p[p.length - 1].remove();
    }
    Store_data();
  }
};
