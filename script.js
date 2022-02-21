//Botões de abrir e fechar o Menu

const estrutura = document.querySelector('#estrutura');
const estruturaAbrirFechar = ()=> estrutura.classList.toggle('menuAberto');

const btnMenu = document.querySelector('.btn-menu').addEventListener('click', estruturaAbrirFechar);
const btnMenuFechar = document.querySelector('.btn-menu-fechar').addEventListener('click', estruturaAbrirFechar);

//Botões de abrir a pesquisa e fechar a pesquisa

const pesquisar = document.querySelector('.pesquisar');
const pesquisaAbrirFechar = ()=> pesquisar.classList.toggle('active');

const btnPesquisarAbrir = document.querySelector('.btn-pesquisar-abrir').addEventListener('click', pesquisaAbrirFechar);

const btnPesquisarFechar = document.querySelector('.btn-pesquisar-fechar').addEventListener('click', pesquisaAbrirFechar);