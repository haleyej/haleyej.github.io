var tooltip = document.querySelectorAll('.tooltip');
console.log(tooltip);

document.addEventListener('mousemove', fn, false);

function fn(e) {
    for (var i=tooltip.length; i--;) {
        console.log('hover!!!')
        tooltip[i].style.left = e.pageX + 'px';
        tooltip[i].style.top = e.pageY + 'px';
    }
}