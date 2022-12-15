let x = document.getElementById('celsius');
let y = document.getElementById('fahrenheit');

x.addEventListener('input', function () {
    let cel = this.value;
    let cel2 = (cel * 9 / 5) + 32
    if (!Number.isInteger(cel2)) {
        cel2 = cel2.toFixed(2)
    }
    y.value = cel2;
})
y.addEventListener('input', function () {
    let fah = this.value;
    let fah2 = (fah - 32) * 5 / 9;
    if (!Number.isInteger(fah2)) {
        fah2 = fah2.toFixed(4)
    }
    x.value = fah2;
})