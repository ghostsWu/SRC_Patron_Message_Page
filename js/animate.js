
$(document).ready(function(){
	$(".gift_bg").click(function(){
		$(".gift_box").addClass("click_ready")
		$(".gift_bg").click(function(){
			$(".gift_box").addClass("box_animat")
		})
	})

})


