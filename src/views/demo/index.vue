<!--
 * @Author: DaiYu
 * @Date: 2024-05-21 14:28:34
 * @LastEditors: DaiYu
 * @LastEditTime: 2024-05-21 14:37:57
 * @FilePath: \src\views\demo\index.vue
 * @Description: file content
-->
<template>
	<div>
		<div>
			<div>如何实现左侧宽度固定，右侧宽度自适应的布局</div>
		</div>
		<div>
			1. 利用float + margin实现
		</div>
		<div class="box">
			<div class="box-left" />
			<div class="box-right" />
		</div>
		<div>
			2. 利用float + calc计算宽度
		</div>
		<div class="box2">
			<div class="box-left" />
			<div class="box-right" />
		</div>
		<div>
			3. 利用float + overflow实现
		</div>
		<div class="box3">
			<div class="box-left" />
			<div class="box-right" />
		</div>
	</div>
</template>

<script lang='ts' setup>
defineOptions({
	name: 'Demo',
})
</script>

<style lang='less' scoped>
.box {
	height: 200px;
	.box-left {
		height: 200px;
		width: 200px;
		float: left;
		background-color: blue;
	}
	.box-right {
		height: 200px;
		margin-left: 200px;
		background-color: red;
	}
}
.box2 {
	height: 200px;
	.box-left {
		height: 200px;

		width: 200px;
		float: left;
		background-color: blue;
	}

	.box-right {
		height: 200px;
		width: calc(100% - 200px);
		float: right;
		background-color: red;
	}
}
.box3 {
	height: 200px;
	.box-left {
		height: 200px;

		width: 200px;
		float: left;
		background-color: blue;
	}

	.box-right {
		overflow: hidden;
		height: 200px;
		background-color: red;
	}
}
</style>
