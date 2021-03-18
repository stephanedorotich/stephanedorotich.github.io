// Source: https://www.w3schools.com/howto/howto_js_collapsible.asp

// declaring a variable to reference collapsible elements
var coll = document.getElementsByClassName("collapsible");
var i;

// add event listener to every collapsible element
for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        // Add "active" to its classlist
        this.classList.toggle("active");
        // Find the content related to this collapsible
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null; // hide content
        } else {
            content.style.maxHeight = content.scrollHeight + "px"; // reveal content
        }

        for (var j = 0; j < coll.length; j++) {
            if (coll[j] == this) continue;
            else {
                coll[j].classList.remove("active");
                var content = coll[j].nextElementSibling;
                content.style.maxHeight = null;
            }
        }
    });
}

