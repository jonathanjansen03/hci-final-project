let flag = false

function toggle() {
    let navbar = document.getElementById('navbar-menu')

    if (flag == false) {
        navbar.style.display = 'flex'
        flag = true
    } else if (flag == true) {
        navbar.style.display = 'none'
        flag = false
    }
}