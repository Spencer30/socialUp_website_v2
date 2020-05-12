const openMenu = () => {
    const burger = document.getElementById('burger');
    const exit = document.getElementById('exit');
    const navList = document.getElementById('navItems');
    navList.style.display = 'flex';
    burger.style.display = 'none';
    exit.style.display = 'block'
}

const closeMenu = () => {
    const burger = document.getElementById('burger');
    const exit = document.getElementById('exit');
    const navList = document.getElementById('navItems');
    navList.style.display = 'none';
    burger.style.display = 'flex';
    exit.style.display = 'none'
}
