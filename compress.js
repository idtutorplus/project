function HTMLcompressor() {
    var allHTML = document.getElementById("oldCode").value;
    var headHTML = "";
    var removeThis = "";
    var headstatus = document.getElementById("headstatus").checked;
    if (headstatus != true) {
        //Compress all the things!
        allHTML = allHTML.replace(/(\r\n|\n|\r|\t)/gm, "");
        allHTML = allHTML.replace(/\s+/g, " ");
    } else {
        //Don't compress the head
        allHTML = allHTML.replace(new RegExp("</HEAD", "gi"), '</head');
        allHTML = allHTML.replace(new RegExp("</head ", "gi"), '</head');

        var bodySplit = "</head>";
        var i = allHTML.indexOf(bodySplit) != -1;
        if (i == true) {
            var bodySplit = "</head>";
            tempo = allHTML.split(new RegExp(bodySplit, 'i'));
            headHTML = tempo[0];
            allHTML = tempo[1];
        } else {
            bodySplit = "";
        }
        allHTML = allHTML.replace(/(\r\n|\n|\r|\t)/gm, "");
        allHTML = allHTML.replace(/\s+/g, " ");
        allHTML = headHTML + bodySplit + '\n' + allHTML;
    }
    document.getElementById("newCode").value = allHTML;
}