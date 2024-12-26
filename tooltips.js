var tooltip = document.querySelectorAll('.tooltip');
console.log(tooltip);

// document.addEventListener('mousemove', fn, false);
document.onmousemove = fn;
function fn(e) {
    console.log('mouse move');
    for (var i=tooltip.length; i--;) {
        tooltip[i].style.left = e.pageX + 'px';
        tooltip[i].style.top = e.pageY + 'px';
    }
}