<template>
	<div class="social" @click="copy()">
		<Icon :name="icon" :size="iconSize"/>
		<div class="social__info">
			<Transition name="fade-slide-up">
				<div class="tooltip text-main-small" v-if="copied">{{ $t('copy') }}</div>
			</Transition>
			<p class="text-comment-small">{{ title }}</p>
			<p class="text-main" :class="{'hidden': hidden}">{{ hidden ? '+7 (000) 000 00 00' : link }}</p>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import Icon from './Icon.vue';

const props = defineProps({
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

const copied = ref(false);

const copy = () => {
	if(!props.hidden) {
		navigator.clipboard.writeText(props.link)
		copied.value = true
		setTimeout(() => {
			copied.value = false
		}, 1000)
	}
}
</script>

<style scoped lang="scss">
.social {
	display: flex;
	gap: 20px;
	align-items: center;
	cursor: pointer;
	&__info {
		display: flex;
		flex-direction: column;
		gap: 5px;
		position: relative;
	}
	.hidden {
		position: relative;
		user-select: none;
		pointer-events: none;
		filter: blur(7px);
	}
}
.tooltip {
	padding: 10px 20px;
	background-color: var(--color-dynamic-white);
	border-radius: 20px 20px 30px 0px;
	border: 1px solid rgba(var(--color-dynamic-gray), 0.1);
	box-shadow: 0px 12px 10px 0px rgba(0, 0, 0, 0.04);
	font-size: 12px;
	font-family: "Inter";
	font-weight: 500;
	letter-spacing: 0.12px;
	color: var(--color-dynamic-gray);
	position: absolute;
	padding: 4px 8px;
	z-index: 1;
	left: 50%;
	transform: translate(-50%, -120%);
}

.fade-slide-up-enter-active,
.fade-slide-up-leave-active {
  transition: all 0.25s ease-out;
}

.fade-slide-up-enter-from {
  opacity: 0;
  transform: translate(-50%, 0%);
}

.fade-slide-up-leave-to {
  opacity: 0;
  transform: translate(-50%, 0%);
}
</style>