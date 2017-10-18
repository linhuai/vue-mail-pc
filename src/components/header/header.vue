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
				<h1 id="logo" class="logo"><img src="../../assets/images/logo.png"></h1>
				<div class="header-cart">我的购物车</div>
				<div class="header-search">
					<input type="text" name="keywords" class="keywords" >
					<button type="button" class="searchbtn">搜索</button>
				</div>
			</div>
		</div>
		<div class="header-bottom">
			<div class="w">
				<div class="cate-tit">产品分类</div>
				<nav class="nav">
					<ul class="nav-list">
						<li class="nav-item"><router-link to="/">网站首页</router-link></li>
						<li class="nav-item"><router-link to="/company">关于我们</router-link></li>
						<li class="nav-item"><router-link to="/news">新闻中心</router-link></li>
						<li class="nav-item"><router-link to="/product">产品展示</router-link></li>
						<li class="nav-item"><router-link to="/contact">联系我们</router-link></li>
					</ul>
				</nav>
			</div>
		</div>
	</div>
</template>
<style lang="less">
	@import './header.less';
</style>