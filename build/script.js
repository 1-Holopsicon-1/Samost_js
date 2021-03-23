let btn = document.getElementById("btn");
let urlPng = document.getElementById("Url_png");
let textPng = document.getElementById("textPng");

btn.addEventListener("click", function () {
    let text_img = document.createElement("p");
    let new_img = document.createElement("img");
    let new_div = document.createElement("div");
    let close = document.createElement('span');
    let tmp_img = urlPng.value;
    let tmp_desc = textPng.value;

    new_img.setAttribute("src", tmp_img);
    new_img.setAttribute("width", "300");
    new_img.setAttribute("height", "300");
    text_img.innerHTML = tmp_desc;
    close.textContent = 'X';
    close.addEventListener("click", function (e) {
        e.target.parentElement.remove()
    })
    new_div.append(text_img)
    new_div.append(new_img)
    new_div.append(close)

    arena.append(new_div)
});

