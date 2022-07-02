const listItems = document.querySelectorAll('.planets-ul li');
const planets = document.querySelectorAll('.planets div');

listItems.forEach(item =>{
    item.addEventListener('click', () => {
        let itemData = item.getAttribute('data-name');
        planets.forEach(planet =>{
            let planetData = planet.getAttribute('data-name');
            if (itemData == planetData){
                document.querySelector('.planets-ul li.active').classList.remove('active');
                item.classList.add('active');
                document.querySelector('.planets div.active').classList.remove('active');
                planet.classList.add('active');
            }
        });
    });
});