<template>
	<div class="my-header">
		<div class="tou">
			<div class="logo">
			<a href="#"><img src="../assets/header/logo.png" ></a>
		</div>
		<ul class="nav">
			<li><router-link to="/">首页</router-link></li>
			<li><a href="#">蛋糕馆<img src="../assets/header/icon_arrow_down.png" ></a></li>
			<li><a href="#">特惠商城</a></li>
			<li><a href="#">INLIFE<img src="../assets/header/icon_arrow_down.png" ></a></li>
			<li><a href="#">企业专区<img src="../assets/header/icon_arrow_down.png" ></a></li>
			<li><a href="#">卡卷兑换</a></li>
		</ul>
		<div class="login">
			<router-link to="/login">登录</router-link>
			<span>|</span>
			<router-link to="/register">注册</router-link>
		</div>
		<div>
			<div class="shop">
				<a href="#"><img src="../assets/header/icon_basket_header.png" >
				<span>0</span>
				</a>
			</div>
			<div class="address">
				<p>上海<img src="../assets/header/icon_arrow_down.png" ></p>
			</div>
		</div>
		</div>
	</div>
</template>

<script>
</script>

<style>
	*{margin: 0;padding: 0;}
	
	.my-header{
		width: 100%;
		height: 100px;
		background-color: #e9546b;
		font-size: 14px;
	}
	.tou{
		width: 1200px; height: 100px;
		margin: 0 auto;
		position: relative;
		color: #fff;
	}
	.my-header .logo{
		position: absolute;
		top: 26px;
		left: 20px;
	}
	 .my-header .nav{
		position: absolute;
		    bottom: 0;
		    left: 240px;
		    width: 600px;
		    height: 24px;
		    padding-bottom: 20px;
		list-style: none;
		display: flex;
		justify-content: space-around;
	}
	
	.my-header .nav>li{
		display: block;
		float: left;
		top: 80px;
		width: 90px;
		height: 20px;
		text-align: center;
		border: 1px solid #e9546b;
	} 
	.my-header .nav>li:hover{
		border: 1px solid #fff;
		border-radius: 2px;
	}
	.my-header .nav>li img{
		margin-left:7px;
		margin-bottom: 3px;
	}
	.my-header .nav>li:hover img{
		transform: rotate(180deg);
		/* 转换原点的设置 */
		transform-origin: center center;
	}
	
	
	a{
		text-decoration: none;
		color: #fff;
	}
	.my-header .login{
		position: absolute;
		right: 0;
	}
	.my-header .login>span{
		padding:0 15px;
	}
	.my-header .login>a:hover{
		text-decoration: underline;
	}
	.my-header .shop{
		position: absolute;
		    right: 108px;
		    bottom: 23px;
		    width: 80px;
		    height: 18px;
				text-align: center;
		    border-left: 1px solid #fff;
		    border-right: 1px solid #fff;
	}
	.my-header .shop span{
		width: 16px; height: 16px;
		color: #e9546b;
		display: block;
		position: absolute;
		border-radius: 50%;
		background-color: #fff;
		bottom: 12px;
		right: 19px;
	}
	.my-header .address{
		position: absolute;
		right: 0px;
		bottom: 23px;
		border-right: 1px solid #fff;
	}
	.my-header .address>p{
		display: block;
		margin-right: 30px;
	}
	.my-header .address img{
		margin-left:7px;
		margin-bottom: 3px;
	}
	.my-header .address:hover img{
		transform: rotate(180deg);
		/* 转换原点的设置 */
		transform-origin: center center;
	}
</style>
