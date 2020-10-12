<template>
  <div class="my-foot">
			<div>
					<div class="logo"></div>
					<div class="content">
						<ul>
							<li><a href="">配送范围</a></li>
							<li>|</li>
							<li><a href="">帮助中心</a></li>
							<li>|</li>
							<li><a href="">品牌故事</a></li>
							<li>|</li>
							<li><a href="">关于我们</a></li>
							<li>|</li>
							<li><a href="">招贤纳士</a></li>
						</ul>
						<div class="tel">
							<span>客服热线:</span>
							<span>400-921-5757</span>
						</div>
						<div class="qrcode">
							<img src="../assets/foot/qrcode_footer.png" >
							<p>微信订购更方便</p>
						</div>
				</div>
			</div>
			
			
		</div>
</template>

<style scoped>
*{margin: 0; padding: 0;}
			.my-foot{
				background-color: #eee;
			}
			.my-foot>div{
				width: 1200px; height: 250px;
				position: relative;
				margin: 0 auto;
			}
			.my-foot .logo{
				width: 220px; height: 69px;
				background: url(../assets/foot/logo_footer.png) no-repeat;
				position: absolute;
				top: 90px;
				left: 41px;
			}
			.content{
				    width: 440px;
				    height: 250px;
				    margin: 0 auto;
			}
			.my-foot .content>ul{
				width: 100%;
				padding-top: 60px;
				list-style: none;
				color: #635859;
				display: flex;
				justify-content: space-between;
			}
			
			.my-foot .tel{
				margin-top: 20px;
			}
			.my-foot .tel>span:first-child{
				font-size: 14px;
				color: #e9546b;
			}
			.my-foot .tel>span:last-child{
				font-size: 25px;
				color: #e9546b;
				font-weight: bold;
				margin-left: 10px;
			}
			.my-foot .qrcode{
				position: absolute;
				right: 49px;
				top: 42px;
				text-align: center;
				font-size: 14px;
			}
			a{
				text-decoration: none;
				color: #635859;
			}
</style>