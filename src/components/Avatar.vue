<template>
	<div class="avatar" :style="`max-width: ${size}px; max-height: ${size}px; min-width: ${size}px; min-height: ${size}px`">
		<img class="avatar__img" :src="getSrc(src)" :alt="alt" :width="size" :height="size"/>
	</div>
</template>

<script setup>
const props = defineProps({
	src: {
		type: String,
		required: true
	},
	alt: {
		type: String,
		required: true
	},
	size: {
		type: Number,
		default: 250
	},
})
// const getSrc = (src) => {
// 	let formattedSrc =`./../assets/images/${src}`
// 	return new URL(formattedSrc, import.meta.url).href
// }
const getSrc = (src) => new URL(`/src/assets/images/${src}`, import.meta.url).href
// console.log(
// 	props.src,
// 	import.meta.url,
// 	new URL(`./../assets/images/${props.src}`, import.meta.url).href
// 	)
// http://localhost:5173/KonTXT/Auth/src/components/Work.vue?t=1687868818840 http://localhost:5173/KonTXT/Auth/src/assets/images/logo-01.png
// http://localhost:5173/KonTXT/Auth/src/components/Work.vue?t=1687868818840 http://localhost:5173/KonTXT/Auth/src/assets/images/logo-01.png
</script>

<style scoped lang="scss">
.avatar {
	// background: var(--color-dynamic-gray);
	border-radius: 50%;
	overflow: hidden;
	max-width: 250px;
	max-height: 250px;
	width: 100%;
	height: 100%;
	&__img {
		// border-radius: 50%;
		// background: var(--color-dynamic-gray);
		width: 100%;
		height: 100%;
		display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    line-height: 250px;
		font-size: 0;
		object-fit: cover;
	}
}
</style>