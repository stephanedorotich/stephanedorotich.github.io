var btn = document.getElementsByTagName("button");

for (var i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function () {
        if (this.classList.contains("alt")) {
            this.innerText = "Click to grow!";
        } else {
            this.innerText = "Click to shrink!";
        }
        this.classList.toggle("alt");
    })
}