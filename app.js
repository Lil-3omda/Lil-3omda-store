document.addEventListener("DOMContentLoaded", function () {
    let allitem = document.querySelectorAll(".item");

    allitem.forEach(function (el){
        el.onmousemove = function() {
            allitem.forEach(function (el){
                el.classList.remove("active");

                el.querySelector('.description').style.display = 'none';
                el.querySelector('.price').style.display = 'none';
            });
            this.classList.add("active");

            this.querySelector('.description').style.display = '';
            this.querySelector('.price').style.display = '';

        };
    });
});

