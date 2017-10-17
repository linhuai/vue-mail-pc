<template>
	<div id="header" class="header">
		<div class="header-top">
			<div class="container">
				<div class="rows">
					<div class="pull-left">你好：欢迎访问我们的网站</div>
					<div class="pull-right">用户登录</div>
				</div>
			</div>
		</div>
		<div class="header-middle">
			<div class="container">
				<div class="rows">
					<div id="logo" class="pull-left">
						<a href="#"><img src="../assets/images/logo.png" ></a>
					</div>
					<div class="pull-right">
						<ul class="top-menu">
							<li><a href="#"></a></li>
							<li><a href="#"></a></li>
							<li><a href="#"></a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<nav class="header-bottom">
			<div class="container">
				<div class="rows">
					<ul class="nav nav-pills">
						<li><router-link to="/">网站首页</router-link></li>
						<li><router-link to="/">关于我们</router-link></li>
						<li><router-link to="/">产品展示</router-link></li>
						<li><router-link to="/">新闻动态</router-link></li>
						<li><router-link to="/">人才招聘</router-link></li>
						<li><router-link to="/">热销产品</router-link></li>
						<li><router-link to="/">技术支持</router-link></li>
						<li><router-link to="/">联系我们</router-link></li>
					</ul>
				</div>
			</div>
		</nav>
	</div>
</template>

<style lang="less" scoped>
.header {
	.header-top {
		background-color: #2b2b2b;
		.container {
			padding: 9px 5px;
			color: #fff;
			font-size: 12px;
		}
	}
	.header-middle {
		background-color: #151515;
		#logo{
			padding: 45px 0 40px 0;
		}
		.top-menu {
			padding: 40px 0;

			li {
				float: left;
				padding: 0 5px;
			}
			a {
				display: block;
				width: 38px;
				height: 38px;
				border: 1px solid #7c7c7c;
				border-radius: 50%;
			}
		}
	}
	.header-bottom {
		background-color: #151515;
		.nav {
			background-color: #262321;
			a{
				color: #fff;
				font-weight: bold;
			}
		}
	}
}
</style>