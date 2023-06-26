<template>
	<div class="social">
		<Icon :name="icon" :size="iconSize"/>
		<div class="social__info">
			<p class="text-comment-small">{{ title }}</p>
			<p class="text-main" :class="{'hidden': hidden}">{{ hidden ? '+7 (000) 000 00 00' : link }}</p>
		</div>
	</div>
</template>

<script setup>
import Icon from './Icon.vue';

defineProps({
	icon: {
		type: Object,
		required: true
	},
	iconSize: {
		type: Number,
		default: 32,
	},
	title: {
		type: String,
		required: true
	},
	link: {
		type: String,
		required: true
	},
	hidden: {
		type: Boolean,
	}
})
</script>

<style scoped lang="scss">
.social {
	display: flex;
	gap: 20px;
	align-items: center;
	&__info {
		display: flex;
		flex-direction: column;
		gap: 5px;
	}
	.hidden {
		position: relative;
		user-select: none;
		pointer-events: none;
		filter: blur(7px);
	}
}
</style>