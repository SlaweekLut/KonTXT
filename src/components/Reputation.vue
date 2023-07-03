<template>
	<div class="reputation" :class="{'reputation--small': small}">
		<div class="reputation__header">
			<p class="reputation__title">
				{{ value }}
			</p>
			<Icon :name="IconReputation" :size="small ? 16 : 25" class="reputation__icon"/>
		</div>
		<p class="reputation__subtitle" v-if="!subtitleHide && !small">{{ $t('reputation') }}</p>
	</div>
</template>

<script setup>
import Icon from './Icon.vue';
import IconReputation from './icons/IconReputation.vue';

defineProps({
	value: {
		type: Number,
	},
	subtitleHide: {
		type: Boolean,
		default: false,
	},
	small: {
		type: Boolean,
		default: false,
	}
});

</script>

<style scoped lang="scss">
.reputation {
	display: flex;
	flex-direction: column;
	gap: 5px;
	&__header {
		display: flex;
		align-items: center;
		gap: 8px;
	}
	&__title {
		font-size: 26px;
		font-weight: 600;
		color: var(--color-dynamic-black);
	}
	&__subtitle {
		font-size: 14px;
		font-family: "Inter";
		font-weight: 500;
		color: var(--color-dynamic-black);
	}
	&--small & {
		&__title {
			font-size: 20px;
			font-weight: 500;
		}
	}
	@include screen('767.98px') {
		align-items: center;
		&__title {
			font-size: 24px;
		}
		&__subtitle {
			font-size: 14px;
		}
		&__icon {
			width: 24px !important;
			height: 24px !important;
			min-width: 24px !important;
			min-height: 24px !important;
			max-width: 24px !important;
			max-height: 24px !important;
		}
		&--small &__icon {
			width: 16px !important;
			height: 16px !important;
			min-width: 16px !important;
			min-height: 16px !important;
			max-width: 16px !important;
			max-height: 16px !important;
		}
	}
}
</style>