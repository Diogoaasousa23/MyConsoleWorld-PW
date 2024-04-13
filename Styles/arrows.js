// Lógica do carrossel para os "Trending games"
const trendingContainer = document.querySelector('.container');
const trendingSlides = trendingContainer.querySelectorAll('.col-md-2');

let trendingSlideIndex = 0;

// Função para mostrar os slides dos "Trending games"
function showTrendingSlides() {
    trendingSlides.forEach(slide => {
        slide.style.display = 'none';
    });

    for (let i = trendingSlideIndex; i < trendingSlideIndex + 5; i++) {
        if (trendingSlides[i]) {
            trendingSlides[i].style.display = 'block';
        }
    }
}

// Função para avançar para o próximo conjunto de slides dos "Trending games"
function nextTrendingSlides() {
    if (trendingSlideIndex < trendingSlides.length - 5) {
        trendingSlideIndex += 5;
    } else {
        trendingSlideIndex = 0;
    }
    showTrendingSlides();
}

// Função para retroceder para o conjunto anterior de slides dos "Trending games"
function prevTrendingSlides() {
    if (trendingSlideIndex > 0) {
        trendingSlideIndex -= 5;
    } else {
        trendingSlideIndex = trendingSlides.length - 5;
    }
    showTrendingSlides();
}

// Criar botões de controle como setas para os "Trending games"
const trendingPrevBtn = document.createElement('button');
trendingPrevBtn.classList.add('btn', 'btn-primary', 'prev-btn');
trendingPrevBtn.innerHTML = '<'; // Use um ícone de seta para a esquerda aqui
trendingPrevBtn.style.height = '35%'; // Definir a altura do botão
trendingPrevBtn.style.width = '5%'; // Definir a largura do botão
trendingPrevBtn.style.marginTop = '6%'; // Adicionar margem superior para baixar um pouco
trendingPrevBtn.style.marginLeft = '6%';

const trendingNextBtn = document.createElement('button');
trendingNextBtn.classList.add('btn', 'btn-primary', 'next-btn');
trendingNextBtn.innerHTML = '>'; // Use um ícone de seta para a direita aqui
trendingNextBtn.style.height = '35%'; // Definir a altura do botão
trendingNextBtn.style.width = '5%'; // Definir a largura do botão
trendingNextBtn.style.marginTop = '6%'; // Adicionar margem superior para baixar um pouco
trendingNextBtn.style.marginRight = '6%';

// Event Listeners para os botões de controle dos "Trending games"
trendingNextBtn.addEventListener('click', nextTrendingSlides);
trendingPrevBtn.addEventListener('click', prevTrendingSlides);

// Adicionando botões de controle dos "Trending games" à mesma div que contém os jogos
const trendingImagesContainer = document.createElement('div');
trendingImagesContainer.classList.add('row', 'justify-content-between', 'image-container');

trendingContainer.parentNode.insertBefore(trendingImagesContainer, trendingContainer); // Insere a div de contêiner de imagens antes da .container
trendingImagesContainer.appendChild(trendingPrevBtn); // Adiciona o botão de controle anterior ao contêiner de imagens
trendingImagesContainer.appendChild(trendingContainer); // Move a .container para dentro do contêiner de imagens
trendingImagesContainer.appendChild(trendingNextBtn); // Adiciona o botão de controle seguinte ao contêiner de imagens

// Mostra os slides iniciais dos "Trending games"
showTrendingSlides();

// Lógica do carrossel para os "All time popular games"
const allTimeContainer = document.querySelectorAll('.container')[1]; // Seleciona a segunda div com a classe .container
const allTimeSlides = allTimeContainer.querySelectorAll('.col-md-2');

let allTimeSlideIndex = 0;

// Função para mostrar os slides dos "All time popular games"
function showAllTimeSlides() {
    allTimeSlides.forEach(slide => {
        slide.style.display = 'none';
    });

    for (let i = allTimeSlideIndex; i < allTimeSlideIndex + 5; i++) {
        if (allTimeSlides[i]) {
            allTimeSlides[i].style.display = 'block';
        }
    }
}

// Função para avançar para o próximo conjunto de slides dos "All time popular games"
function nextAllTimeSlides() {
    if (allTimeSlideIndex < allTimeSlides.length - 5) {
        allTimeSlideIndex += 5;
    } else {
        allTimeSlideIndex = 0;
    }
    showAllTimeSlides();
}

// Função para retroceder para o conjunto anterior de slides dos "All time popular games"
function prevAllTimeSlides() {
    if (allTimeSlideIndex > 0) {
        allTimeSlideIndex -= 5;
    } else {
        allTimeSlideIndex = allTimeSlides.length - 5;
    }
    showAllTimeSlides();
}

// Criar botões de controle como setas para os "All time popular games"
const allTimePrevBtn = document.createElement('button');
allTimePrevBtn.classList.add('btn', 'btn-primary', 'prev-btn');
allTimePrevBtn.innerHTML = '<'; // Use um ícone de seta para a esquerda aqui
allTimePrevBtn.style.height = '35%'; // Definir a altura do botão
allTimePrevBtn.style.width = '5%'; // Definir a largura do botão
allTimePrevBtn.style.marginTop = '6%'; // Adicionar margem superior para baixar um pouco
allTimePrevBtn.style.marginLeft = '6%';

const allTimeNextBtn = document.createElement('button');
allTimeNextBtn.classList.add('btn', 'btn-primary', 'next-btn');
allTimeNextBtn.innerHTML = '>'; // Use um ícone de seta para a direita aqui
allTimeNextBtn.style.height = '35%'; // Definir a altura do botão
allTimeNextBtn.style.width = '5%'; // Definir a largura do botão
allTimeNextBtn.style.marginTop = '6%'; // Adicionar margem superior para baixar um pouco
allTimeNextBtn.style.marginRight = '6%';

// Event Listeners para os botões de controle dos "All time popular games"
allTimeNextBtn.addEventListener('click', nextAllTimeSlides);
allTimePrevBtn.addEventListener('click', prevAllTimeSlides);

// Adicionando botões de controle dos "All time popular games" à mesma div que contém os jogos
const allTimeImagesContainer = document.createElement('div');
allTimeImagesContainer.classList.add('row', 'justify-content-between', 'image-container');

allTimeContainer.parentNode.insertBefore(allTimeImagesContainer, allTimeContainer); // Insere a div de contêiner de imagens antes da .container
allTimeImagesContainer.appendChild(allTimePrevBtn); // Adiciona o botão de controle anterior ao contêiner de imagens
allTimeImagesContainer.appendChild(allTimeContainer); // Move a .container para dentro do contêiner de imagens
allTimeImagesContainer.appendChild(allTimeNextBtn); // Adiciona o botão de controle seguinte ao contêiner de imagens

// Mostra os slides iniciais dos "All time popular games"
showAllTimeSlides();
