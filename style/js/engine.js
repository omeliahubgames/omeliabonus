$(document).ready(function(){	
	
	$('#ctn-preloader').addClass('loaded');


	if ($('#ctn-preloader').hasClass('loaded')) {
		
		$('#preloader').delay(900).queue(function () {
			$(this).remove();
		});
	}

	$("#login").click(function(){
		
		const elements = document.querySelectorAll('button.login_btn');
		elements.forEach((element) => {
		  element.textContent = element.textContent.replace('Войти', 'Авторизация..');
		});
		var nick = $("#nick").val();
		var password = $("#password").val();
		var login = $("#login").val();
		$.post("/engine/classes/obr.php", {nick: nick, password: password, login: login}, function(data){
			if(data == "notfound") {
				const elements = document.querySelectorAll('button.login_btn');
				elements.forEach((element) => {
				  element.textContent = element.textContent.replace('Авторизация..', 'Войти');
				});
				swal("Ошибка!","Проверьте введенные данные и попробуйте снова!","error");
			}
			else if(data == "success") { 
				const elements = document.querySelectorAll('button.login_btn');
				elements.forEach((element) => {
				  element.textContent = element.textContent.replace('Авторизация..', 'Войти');
				});
				swal("Успешно!","Вы успешно вошли в аккаунт!","success");
				setTimeout(function(){
					location.href = "/profile";
				}, 1000);
			}
		    else if(data == "pole") { 
				const elements = document.querySelectorAll('button.login_btn');
				elements.forEach((element) => {
				  element.textContent = element.textContent.replace('Авторизация..', 'Войти');
				});
				swal("Ошибка!","Заполните все поля и попробуйте снова!","error"); 
			}
		});
	});
	$("#change").click(function(){
		const elements = document.querySelectorAll('button.settings_btn');
		elements.forEach((element) => {
		  element.textContent = element.textContent.replace('Изменить', 'Меняем..');
		});
		var oldpass = $("#oldpass").val();
		var newpass = $("#newpass").val();
		var newpassconfirm = $("#newpassconfirm").val();
		var changepass = $("#change").val();
		$.post("/engine/classes/obr.php", {oldpass: oldpass, newpass: newpass, newpassconfirm: newpassconfirm, changepass: changepass}, function(data){
			if(data == "notfound") {
				const elements = document.querySelectorAll('button.settings_btn');
				elements.forEach((element) => {
				  element.textContent = element.textContent.replace('Меняем..', 'Изменить');
				});
				swal("Ошибка!","Проверьте введенные данные и попробуйте снова!","error");
			}
			else if(data == "error-sumbols") {
				const elements = document.querySelectorAll('button.settings_btn');
				elements.forEach((element) => {
				  element.textContent = element.textContent.replace('Меняем..', 'Изменить');
				}); 
				swal("Ошибка!","Новый пароль не может быть меньше 6 и больше 32","error");
			}
			else if(data == "error-confirm") {
				const elements = document.querySelectorAll('button.settings_btn');
				elements.forEach((element) => {
				  element.textContent = element.textContent.replace('Меняем..', 'Изменить');
				}); 
				swal("Ошибка!","Пароли не совпадают, исправьте и попробуйте снова!","error");
			}
			else if(data == "success") { 
				const elements = document.querySelectorAll('button.settings_btn');
				elements.forEach((element) => {
				  element.textContent = element.textContent.replace('Меняем..', 'Изменить');
				});
				swal("Успешно!","Вы успешно изменили пароль!","success"); location.href = "/login"; 
			}
		    else if(data == "pole") {
				const elements = document.querySelectorAll('button.settings_btn');
				elements.forEach((element) => {
				  element.textContent = element.textContent.replace('Меняем..', 'Изменить');
				}); 
				swal("Ошибка!","Заполните все поля и попробуйте снова!","error"); 
			}
		});
	});	 	 
	$("#cnews").click(function(){
		var vk = $("#vk").val();
		var url = $("#url").val();
		var title = $("#title").val();
		var name = $("#name").val();
		var cnews = $("#cnews").val();
		$.post("/engine/classes/obr.php", {vk: vk, url: url, title: title, name: name, cnews:cnews}, function(data){
			if(data == "success") {
				swal("Успешно!","Вы успешно создали новость!","success"); 
				setTimeout(function() { 
					location.reload()
				},1000);
			}
			else if(data == "pole") {
				swal("Ошибка!","Заполните все поля и попробуйте снова!","error"); 
			}
		});
	});
});