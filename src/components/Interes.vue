<template>
	<p class="interes text-main">
		{{ text }}
	</p>
</template>

<script setup>
defineProps({
	text: {
		type: String,
		required: true
	}
})
</script>

<style scoped lang="scss">
.interes {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	padding: 8px 12px;
	border-radius: 100px;
	border: 1px solid var(--color-dynamic-gray);
	
}
</style>