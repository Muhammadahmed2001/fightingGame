var img = document.getElementById("img-1")
var a = 0
document.addEventListener('keydown', function () {
    var key = event.key
    console.log(key)
    if (key === "ArrowRight") {
        a += 1
        img.style.left = a + "%"
    }
    else if (key === "ArrowLeft") {
        a -= 1
        img.style.left = a + "%"
    }
    else if (key === "ArrowDown"){
        var chatactor = document.getElementById("chatactor")
        chatactor.src = "pic-animetion/evilryu-sfa-standlp.gif"
        setTimeout(() => {
            chatactor.src = "pic-animetion/evilryu-sfa-walk.gif"
          }, 500);
    }




})