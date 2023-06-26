<template>
	<button :class="`button button--${type} text-button`">
		{{ text }}
	</button>
</template>

<script setup>
defineProps({
	type: {
		type: String,
		default: 'primary',
	},
	text: {
		type: String,
		required: true
	}
})
</script>

<style scoped lang="scss">
.button {
	padding: 10px 20px;
	width: 100%;
	border: 1px;
	border-radius: 100px;
	border: 1px solid var(--color-dynamic-black);
	text-align: center;
	transition: .3s ease;
	cursor: pointer;
	&--secondary {
		background-color: var(--color-dynamic-black);
		color: var(--color-dynamic-white);
	}
	
	@include ui-mouse {
		&:hover {
			background: var(--color-dynamic-black);
			color: var(--color-dynamic-white);
		}
		&--secondary:hover {
			background-color: var(--color-dynamic-white);
			color: var(--color-dynamic-black);
		}
	}
}
</style>