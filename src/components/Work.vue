<template>
	<div class="work" :class="{'work--nonline': nonline}">
		<div class="work-aside">
			<div class="work-aside__logo">
				<img :src="getSrc(work.src)" :alt="work.title">
			</div>
			<div class="work-aside__reputation">
				<p class="work-aside__reputation-title">
					{{ work.reputation }}
				</p>
				<Icon :name="IconReputation" :size="16"/>
			</div>
		</div>
		<div class="work__content">
			<div class="work__header">
				<div class="work__info">
					<p class="work__title">{{ work.title }} <Icon :name="IconVerify" :size="24" v-if="work.isVerified"/> </p>
					<p class="work__subtitle text-main">{{ work.job }}</p>
				</div>
				<p class="work__time text-comment-small">{{ work.dateStart }} - {{ work.dateEnd }}</p>
			</div>
			<p class="work__body text-main">
				{{ work.description }}
			</p>
		</div>
	</div>
</template>

<script setup>
import Icon from './Icon.vue';
import IconReputation from './icons/IconReputation.vue';
import IconVerify from './icons/IconVerify.vue';

const props = defineProps({
	work: {
		type: Object,
		required: true
	},
	nonline: {
		type: Boolean,
		default: false
	}
})

const getSrc = (src) => {
	let formattedSrc =`./../assets/images/${src}`
	return new URL(formattedSrc, import.meta.url).href
}
</script>

<style scoped lang="scss">
.work {
	display: flex;
	gap: 40px;
	position: relative;
	padding-right: 19px;
	&__content {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 20px;
	}
	&__header {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		width: 100%;
	}
	&__title {
		display: flex;
		align-items: center;
		gap: 10px;
		font-size: 18px;
		font-weight: 600;
		color: var(--color-dynamic-black);
	}
	&__info {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
	&::after {
		content: '';
		position: absolute;
		right: 0;
		width: 9px;
		height: 9px;
		top: 4px;
		border-radius: 50%;
		background-color: var(--color-dynamic-gray);
	}
	&::before {
		content: '';
		position: absolute;
		right: 4px;
		height: calc(100% + 40px);
		width: 1px;
		background-color: var(--color-dynamic-gray);
		top: 4px;
	}
	&:last-child::before {
		height: calc(100%);
	}
	&--nonline {
		padding-right: 0;
		&::after, &::before {
			display: none;
		}
	}
	@include screen(767.98px) {
		padding-right: 0;
		gap: 20px;
		&__body {
			overflow: hidden;
			display: -webkit-box;
			-webkit-line-clamp: 9; /* number of lines to show */
							line-clamp: 9; 
			-webkit-box-orient: vertical;
		}
		&__content {
			gap: 6px;
		}
		&__title {
			font-size: 14px;
			font-weight: 500;
		}
		&::after, &::before {
			display: none;
		}
	}
}
.work-aside {
	display: flex;
	flex-direction: column;
	gap: 10px;
	align-items: center;
	max-width: 89px;
	&__logo {
		display: flex;
		width: 89px;
		height: 89px;
		align-items: center;
		justify-content: center;
		border: 2px solid var(--color-dynamic-black);
		border-radius: 50%;
	}
	&__reputation {
		display: flex;
		align-items: center;
		gap: 5px;
		&-title {
			font-weight: 500;
			font-size: 20px;
			color: var(--color-dynamic-black);
		}
	}
	@include screen(767.98px) {
		max-width: 65px;
		&__logo {
			width: 65px;
			height: 65px;
		}
	}
}
</style>