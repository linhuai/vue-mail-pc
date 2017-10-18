<template>
	<div class="mod-head">
		<h3 class="mod-tit">产品展示</h3>
		<div class="mod-cate">
			<span>起重机</span> |
			<span>单梁起重机</span> |
			<span>双梁起重机</span> |
			<span>电动葫芦</span> |
			<span>龙门吊</span> |
		</div>
		<div class="mod-more">查看全部</div>
	</div>
</template>

<style lang="less" scoped>
.mod-head {
	height: auto;
	overflow: hidden;
	border-top: 3px solid #fa0;
	background-color: #efefef;
}
.mod-tit {
	float: left;
	position: relative;
	width: 199px;
	height: 53px;
	line-height: 53px;
	padding-left: 15px;
	background-color: #fa0;
	font-size: 2em;
	font-weight: bold;
	color: #fff;

	&:before {
		content: "";
		position: absolute;
		top: 0;
		right: 0;
		border-bottom: 27px solid transparent;
		border-right: 10px solid #efefef;
	}
	&:after {
		content: "";
		position: absolute;
		bottom: 0;
		right: 0;
		border-right: 10px solid #efefef;
		border-top: 27px solid transparent;
	}
}
.mod-cate {
	float: left;
	line-height: 53px;
	margin-left: 30px;
}
.mod-more {
	float: right;
	line-height: 53px;
	padding: 0 15px;
}
</style>