<template>
	<div class="bubbles">
		<div class="bubble" v-for="n in 7" :class="{'bubble--active': progress(n) > 0}" :style="`--progress: ${progress(n)}%`"></div>
		<div class="bubble bubble--clickable" :class="{'bubble--active': currentList === n, 'bubble--filled': progressSize(n) > 0 }" @click="currentList = currentList === n ? null : n; $emit('getList', currentList)" :style="`--progress: calc(8px + ${progressSize(n)}px)`" v-for="n in 5"></div>
		<div class="bubble-container">
			<Reputation :value="reputation" subtitle-hide/>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import Reputation from './Reputation.vue';

let stepSize = 500;
let currentList = ref(null)
const props = defineProps({
	value: {
		type: Object,
		required: true
	},
	reputation: {
		type: Number,
		required: true
	}
})

defineEmits(['getList'])

const progress = (n) => {
	return props.reputation - stepSize * n > 0 ? 100 : (stepSize + (props.reputation - stepSize * n)) / (stepSize / 100)
}

const progressSize = (n) => {
	let valueGroup = props.value[Object.keys(props.value)[n-1]].reduce((a,b) => a + b.value, 0)
	let step = props.reputation / 5
	let percent = step / 100
	let size = (26 / 100) * (valueGroup / percent)
	return size
}

</script>

<style scoped lang="scss">
.bubbles {
	position: relative;
	max-width: 274px;
	width: 100%;
	height: 230px;
	display: flex;
	align-items: center;
	justify-content: center;
}
.bubble {
	--progress: 0%;
	position: absolute;
	min-width: 8px;
	min-height: 8px;
	max-height: 34px;
	max-width: 34px;
	border: 1px solid var(--color-dynamic-gray);
	border-radius: 50%;
	overflow: hidden;
	&:nth-child(1) {
		width: 14px;
		height: 14px;
		top: 28px;
		left: 50px;
	}
	&:nth-child(2) {
		width: 7px;
		height: 7px;
		top: 0px;
		left: 39px;
	}
	&:nth-child(3) {
		width: 7px;
		height: 7px;
		top: 7px;
		left: 88px;
	}
	&:nth-child(4) {
		width: 13px;
		height: 13px;
		top: 18px;
		left: 185px;
	}
	&:nth-child(5) {
		width: 13px;
		height: 13px;
		top: 109px;
		left: 233px;
	}
	&:nth-child(6) {
		width: 7px;
		height: 7px;
		bottom: 6px;
		right: 50px;
	}
	&:nth-child(7) {
		width: 9px;
		height: 9px;
		bottom: 104px;
		left: 18px;
	}
	&:nth-child(8) {
		width: var(--progress);
		height: var(--progress);
		top: 64px;
		left: 0;
	}
	&:nth-child(9) {
		width: var(--progress);
		height: var(--progress);
		top: 43px;
		right: 0;
	}
	&:nth-child(10) {
		width: var(--progress);
		height: var(--progress);
		bottom: 45px;
		right: 16px;
	}
	&:nth-child(11) {
		width: var(--progress);
		height: var(--progress);
		bottom: 0px;
		right: 90px;
	}
	&:nth-child(12) {
		width: var(--progress);
		height: var(--progress);
		bottom: 36px;
		left: 32px;
	}
	&::before {
		content: '';
		width: 100%;
		height: var(--progress);
		display: block;
		position: absolute;
		bottom: 0;
		background-color: var(--color-dynamic-black);
	}
	&--active {
		border-color: var(--color-dynamic-black);
	}
	&--filled {
		background-color: var(--color-dynamic-black);
		border-color: var(--color-dynamic-black);
	}
	&--clickable {
		cursor: pointer;
		box-sizing: border-box;
		overflow: unset;
		transition: .3s ease;
		&::before {
			width: 0;
			height: 0;
			transition: .3s ease;
			border-radius: 50%;
			top: calc(50%);
			left: calc(50%);
			transform: translate(-50%, -50%);
			bottom: unset;
			right: unset;
			background: transparent;
			border: 1px solid var(--color-dynamic-black);
			border-radius: 50%;
			opacity: 0;
			box-sizing: border-box;
		}
	}
	&--clickable.bubble--active,
	&--clickable:hover {
		&::before {
			width: calc(150% + 4px);
			height: calc(150% + 4px);
			opacity: 1;
		}
	}
}
.bubble-container {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	position: absolute;
	top: 34px;
	left: 54px;
	width: 154px;
	height: 154px;
	border-radius: 50%;
	border: 3px solid var(--color-dynamic-black);
}
</style>