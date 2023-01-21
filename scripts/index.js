if (window.location.pathname === "/procedimentos.html") {
	const listaBotao = document.querySelectorAll(".menu-flecha-botao");
	const listaImgProcedimento = document.querySelectorAll(".img-coluna-procedimento");
	const listaProcedimento = document.querySelectorAll(".lista-procedimentos");
	const listaFlechaBotao = document.querySelectorAll(".menu-flecha");
	const currentURLAnchor = window.location.hash;
	const btnAgendamento = document.querySelector("#botao-agendamento-procedimentos");

	btnAgendamento.classList.toggle("display-none");
	for (let i = 0; i < listaBotao.length; i++) {
		listaProcedimento[i].classList.toggle("display-none");

		function showList(index) {
			listaProcedimento[index].classList.toggle("display-none");
			listaFlechaBotao[index].classList.toggle("menu-flecha-rotação");
			listaFlechaBotao[index].style.animation = "floating 2s infinite ease-in-out";
			btnAgendamento.classList.toggle("display-none");
		}

		listaBotao[i].addEventListener("click", function () {
			showList(i);
		});

		listaImgProcedimento[i].addEventListener("click", function () {
			showList(i);
		});
	}

	function showListFromAnchor() {
		if (currentURLAnchor === "#procedimentos-faciais") {
			showList(0);
		} else if (currentURLAnchor === "#procedimentos-corporais") {
			showList(1);
		}
	}

	showListFromAnchor();
}

// Menu Hamburguer
const burguerBtnContainer = document.querySelector(".burger-icon-container");
const burguerIcon = document.querySelector(".burger-icon");
const burguerNav = document.querySelector(".burger-nav");

burguerBtnContainer.addEventListener("click", function () {
	burguerNav.classList.toggle("invisible");
	burguerBtnContainer.classList.toggle("aberto");
});
