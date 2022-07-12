//Botões de abrir e fechar o Menu

const estrutura = document.querySelector('#estrutura');
const estruturaAbrirFechar = ()=> estrutura.classList.toggle('menuAberto');
const estruturaFechar = ()=> estrutura.classList.remove('menuAberto');

const btnMenu = document.querySelector('.btn-menu').addEventListener('click', estruturaAbrirFechar);
const btnMenuFechar = document.querySelector('.btn-menu-fechar').addEventListener('click', estruturaAbrirFechar);

//Botões de abrir a pesquisa e fechar a pesquisa

const pesquisar = document.querySelector('.pesquisar');
const pesquisaAbrirFechar = ()=> pesquisar.classList.toggle('active');
const pesquisaFechar = ()=> pesquisar.classList.remove('active');

const search = document.querySelector('#search');

const btnPesquisarBuscar = document.querySelector('.btn-pesquisar-buscar')

const btnPesquisarFechar = document.querySelector('.btn-pesquisar-fechar')

function pesquisarItem() {
	pesquisar.classList.remove('active')
	btnPesquisarBuscar.classList.remove('active')
	btnPesquisarFechar.classList.add('active')
	search.value = ''
}

btnPesquisarBuscar.addEventListener('click', pesquisarItem);

const btnPesquisarAbrir = document.querySelector('.btn-pesquisar-abrir')
btnPesquisarAbrir.addEventListener('click', pesquisaAbrirFechar);

const pesquisarBG = document.querySelector('.pesquisar-bg').addEventListener('click', pesquisaAbrirFechar)

btnPesquisarFechar.addEventListener('click', pesquisaAbrirFechar);

search.addEventListener('input', (e)=> {
	if(e.target.value === '') {
		btnPesquisarFechar.classList.add('active')
		btnPesquisarBuscar.classList.remove('active')
	} else {
		btnPesquisarFechar.classList.remove('active')
		btnPesquisarBuscar.classList.add('active')
	}
})

document.addEventListener('keyup', e => {
	if(e.keyCode === 27) {
		pesquisaFechar()
	}

	return
})

search.addEventListener('keyup', e => {
	if (e.keyCode === 13) {
		pesquisarItem()
	}

	return
})

window.addEventListener("resize", ()=>  {
    let tamanhoTela = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (tamanhoTela >= 1000) {
        estruturaFechar()
    }
});