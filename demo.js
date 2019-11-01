
var c = 0;//大总管变量
//设置定时器控制自动轮播
var timer = setInterval(run, 1000)
//定时器调用的函数
function run() {
	c++;
	c = c == 5 ? 0 : c;

	//让c号图片显示其他图片隐藏
	$("#flash img").eq(c).fadeIn(500).siblings('img').fadeOut(500);
	//让c号li变红 其他变灰
	$("#flash ul li").eq(c).css('background', '#fff').siblings('li').css('background', '#DDDDDD');

}
$("#flash").hover(function () {
	//清理定时器
	clearInterval(timer);


}, function () {

	timer = setInterval(run, 1000);

});

  //鼠标移入小圆点
  $("#flash ul li").mouseenter(function(){
	//获取当前移入的li的序号
	c = $(this).index();
	//让c号图片显示其他图片隐藏
	$("#flash img").eq(c).fadeIn(500).siblings('img').fadeOut(500);
	//让c号li变红 其他变灰
	$("#flash ul li").eq(c).css('background','#fff').siblings('li').css('background','#DDDDDD');
	})
	


