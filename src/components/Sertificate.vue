<template>
	<div class="sertificate">
		<img class="sertificate__img" :src="srcImg" :alt="sertificate.title"/>
		<div class="sertificate__info" v-if="!grid">
			<p class="sertificate__title text-main">{{ sertificate.title }}</p>
			<p class="sertificate__organisation text-main-small">{{ $t('sertificates.company') }}: {{ sertificate.company }}</p>
			<p class="sertificate__date text-comment-small">{{ sertificate.date }}</p>
		</div>
	</div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const props = defineProps({
	sertificate: {
		type: Object,
		required: true
	},
	grid: Boolean
})


const srcImg = ref()

onMounted(() => {
	loadImage()
})

const loadImage = () => {
	fetch(`/src/${props.sertificate.src}`)
		.then(response => response.blob())
		.then(blob => {
			const objectURL = URL.createObjectURL(blob)
			srcImg.value = objectURL
		})
}
</script>

<style scoped lang="scss">
.sertificate {
	display: flex;
	flex-direction: column;
	gap: 10px;
	&__img {
		border-radius: 10px;
		border: 1px solid var(--color-dynamic-gray);
	}
	&__info {
		display: flex;
		flex-direction: column;
		gap: 5px;
	}
}
</style>