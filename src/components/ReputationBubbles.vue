<template>
	<div class="bubbles">
		<div class="bubble" v-for="n in 8" :class="{'bubble--filled': progress(n) !== 0}"></div>
		<div class="bubble bubble--clickable" :class="{'bubble--active': currentList === n, 'bubble--filled': progressSize(n) > 0 }" @click="currentList = currentList === n ? null : n; $emit('getList', currentList)" :style="`--progress: calc(8px + ${progressSize(n)}px); max-height: ${maxSizes[n-1]}px; max-width: ${maxSizes[n-1]}px;`" v-for="n in 6"></div>
		<div class="bubble-container" @click="currentList = null; $emit('getList', currentList)">
			<Reputation :value="reputation" subtitle-hide/>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import Reputation from './Reputation.vue';

let stepSize = 500;
let currentList = ref(null)
let maxSizes = [70, 70, 60, 70, 50, 40]
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
	return Math.floor(props.reputation - stepSize * n > 0 ? 100 : (stepSize + (props.reputation - stepSize * n)) / (stepSize / 100))
}

const progressSize = (n) => {
	let valueGroup = props.value[Object.keys(props.value)[n-1]].reduce((a,b) => a + b.value, 0)
	let step = props.reputation / 5
	let percent = step / 100
	let size = Math.floor(((maxSizes[n-1] - 8) / 100) * (valueGroup / percent))
	return size
}

</script>

<style scoped lang="scss">
.bubbles {
	position: relative;
	max-width: 328px;
	width: 100%;
	height: 273px;
	display: flex;
	align-items: center;
	justify-content: center;
}
.bubble {
	position: absolute;
	min-width: 8px;
	min-height: 8px;
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
		top: 7px;
		left: 88px;
	}
	&:nth-child(3) {
		width: 13px;
		height: 13px;
		top: 18px;
		left: 185px;
	}
	&:nth-child(4) {
		width: 13px;
		height: 13px;
		top: 109px;
		right: 50px;
	}
	&:nth-child(5) {
		width: 7px;
		height: 7px;
		bottom: 48px;
		right: 72px;
	}
	&:nth-child(6) {
		width: 5px;
		height: 5px;
		bottom: 62px;
		left: 167px;
	}
	&:nth-child(7) {
		width: 5px;
		height: 5px;
		bottom: 67px;
		left: 13px;
	}
	&:nth-child(8) {
		width: 9px;
		height: 9px;
		top: 118px;
		left: 50px;
	}
	&:nth-child(9) {
		width: var(--progress);
		height: var(--progress);
		top: 64px;
		left: 0;
	}
	&:nth-child(10) {
		width: var(--progress);
		height: var(--progress);
		top: 0;
		right: 0;
	}
	&:nth-child(11) {
		width: var(--progress);
		height: var(--progress);
		bottom: 74px;
		right: 3px;
	}
	&:nth-child(12) {
		width: var(--progress);
		height: var(--progress);
		bottom: 0px;
		right: 90px;
	}
	&:nth-child(13) {
		width: var(--progress);
		height: var(--progress);
		bottom: 28px;
		left: 82px;
	}
	&:nth-child(14) {
		width: var(--progress);
		height: var(--progress);
		bottom: 74px;
		left: 28px;
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
			content: '';
			position: absolute;
			width: 0;
			height: 0;
			transition: .3s ease;
			border-radius: 50%;
			top: calc(50%);
			left: calc(50%);
			transform: translate(-50%, -50%);
			right: unset;
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
	cursor: pointer;
	user-select: none;
	top: 34px;
	left: 86px;
	width: 154px;
	height: 154px;
	border-radius: 50%;
	border: 3px solid var(--color-dynamic-black);
}
</style>