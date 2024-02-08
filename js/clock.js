const clock = document.querySelector("#clock");


function getclock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0")
    const minutes = String(date.getMinutes()).padStart(2, "0")
    const seconds = String(date.getSeconds()).padStart(2, "0")
    //string은 S대문자로 써야함
    clock.innerText = `${hours}:${minutes}:${seconds}`;

    //console.log("hello");

}

getclock()
setInterval(getclock, 1000);
