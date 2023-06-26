<template>
	<div class="avatar" :style="`max-width: ${size}px; max-height: ${size}px; min-width: ${size}px; min-height: ${size}px`">
		<img class="avatar__img" :src="srcImg" :alt="alt" :width="size" :height="size"/>
	</div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

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

const srcImg = ref()

onMounted(() => {
	loadImage()
})

const loadImage = () => {
	fetch(`/src/${props.src}`)
		.then(response => response.blob())
		.then(blob => {
			const objectURL = URL.createObjectURL(blob)
			srcImg.value = objectURL
		})
}

</script>

<style scoped lang="scss">
.avatar {
	background: var(--color-dynamic-gray);
	border-radius: 50%;
	overflow: hidden;
	max-width: 250px;
	max-height: 250px;
	width: 100%;
	height: 100%;
	&__img {
		border-radius: 50%;
		background: var(--color-dynamic-gray);
		width: 100%;
		height: 100%;
		display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    line-height: 250px;
		font-size: 0;
	}
}
</style>