<template>
	<component :is="name" class="icon" :width="width" :height="height"></component>
</template>

<script setup>
defineProps({
	name: {
		type: String,
		required: true
	},
	width: {
		type: Number,
		default: 32
	},
	height: {
		type: Number,
		default: 32
	}
})
</script>

<style scoped lang="scss">
.icon {
	path[fill], path[stroke],
	rect[fill], rect[stroke],
	ellipse[fill], ellipse[stroke],
	circle[fill], circle[stroke],
	line[fill], line[stroke],
	polygon[fill], polygon[stroke] {
		fill: var(--color-dynamic-black);
	}
}
</style>