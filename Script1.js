function showAn() {
    if (!window.jQuery) {
        script = document.createElement('script');
        script.src = ' https://code.jquery.com/jquery-3.2.1.min.js';
        document.body.appendChild(script);
    }
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
    return 0;
}

showAn();
