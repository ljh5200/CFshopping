$('.yanzheng').click(function(){
    // 判断是否登录
    console.log(1);
    var username = getCookie('username')
    if(!username){
        var tipindex = alert('请先登录！')
        setTimeout(function(){
            layer.close(tipindex)
            localStorage.setItem('url',location.href)
            location.href = './login.html';
        },800)
        return false;
    }
})
//
$(function () {
    $(".reduce").click(function () {
        var subval = $(this).next();
        if (parseInt(subval.val()) > 1)
            subval.val(parseInt(subval.val()) - 1)
    });
    $(".add").click(function () {
        var subval = $(this).prev();
        subval.val(parseInt(subval.val()) + 1)
    });
});