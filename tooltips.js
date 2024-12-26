var tooltip = document.querySelectorAll('.tooltip');
console.log(tooltip);

document.addEventListener('mousemove', fn, false);
console.log('event');

function fn(e) {
    console.log('updating position');
    for (var i=tooltip.length; i--;) {
        tooltip[i].style.left = e.pageX + 'px';
        tooltip[i].style.top = e.pageY + 'px';
    }
}