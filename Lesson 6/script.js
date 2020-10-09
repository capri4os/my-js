function init() {
    var images = document.getElementsByClassName("sm-img");
    for (var i = 0; i < images.length; i++) {
        images[i].onclick = changeBigPicture;
    }
}

function changeBigPicture(eventObj) {
    var bigPicsDiv = document.getElementsByClassName("big-pics")[0];
    bigPicsDiv.innerHTML = "";
    var eventElement = eventObj.target;
    var imagePartName = eventElement.id.split("_");
    var src = "images/big-images/" + imagePartName[1] + ".jpg";
    var newBigPic = document.createElement("img");
    newBigPic.className = "bg-img";
    newBigPic.src = src;
    bigPicsDiv.appendChild(newBigPic);
    if (eventElement = null) {
        var message = createElement("h2");
        message.className = "h2-msg";
        message.innerText = "Фото не найдено";
        bigPicsDiv.appendChild(message);
    }
}


window.onload = init;