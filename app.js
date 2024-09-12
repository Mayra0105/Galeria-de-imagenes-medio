const images = [
    'monkey1.jpg',
    'monkey2.jpg',
    'monkey3.jpg',
    'monkey4.jpg',
    'monkey5.jpg',
    'monkey6.jpg'
];

let currentIndex = 0;

function openModal(index) {
    currentIndex = index;
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    modal.style.display = 'flex';
    modalImg.src = images[currentIndex];
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

function changeImage(direction) {
    currentIndex = (currentIndex + direction + images.length) % images.length;
    const modalImg = document.getElementById('modal-img');
    modalImg.src = images[currentIndex];
}