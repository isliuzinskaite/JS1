var buttons = document.getElementsByTagName("button");

for (var x of buttons){
    x.addEventListener("click", function(){
        for (var x of buttons){
            x.classList.remove("active");
        }
        var index = this.getAttribute("index");
        swiper.slideTo(index, 1000);
        this.classList.add("active");
    });
}

swiper.on("slideChange", function(){
    var activeButton = buttons[swiper.activeIndex];
    for(var x of buttons) {
        x.classList.remove("active");
    }
activeButton.classList.add("active");
});