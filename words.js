var message = document.getElementById("message")
var charcount = document.getElementById("charcount")
var wordcount = document.getElementById("wordcount")
var whitespacescount = document.getElementById("whitespacescount")
var lines = document.getElementById("lines")
message.addEventListener("keyup", function (e) {
    message.style.fontSize = "18px"
    var a = e.target.value
    charcount.innerHTML = a.length
    /*lines.innerHTML = a.split("\n").length - 1
    
    a = e.target.value
    a = a.replace(/\n/g, "")
    a = a.replace(/( ){2,}/g, " ")
    */
    var a = e.target.value
    a = a.replace(/\n/g, " ")
    a = a.replace(/( )+/g, " ")
    a = a.split(" ")
    wordcount.innerText = a.length - 1
    var a = e.target.value
    lines.innerText = (a.match(/\n/g) || []).length
    whitespacescount.innerHTML = (a.match(/( ){2,}/g) || []).length
    console.log((a.match(/\n/g) || []).length)
    console.log((a.match(/( ){2,}/g) || []).length)
})
