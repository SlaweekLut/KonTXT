<template>
	<div class="karma-container">
		<div class="karma-slider__value-container">
			<Karma 
				:value="Number(x)" 
				slider 
				class="karma-slider__value"
				:style="`transform: translateX(-50%); left: ${Number(x) + 50}%;`"
			/>
		</div>
		<div class="karma-slider" ref="slider">
			<input type="range" min="-50" max="50" step="10" class="karma-slider__range" v-model="x" @touchend="x = valueBuffer" @mouseup="x = valueBuffer">
			<div 
				class="karma-slider__thumb" 
				:style="`transform: translate(-50%, -50%); left: ${Number(x) + 50}%;`" 
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
import { ref, watch } from 'vue';
import Karma from './Karma.vue';

const props = defineProps({
	value: {
		type: Number,
		default: 0
	}
})

const emits = defineEmits(['tested'])

const slider = ref(null);
const valueBuffer = ref(props.value);
const x = ref(Number(props.value))

watch(x, () => {
	emits('tested', Number(x.value))
})
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
	margin: -30px 0;
	height: calc(21px + 60px);
	user-select: none;
	&__value-container {
		position: relative;
		height: 34px;
	}
	&__range {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		opacity: 0;
		cursor: pointer;
	}
	&__value {
		position: absolute;
		transform: translateX(-50%);
		transition: .3s ease;
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
		transition: .3s ease;
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
	}
}
</style>