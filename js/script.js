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

// Handling sidebar
let initial_sidebar_icon_name='fa-chevron-right';
let clicked_sidebar_icon_name='fa-chevron-down';

document.getElementById('sidebar-menu').addEventListener('click', (e) => {
    let el = e.target;
    if (el.parentElement) {
        let children = el.parentElement.children;
        for (let child_el of children) {
            if (child_el.matches('.sidebar-collapse')) {
                let anchor_el_children = children[0].children;
                for (let anchor_child of anchor_el_children) {
                    if (anchor_child.classList.contains(initial_sidebar_icon_name)) {
                        anchor_child.classList.remove(initial_sidebar_icon_name);
                        anchor_child.classList.add(clicked_sidebar_icon_name);
                    }else{
                        anchor_child.classList.add(initial_sidebar_icon_name);
                        anchor_child.classList.remove(clicked_sidebar_icon_name);
                    }
                }

                child_el.classList.toggle('hidden');
            }
        }
    }
});