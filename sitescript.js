var fm = document.forms.form1;
var el = fm.elements;

var divForm = document.getElementById("formulario");
var nome = document.getElementById("nome");
var email = document.getElementById("email");
var data_nascimento = document.getElementById("data_nascimento");
var check_acao = document.getElementById("Acao");
var check_rom = document.getElementById("Romance");
var check_yaoi = document.getElementById("Yaoi");
var check_yuri = document.getElementById("Yuri");

//Esconde o botão e as divs
var texto = document.getElementById("texto");
texto.style.display = 'none';

var bt_voltar = document.getElementById("bt_voltar");
bt_voltar.style.display = 'none';

var acao = document.getElementById("acao");
acao.style.display = 'none';

var romance = document.getElementById("romance");
romance.style.display = 'none';

var yaoi = document.getElementById("yaoi");
yaoi.style.display = 'none';

var yuri = document.getElementById("yuri");
yuri.style.display = 'none';

function check(){
	if(nome.value == ""){
		alert('Por favor, preencha o campo nome!');
	}else if(email.value == ""){
		alert('Por favor, preencha o campo E-mail!');
	}else if(data_nascimento.value == ""){
		alert('Por favor, preencha a Data de Nascimento!');
	}else if((check_acao.checked != true) && (check_rom.checked != true) && (check_yaoi.checked != true)
		&& (check_yuri.checked != true)){
		alert('Por favor, escolha um gênero!');
	}
	
	if((check_acao.checked == true) || (check_rom.checked == true) || (check_yaoi.checked == true)
		|| (check_yuri.checked == true)){
			divForm.style.display = 'none';
			texto.style.display = 'block';
	}
	
	//Esconde o formulário ao clicar e mostra o texto
		if (el[4].checked === true) {
				
			//Mostra os animes de ação
			if (acao.style.display === 'none') {
				acao.style.display = 'block';
			}else {
				acao.style.display = 'none';
			}
			
			//Mostra o botão voltar
			if (bt_voltar.style.display === 'none') {
				bt_voltar.style.display = 'block';
			}
		}
		if(el[5].checked === true){
			//Mostra os animes de romance
			if (romance.style.display === 'none') {
				romance.style.display = 'block';
			}else{
				romance.style.display = 'none';
			}
			
			//Mostra o botão voltar
			if (bt_voltar.style.display === 'none') {
				bt_voltar.style.display = 'block';
			}
		}
		if(el[6].checked === true){
			//Mostra os animes de yaoi
			if (yaoi.style.display === 'none') {
				yaoi.style.display = 'block';
			}else{
				yaoi.style.display = 'none';
			}
			
			//Mostra o botão voltar
			if (bt_voltar.style.display === 'none') {
				bt_voltar.style.display = 'block';
			}	
		}
		if(el[7].checked === true){
			//Mostra o botão voltar
			if (yuri.style.display === 'none') {
				yuri.style.display = 'block';
			}else{
				yuri.style.display = 'none';
			}
			
			//Mostra o botão voltar
			if (bt_voltar.style.display === 'none') {
				bt_voltar.style.display = 'block';
			}
		}
}

function voltar(){
	acao.style.display = 'none';
	romance.style.display = 'none';
	yaoi.style.display = 'none';
	yuri.style.display = 'none';
	
	if (divForm.style.display === 'none') {
		divForm.style.display = 'block';
	}else{
		divForm.style.display = 'none';
	}
}
