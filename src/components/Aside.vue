<template>
	<aside class="aside" v-if="isAuth">
		<div class="aside-item" :class="{'router-link-active': path === '/cutaway' || path === '/reputation'}">
			<RouterLink to="/" class="aside-item__header">
				<Icon :name="IconCircle" class="aside-item__icon" />
				<p class="aside-item__title">{{$t('header.profile')}}</p>
			</RouterLink>
			<div class="aside-item__sublist" v-if="path === '/cutaway' || path === '/reputation'">
				<RouterLink class="aside-item__link" to="/cutaway">{{$t("card")}}</RouterLink>
				<RouterLink class="aside-item__link" to="/reputation">{{$t("reputation")}}</RouterLink>
			</div>
		</div>
		<RouterLink to="/contacts" disabled class="aside-item">
			<div class="aside-item__header">
				<Icon :name="IconSquare" class="aside-item__icon" />
				<p class="aside-item__title">{{$t('header.contacts')}}</p>
			</div>
		</RouterLink>
		<RouterLink to="/meets" disabled class="aside-item">
			<div class="aside-item__header">
				<Icon :name="IconCross" class="aside-item__icon" />
				<p class="aside-item__title">{{$t('header.meets')}}</p>
			</div>
		</RouterLink>
		<RouterLink to="/knowledge" disabled class="aside-item">
			<div class="aside-item__header">
				<Icon :name="IconTriangle" class="aside-item__icon" />
				<p class="aside-item__title">{{$t('header.knowledge')}}</p>
			</div>
		</RouterLink>
	</aside>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import Icon from './Icon.vue';
import IconCircle from './icons/IconCircle.vue';
import IconSquare from './icons/IconSquare.vue';
import IconCross from './icons/IconCross.vue';
import IconTriangle from './icons/IconTriangle.vue';
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import { useUserStore } from '@/stores/user';

const userStore = useUserStore();
const isAuth = computed(() => userStore.isAuth);

const route = useRoute();
const path = computed(() => route.path);

</script>

<style scoped lang="scss">
.aside {
	display: flex;
	flex-direction: column;
	gap: 30px;
}
.aside-item {
	display: flex;
	flex-direction: column;
	gap: 20px;
	text-decoration: none;
	&__icon {
		:deep(rect[fill]),
		:deep(path[fill]) {
			fill: var(--color-dynamic-gray);
			transition: .3s ease;
		}
		:deep(rect[stroke]),
		:deep(path[stroke]) {
			stroke: var(--color-dynamic-gray);
			transition: .3s ease;
		}
	}
	&__link {
		font-size: 14px;
	}
	&__sublist {
		display: flex;
		flex-direction: column;
		gap: 20px;
		margin-left: 52px;
	}
	&__header {
		display: flex;
		gap: 20px;
		align-items: center;
		text-decoration: none;
	}
	&__title {
		font-size: 14px;
		font-family: 'Montserrat';
		font-weight: 500;
		text-decoration: none;
		color: var(--color-dynamic-gray);
		transition: .3s ease;
	}
	&__link {
		text-decoration: none;
		color: var(--color-dynamic-gray);
		transition: .3s ease;
		display: flex;
		align-items: center;
		gap: 10px;
		font-size: 12px;
		&::before {
			content: '';
			width: 27px;
			display: block;
			border-top: 1px solid var(--color-dynamic-gray);
			transition: .3s ease;
		}
		&.router-link-active {
			color: var(--color-dynamic-black);
			&::before {
				border-color: var(--color-dynamic-black);
			}
		}
		@include ui-mouse {
			&:hover {
				color: var(--color-dynamic-black);
				&::before {
					border-color: var(--color-dynamic-black);
				}
			}
		}
	}

	&.router-link-active & {
		&__title {
			color: var(--color-dynamic-black);
		}
	}
	&.router-link-active {
		:deep(rect[fill]),
		:deep(path[fill]) {
			fill: var(--color-dynamic-black);
		}
		:deep(rect[stroke]),
		:deep(path[stroke]) {
			stroke: var(--color-dynamic-black);
		}
	}

	@include ui-mouse {
		&:hover &__title {
			color: var(--color-dynamic-black);
		}
		&:hover &__icon {
			:deep(rect[fill]),
			:deep(path[fill]) {
				fill: var(--color-dynamic-black);
			}
			:deep(rect[stroke]),
			:deep(path[stroke]) {
				stroke: var(--color-dynamic-black);
			}
		}
	}
}
</style>