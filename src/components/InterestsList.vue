<template>
	<div class="interests-list">
		<Interes v-for="interest in interests" :text="interest" />
	</div>
</template>

<script setup>
import Interes from './Interes.vue';

defineProps({
	interests: {
		type: Array,
		required: true
	}
});

</script>

<style scoped lang="scss">
.interests-list {
	display: flex;
	flex-wrap: wrap;
	gap: 7px 10px;
}
</style>