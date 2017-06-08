var phonenumber;
$(function () {
	$('#tabboxtitlelis>li').click(function () {
		$('#tabboxtitlelis>li').removeClass('select');
		$(this).addClass('select');
		// $('.tabboxcontents').removeClass('show');
		// $('.tabboxcontents').eq($(this).index()).addClass('show');
	});
	/*$('.fixedphone').on('change',function () {
		console.log($('.fixedphone').val());
		phonenumber=$('.fixedphone').val();
	})*/
})
function showfixedbaomingbox() {
	$('#fixedbaomingbox').addClass('show');
}
/*function qdbaoming() {
	if(/^1(3|4|5|7|8)\d{9}$/.test(phonenumber)){
		$('#fixedbaomingbox').removeClass('show');
		window.location.href="baoming.html"
	}else {
		alert('请输入正确的手机号码');
	}
}*/
// 关闭所有悬浮框
function closefixedbox() {
	$('.fixedcontentbox').removeClass('show');
}
// 显示登陆窗
function showfixedloginbox() {
	$('#fixedloginbox').addClass('show');
}
// 显示规则
function showfixedguizebox() {
	$('#fixedguizebox').addClass('show');
}
// 显示奖项设置
function showfixedjiangxiangbox() {
	$('#fixedjiangxiangbox').addClass('show');
}
// 投票成功
function toupiaochenggong() {
	$('#fixedsuccessbox').addClass('show');
}
// 禁止多次投票
function noallowtips() {
	$('#fixednoallowbox').addClass('show');
}