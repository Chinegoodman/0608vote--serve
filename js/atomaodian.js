/**
 * Created by postm on 2017/5/22.
 */
$(document).ready(function() {
	// atomaodian('#linkpoints>li>a');
	// atomaodian('输出对应的选择器');
	atomaodian('.uptoappbox');
});




function atomaodian(domeselect) {
	$(domeselect).click(function() {
		$("html, body").animate({
			scrollTop: $($(this).attr("href")).offset().top + "px"
		}, {
			duration: 300,
			easing: "swing"
		});
		return false;
	});
}