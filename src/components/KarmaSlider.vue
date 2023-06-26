<template>
	<div class="karma-container">
		<div class="karma-slider__value-container">
			<Karma 
				:value="valueTest === null ? value : valueTest" 
				slider 
				class="karma-slider__value"
				:style="`transform: translateX(min(max(-50%, calc(-50% + ${x}px)), calc(-50% + ${xmax}px)));`"
			/>
		</div>
		<div class="karma-slider" 
			ref="slider"
			@mousemove="changeCoordinate($event)"
			@mousedown="down = true; changeCoordinate($event)"
			@mouseup="down = false; setDefault()"
			@mouseleave="down = false; setDefault()"
		>
			<div 
				class="karma-slider__thumb" 
				:style="`transform: translate(min(max(0px,${x}px), ${xmax}px),-50%);`" 
			></div>
			<div class="karma-slider__stops">
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
			</div>
		</div>
		<div class="karma-slider__values">
			<p class="text-comment-small">-50</p>
			<p class="text-comment-small">0</p>
			<p class="text-comment-small">50</p>
		</div>
	</div>

</template>

<script setup>
import { onMounted, ref } from 'vue';
import Karma from './Karma.vue';

const props = defineProps({
	value: {
		type: Number,
		default: 0
	}
})

const emits = defineEmits(['tested'])

const slider = ref(null);
const xmax = ref(0);
const x = ref(0)
const down = ref(false);
const valueTest = ref(null);

onMounted(() => {
	xmax.value = slider.value.offsetWidth - 23
	x.value = Math.round(xmax.value / 100 * (props.value + 50))
})

const changeCoordinate = (event) => {
	if(down.value) {
		if(x.value < 0) {
			x.value = 0;
		} else if (x.value > xmax.value) {
			x.value = xmax.value;
		} else {
			x.value = 
			event.clientX - slider.value.offsetLeft - 11 < 0 
			? 0 : event.clientX - slider.value.offsetLeft - 11 > xmax.value
			? xmax.value : event.clientX - slider.value.offsetLeft - 11
		}
	}
	valueTest.value = Math.round(x.value / (xmax.value / 100) - 50)
	emits('tested', valueTest.value)
}

const setDefault = () => {
	x.value = Math.round(xmax.value / 100 * (props.value + 50))
	valueTest.value = Math.round(x.value / (xmax.value / 100) - 50)
	emits('tested', valueTest.value)
}
</script>

<style scoped lang="scss">
.karma-container {
	display: flex;
	width: 100%;
	flex-direction: column;
	justify-content: center;
	gap: 5px;
}
.karma-slider {
	position: relative;
	width: 100%;
	padding: 0px 10px;
	margin: -30px 0;
	height: calc(21px + 60px);
	user-select: none;
	&__value-container {
		position: relative;
		height: 34px;
		padding: 0px 10px;
	}
	&__value {
		position: absolute;
		transform: translateX(-50%);
		&--transition {
			transition: .3s ease;
		}
	}
	&__values {
		width: 100%;
		display: flex;
		justify-content: space-between;
		user-select: none;
	}
	&__stops {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		height: 100%;
		cursor: pointer;
		span {
			width: 2px;
			height: 14px;
			background: linear-gradient(180deg, var(--color-dynamic-black) 0%, rgba(20, 24, 31, 0.00) 100%);
			display: block;
			border-radius: 2px;
		}
	}
	&__thumb {
		position: absolute;
		transform: translate(0, 0);
		width: 2px;
		border-radius: 2px;
		top: 50%;
		height: 21px;
		background-color: var(--color-dynamic-black);
		cursor: pointer;
		&::before {
			content: '';
			display: block;
			width: 22px;
			height: 2px;
			border-radius: 2px;
			transform: translate(-50%, -50%);
			top: 0;
			left: 50%;
			background-color: var(--color-dynamic-black);
		}
		&--transition {
			transition: .3s ease;
		}
	}
}
</style>