<template>
<button class="button">
	<Transition name="fade-slide-up">
		<div class="tooltip" v-if="copied">{{ $t('copy') }}</div>
	</Transition>
	<Icon :name="IconCopy" :size="24" @click="copy()"/>
</button>
</template>

<script setup>
import { ref, computed } from 'vue';
import Icon from './Icon.vue';
import IconCopy from './icons/IconCopy.vue';

const url = computed(() => {return window.location.href})

const copied = ref(false)

const copy = () => {
	navigator.clipboard.writeText(url.value)
	copied.value = true
	setTimeout(() => {
		copied.value = false
	}, 1000)
}

</script>

<style scoped lang="scss">
.button {
	cursor: pointer;
	position: relative;
}

.tooltip {
	position: absolute;
	padding: 4px 8px;
	border: 1px solid var(--color-dynamic-black);
	background: var(--color-dynamic-white);
	z-index: 1;
	left: 50%;
	transform: translate(-50%, -120%);
	color: var(--color-dynamic-black);
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