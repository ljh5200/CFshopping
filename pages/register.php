<?php
// 接受注册用户名数据
$username = isset($_GET['username'])?$_GET['username']:'';
$tel = isset($_GET['tel'])?$_GET['tel']:'';
$password = isset($_GET['password'])?$_GET['password']:'';
$nickname = isset($_GET['nickname'])?$_GET['nickname']:'';
// 链接数据库
$link = mysqli_connect('127.0.0.1','root','root','sz2105');
if(!$tel){
  $sql = "SELECT * FROM `users` WHERE `name`= '$username' ";
  // echo $sql;
  // 组织sql
  $res = mysqli_query($link,$sql);
  $row = mysqli_fetch_assoc($res);
  if($row){
    echo '1';
  }else{
    echo "0";
  }
}else if(!$username){
  $sql = "SELECT * FROM `users` WHERE `tel`= '$tel' ";
  // echo $sql;
  // 组织sql
  $res = mysqli_query($link,$sql);
  $row = mysqli_fetch_assoc($res);
  if($row){
    echo '1';
  }else{
    echo "0";
  }
}else {
  // 组织写入数据库的sql
  $sql = "INSERT INTO `users`(`name`,`nickname`,`tel`,`password`) VALUE('$username','$nickname','$tel','$password') ";
  // echo $sql;die;
  $res = mysqli_query($link,$sql);
  if($res){
    echo '1';
  }else{
    echo "0";
  }
}









