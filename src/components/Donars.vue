<template>
	<div class="donars">
		<RouterLink :to="`/user/${donar.id}/cutaway`" class="donar" v-for="donar of visibleUsers" :key="donar">
			<Avatar :src="donar.src" :alt="donar.name" :size="size"/>
		</RouterLink>
		<p class="donars__more text-menu-up" @click="modal = true" :style="`width: ${size}px; height: ${size}px;`" v-if="Object.keys(users).length - 3 > 0">
			+{{ Object.keys(users).length - 3 }} 
		</p>
		<Modal :open="modal" @close="modal = false">
			<div class="modal__header">
				<p class="user-content__title text-h1">{{ title === 'Дона́ры' ? $t('donars') : $t('members') }}</p>
				<ActionModalBar/>
			</div>
			<div class="modal__content user-content__projects">
				<template v-for="(donar, i) of users" :key="i">
					<Donar :value="donar" :id="userInfo.id"/>
				</template>
			</div>
		</Modal>
	</div>
</template>

<script setup>
import { computed, ref } from 'vue';
import Avatar from './Avatar.vue';
import usersList from '@/database/users.js';
import { RouterLink,useRoute } from 'vue-router';
import Modal from './Modal.vue';
import ActionModalBar from './ActionModalBar.vue';
import Donar from './Donar.vue';
import {useUserStore} from '@/stores/user';
const users = ref({})

for (const key of props.value) {
	users.value[key] = usersList[key];
}

const visibleUsers = computed(() => {
	const keys = Object.keys(users.value).slice(0, 3);
	const newObj = {};

	keys.forEach(key => newObj[key] = users.value[key]);
	return newObj
})

const props = defineProps({
	value: {
		type: Array
	},
	size: {
		type: Number,
		default: 58
	},
	title: {
		type: String,
		default: 'Дона́ры'
	},
})

const modal = ref(false);

const route = useRoute()
const id = computed(() => route.params.id)

const userStore = useUserStore()
const userInfo = computed(() => {
	if(id.value) {
		return users[id.value]
	}
	else return userStore.userInfo
})
</script>

<style scoped lang="scss">
.donars {
	display: flex;
	gap: 10px;
	&__more {
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		border-radius: 50%;
		width: 58px;
		height: 58px;
		border: 1px solid var(--color-dynamic-black);
		position: relative;
		box-sizing: border-box;
		background-color: var(--color-dynamic-white);
		&::after, &::before {
			content: '';
			position: absolute;
			display: block;
			width: 100%;
			height: 100%;
			border-radius: 50%;
			background-color: var(--color-dynamic-white);
			border: 1px solid var(--color-dynamic-gray);
			right: -40%;
			z-index: -1;
			top: -1px;
			box-sizing: border-box;
		}
		&::after {
			right: -80%;
			z-index: -2;
			border-color: #C8C8C8;
		}
	}
}

.modal {
	&__header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 40px;
	}
	&__content {
		& > * {
			position: relative;
			padding-bottom: 40px;
			&::after {
				content: "";
				position: absolute;
				width: 82%;
				height: 1px;
				background-color: var(--color-dynamic-gray);
				bottom: 0;
				left: 50%;
				transform: translate(-50%);
			}
		}
	}
	@include screen(767.98px) {
		&__content {
			& > * {
				padding-bottom: 20px;
				&::after {
					display: none;
				}
			}
		}
	}
}

.user-content {
	&__title {
		display: flex;
		align-items: center;
		white-space: nowrap;
		gap: 20px;
	}
}
</style>