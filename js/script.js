let nav_drop_down_trigger = document.getElementsByClassName('dropdown-trigger');

Array.from(nav_drop_down_trigger).forEach((e) => {
    let toggle_name = e.getAttribute('data-toggle');
    if (document.getElementById(toggle_name)) {
        e.addEventListener('click', () => document.getElementById(toggle_name).classList.toggle('hidden'));
    }
});


window.onclick = function (e) {
    if (!e.target.matches('.dropdown-trigger')) {
        let elements = document.getElementsByClassName('dropdown-trigger');
        for (let el of elements) {
            hideOutsideDivClick(el.getAttribute('data-toggle'));
        }
    } else {
        let target_el = e.target.getAttribute('data-toggle');
        let elements = document.getElementsByClassName('dropdown-trigger');
        for (let el of elements) {
            if (target_el !== el.getAttribute('data-toggle')) {
                hideOutsideDivClick(el.getAttribute('data-toggle'));
            }
        }
    }
};

function hideOutsideDivClick(id) {
    let element = document.getElementById(id);
    if (!element.classList.contains('hidden')) {
        element.classList.add('hidden');
    }
}