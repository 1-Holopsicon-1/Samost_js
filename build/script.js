let btn = document.getElementById("btn");
let urlPng = document.getElementById("Url_png");

btn.addEventListener("click", function () {
    let text_img = document.createElement("p");
    let new_img = document.createElement("img");
    let tmp = urlPng.value();
    text_img.setAttribute("src", tmp);
    arena.append(text_img)
    arena.append(new_img)
});
