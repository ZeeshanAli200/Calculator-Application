function getNum(num) {
    console.log(num)

    var res = document.getElementById("result")
    if (res.value === "0") {
        res.value = ""
        res.value += num
    }
    else {

        res.value += num
    }
}
function clr() {
    var res = document.getElementById("result")
    res.value = 0

}
function getResult() {
    var res = document.getElementById("result")
    res.value = eval(res.value)
}
