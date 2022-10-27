const allItems = document.querySelectorAll(".leftContainer ul li");

allItems.forEach(item => {
    item.addEventListener("click", function (e) {
        for (var i = 0; i < allItems.length; i++) {
            allItems[i].classList.remove("active");

        }
        this.classList.add("active");
    })
})
