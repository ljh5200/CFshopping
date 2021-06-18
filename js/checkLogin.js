// 判断用户是否登录--判断cookie中会否存在username的值
$(function(){
  var username = getCookie('username');
  var login = document.querySelector('.login');
  if(username){
    var str = `<li><a>欢迎<span>${username}</span>！</a></li>
    <li><a href="javascript:;" class="logout">退出</a></li>`;
    login.innerHTML = str;
    // 退出功能
    var logout = document.querySelector('.logout');
    logout.onclick = function(){
      delCookie('username');
          login.innerHTML = `<li><a href="login.html">您好,请先登录</a></li>
           <li><a href="register.html"></a></li>`;
         layer.msg('退出成功',{icon:1,time:500})
        },
         function(){
           layer.msg('已取消',{icon:1,time:500})
          return false;
    }
  }
})