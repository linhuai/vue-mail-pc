<template>
	<div id="header" class="header">
		<div class="header-top">
			<div class="w">
				<div class="fl">欢迎访问我们的网站</div>
				<div class="fr">用户登录</div>
			</div>
		</div>
		<div class="header-middle">
			<div class="w">
				<div id="logo" class="logo">LOGO</div>
				<div class="cart"></div>
				<div class="search">
					<input type="text" name="keywords" class="keywords" >
					<button type="button">搜索</button>
				</div>
			</div>
		</div>
		<div class="header-bottom">
			<div class="w">
				<div class="cate-tit">产品分类</div>
				<nav class="nav">
					<ul>
						<li><router-link to="/">网站首页</router-link></li>
						<li><router-link to="/company">关于我们</router-link></li>
						<li><router-link to="/news">新闻中心</router-link></li>
						<li><router-link to="/product">产品展示</router-link></li>
						<li><router-link to="/contact">联系我们</router-link></li>
					</ul>
				</nav>
			</div>
		</div>
	</div>
</template>