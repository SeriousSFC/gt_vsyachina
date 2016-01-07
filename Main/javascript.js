/*var name,f,s,x;*/

/*
Скрипт расчета факториала-->
var a,x,f,n;
function fact (n)
{
	var p,i;
	p=1;
	for (i=1;i<=n;i++)
	{
		p=p*i;
	}
	return p;
}
x=prompt("Введите число для факториала"," ");
a=fact(x);
alert(a);
<-- Конец скрипта факториала
*/
/* Тот же факториал через рекурсию
x=prompt("Введите число для факториала"," ");
function factrec(n)
{
	var p;
	if (n==0)
	{
		p=1;
	}
	else
	{
		p=n*factrec(n-1);
	}
	return p;	
}
f=factrec(x);
alert(f);
*/
//Еще один вариант делать строковые комменты
/*
name = prompt("Введите имя пользователя"," ");
s = "Дарова, " + name;
alert (s);
*/



//Карусель 2
$(document).ready(function() {
//Показать управление страницами и активировать первую ссылку
$(".paging").show();
$(".paging a:first").addClass("active");
//Взять размер изображения, кол-во изображений, и далее определить размер "холста".
var imageWidth = $(".window").width();
var imageSum = $(".image_reel img").size();
var imageReelWidth = imageWidth * imageSum;
//Подстроить размер "холста" под новый размер
$(".image_reel").css({'width' : imageReelWidth});
//Функции
rotate = function(){
    var triggerID = $active.attr("rel") - 1; //Взять количество раз для прокрутки
    var image_reelPosition = triggerID * imageWidth; //Определить дистанцию для прокрутки

    $(".paging a").removeClass('active'); //Убрать все классы active
    $active.addClass('active'); //Добавить класс active

    //Анимация слайдера
    $(".image_reel").animate({
        left: -image_reelPosition
    }, 500 );

}; 
//Вращение и заддержка
rotateSwitch = function(){
    play = setInterval(function(){ //Задать таймер
        $active = $('.paging a.active').next(); 
        if ( $active.length === 0) {
            $active = $('.paging a:first'); //после последней - обратно на первую
        }
        rotate(); 
    }, 7000); //Время для прокрутки (7 секунд)
};

rotateSwitch(); 
//При наведении
$(".image_reel a").hover(function() {
    clearInterval(play); //прекратить смену слайдов
}, function() {
    rotateSwitch(); //продолжить
});	
//При нажатии
$(".paging a").click(function() {
    $active = $(this); 
//Сброс таймера
    clearInterval(play); //Прекратить смену слайдов
    rotateSwitch(); // Продожить
    rotate(); //Вызвать немедленно смену
    return false;
});
});

/* ФОРМЫ */
//Контейнер форм (включает все формы)
var $form_wrapper	= $('#form_wrapper'),
//Текущая форма - имеет класс active
$currentForm	= $form_wrapper.children('form.active'),
//Ссылка на изменение формы
$linkform		= $form_wrapper.find('.linkform');
$form_wrapper.children('form').each(function(i){
	var $theForm	= $(this);
	//Решение проблемы с выводом при использовании fadeIn fadeOut
	if(!$theForm.hasClass('active'))
		$theForm.hide();
	$theForm.data({
		width	: $theForm.width(),
		height	: $theForm.height()
	});
});
setWrapperWidth();
$linkform.bind('click',function(e){
	var $link	= $(this);
	var target	= $link.attr('rel');
	$currentForm.fadeOut(400,function(){
		//Удаляем класс active с текущей формы
		$currentForm.removeClass('active');
		//Новая текущая форма
		$currentForm= $form_wrapper.children('form.'+target);
		//Анимируем изменения контейнера
		$form_wrapper.stop()
					 .animate({
						width	: $currentForm.data('width') + 'px',
						height	: $currentForm.data('height') + 'px'
					 },500,function(){
						//Новая форма получает класс active
						$currentForm.addClass('active');
						//Выводим новую форму
						$currentForm.fadeIn(400);
					 });
	});
	e.preventDefault();
});

function setWrapperWidth(){
	$form_wrapper.css({
		width	: $currentForm.data('width') + 'px',
		height	: $currentForm.data('height') + 'px'
	});
}
$form_wrapper.find('input[type="submit"]')
			 .click(function(e){
				e.preventDefault();
			 });	
