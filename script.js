const container = document.getElementById('scroll-container');
container.addEventListener('wheel', e => { e.preventDefault(); container.scrollLeft += e.deltaY; });