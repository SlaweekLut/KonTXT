<template>
	<div class="review-video">
		<div class="review-video__info" :class="{ 'review-video__info--full': full }">
			<div class="review-video__preview">
				<Avatar :src="review.src" :size="160" :alt="review.name" class="review-video__avatar"/>
				<Icon :name="IconPlayMedia" v-if="full" class="review-video__play" />
			</div>
			<div class="review-video__name">
				<p class="text-main review-video__title">{{ review.name }} <Icon :name="IconVerify" :size="24" v-if="review.isVerified && full"/> </p>
				<p class="text-comment-small">
					{{ review.profession }}, {{ review.address.split(', ')[1] }}
				</p>
				<p class="text-comment-small" v-if="full">
					{{ review.job }}, {{ review.company }}
				</p>
				<div class="review-video__karma" v-if="full">
					<Karma :value="review.karma" small/>
					<Reputation :value="review.karma" small/>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import Avatar from './Avatar.vue';
import Icon from './Icon.vue';
import Karma from './Karma.vue';
import Reputation from './Reputation.vue';
import IconVerify from './icons/IconVerify.vue';
import IconPlayMedia from './icons/IconPlayMedia.vue';

defineProps({
	review: {
		type: Object,
		required: true
	},
	full: {
		type: Boolean,
		default: false
	}
})
</script>

<style scoped lang="scss">
.review-video {
	&__info {
		display: flex;
		flex-direction: column;
		align-items: center;
		&--full {
			display: flex;
			gap: 32px;
			align-items: flex-start;
			flex-direction: row;
			.review-video {
				&__name {
					text-align: left;
				}
				&__title {
					font-size: 18px;
					font-weight: 600;
					display: flex;
					align-items: center;
					gap: 18px;
					margin-bottom: 10px;
				}
			}
		}
	}
	&__name {
		display: flex;
		flex-direction: column;
		gap: 2px;
		text-align: center;
		margin-top: 10px;
	}
	&__karma {
		margin-top: 20px;
		display: flex;
		gap: 36px;
	}
	&__preview {
		position: relative;
		&::before {
			content: '';
			width: 100%;
			height: 100%;
			border-radius: 50%;
			background-color: rgba(#14181F, 0.25);
			position: absolute;
		}
	}
	&__play {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		cursor: pointer;
		box-sizing: content-box;
		padding: 8px;
	}
	@include screen(767.98px) {
		&__avatar {
			width: 105px !important;
			height: 105px !important;
			min-width: 105px !important;
			min-height: 105px !important;
			max-height: 105px !important;
			max-width: 105px !important;
		}
		&__info--full {
			flex-direction: row;
			gap: 20px;
			.review-video {
				&__avatar {
					width: 98px !important;
					height: 98px !important;
					min-width: 98px !important;
					min-height: 98px !important;
					max-height: 98px !important;
					max-width: 98px !important;
				}
				&__title {
					font-size: 14px;
				}
				&__name {
					width: 100%;
				}
			}
		}
	}
}
</style>
