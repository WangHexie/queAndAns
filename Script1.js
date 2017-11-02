function showAn() {
    var questions = $('[colspan="3"]');
    var img;
    var text;
    for (i = 0; i < questions.length; i++) {
        img = questions[i].firstElementChild;
        text = img.src;
        var newsrc = text.slice(0, -5) + "5.png";
        var newimg = document.createElement('img');
        newimg.src = newsrc;
        var grandparent = questions[i].parentElement.parentElement;
        grandparent.insertBefore(newimg, questions[i].parentElement);

    }
}
