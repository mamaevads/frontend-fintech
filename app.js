function checkAn() {
    let first = prompt("First word", "");
    let second = prompt("Second word", "");
    alert(first.split('').sort().join('')===second.split('').sort().join(''));
}
