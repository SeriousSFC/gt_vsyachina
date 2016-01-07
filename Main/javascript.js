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
/* Скрипт карусели

$(document).ready(function(){
  var marg = 1; // отступы между фотками
  var hght = 350; // высота карусели 
  speed = 1; // скорость прокрутки  
     
  var imgs = $("#scrolled > img");
  var scrl = $("#scrolled");
  var crsl = $("#carusel");
  wdth = 0;
  imgs.css("margin","0 "+marg);
  crsl.css({overflow:"hidden","height":hght});
  $.each(imgs,function(index,value){
    wdth += ($(imgs[index]).width()+(marg*2)+5);        
  })
  scrl.width(wdth);  
  
  function rightScroll(){
    var firstImg = $("#scrolled > img:first");
    var lastImg = $("#scrolled > img:last");   
    var scroll = crsl.scrollLeft();
    crsl.scrollLeft(scroll + speed);
    if(scroll > firstImg.width()){
      crsl.scrollLeft(scroll - (firstImg.width()+(marg*2)));
      firstImg.clone(true).insertAfter(lastImg);
      $(firstImg).remove();
    }
  }
  crsl.mouseover(function(){
    clearInterval(timer);            
  }).mouseout(function(){
    timer = setInterval(rightScroll,10);           
  })
  timer = setInterval(rightScroll,10);
});
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