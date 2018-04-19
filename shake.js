<script type="text/javascript">
if(window.DeviceOrientationEvent){
    $('#hint').html("suuport deviceorientation");
    var lastAcc;    // 用来存储上一次的deviceorientation事件
    $(window).on('deviceorientation', function(event) {
        var delA = Math.abs(event.alpha - lastAcc.alpha);    // alpha轴偏转角
        var delB = Math.abs(event.beta - lastAcc.beta);    // beta轴偏转角
        var delG = Math.abs(event.gamma - lastAcc.gamma);    // gamma轴偏转角
        $('#shakeText').html("Alpha: " + delA + "<br>"
        	+ "Beta: " + delB + "<br>"
        	+ "Gamma: " + delG + "<br>");
        lastAcc = event;    // 存储上一次的event
    });
} else {
    $('#shakeText').html("Do NOT support deviceorientation!");
}
</script>
