let clickCount = 0;
const maxClicks = 3;

function handleYes() {
    clickCount++;
    const yesButton = document.querySelector('.yes-btn');
    
    // Animasi mengecil
    yesButton.classList.add('shrink-animation');
    
    setTimeout(() => {
        yesButton.classList.remove('shrink-animation');
        
        if (clickCount >= maxClicks) {
            // Pindah ke layer 2
            document.getElementById('layer1').classList.add('hidden');
            document.getElementById('layer2').classList.remove('hidden');
            document.getElementById('layer2').classList.add('fade-in');
        } else {
            // Update teks dengan ukuran yang semakin kecil
            const newSize = 1.2 - (clickCount * 0.2);
            yesButton.style.fontSize = newSize + 'em';
            yesButton.textContent = 'Iya'.repeat(clickCount + 1);
        }
    }, 500);
}

function handleNo() {
    // Gerakan acak untuk tombol "Tidak"
    const noButton = document.querySelector('.no-btn');
    const randomX = Math.random() * 100 - 50;
    const randomY = Math.random() * 100 - 50;
    
    noButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
    
    // Kembali ke posisi semula setelah 1 detik
    setTimeout(() => {
        noButton.style.transform = 'translate(0, 0)';
    }, 1000);
}

function resetApp() {
    // Kembali ke layer 1
    document.getElementById('layer2').classList.add('hidden');
    document.getElementById('layer1').classList.remove('hidden');
    
    // Reset state
    clickCount = 0;
    const yesButton = document.querySelector('.yes-btn');
    yesButton.style.fontSize = '1.2em';
    yesButton.textContent = 'Iya';
}