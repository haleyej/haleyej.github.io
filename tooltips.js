var tooltip = document.querySelectorAll('.tooltip');
console.log(tooltip);

document.addEventListener('mousemove', fn);
// document.onmousemove = fn;
function fn(e) {
    for (var i=tooltip.length; i--;) {
        tooltip[i].style.left = e.pageX + 'px';
        tooltip[i].style.top = e.pageY + 'px';
    }
}