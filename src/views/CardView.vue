<script setup>
import { computed, ref, watch } from 'vue';
import Copy from '../components/Copy.vue';
import Icon from '../components/Icon.vue';
import IconVerify from '../components/icons/IconVerify.vue';
import IconShare from '../components/icons/IconShare.vue';
import IconQR from '../components/icons/IconQR.vue';
import IconCamera from '../components/icons/IconCamera.vue';
import IconDownload from '../components/icons/IconDownload.vue';
import IconTelegram from '../components/icons/IconTelegram.vue'
import IconFilledTelegram from '../components/icons/IconFilledTelegram.vue'
import IconPhone from '../components/icons/IconPhone.vue'
import IconEmail from '../components/icons/IconEmail.vue'
import IconLinkedIn from '../components/icons/IconLinkedIn.vue'
import Avatar from '../components/Avatar.vue';
import InterestsList from '../components/InterestsList.vue';
import Social from '../components/Social.vue';
import Button from '../components/Button.vue';
import {useUserStore} from '@/stores/user';
import UserNote from '../components/UserNote.vue';
import IconEnvelop from '../components/icons/IconEnvelop.vue';
import IconFacebook from '../components/icons/IconFacebook.vue';
import IconVK from '../components/icons/IconVK.vue';
import { useRoute, useRouter } from 'vue-router';
import {useHead} from 'unhead'

import Users from '../database/users.js';
import Modal from '../components/Modal.vue';

const route = useRoute()
const id = computed(() => route.params.id)

const userStore = useUserStore()
const mainInfo = computed(() => userStore.userInfo)
const userInfo = computed(() => {
	if(id.value === userStore.userInfo.id) return userStore.userInfo
	if(id.value) return Users[id.value]
	else return userStore.userInfo
})

const isAuth = computed(() => userStore.isAuth)
const canShare = computed(() => {
	if(navigator?.share) return true
	else return false
})
const noteAboutUser = ref(mainInfo.value.notes?.[id.value])

watch(noteAboutUser, () => {
	userStore.setNote(id.value, noteAboutUser.value)
})

const modalQR = ref(false)
const modalShare = ref(false)
const url = computed(() => {
	let id = `/user/${userInfo.value.id}/cutaway`
	return new URL(id,import.meta.url).href
})

const getSrc = (src) => new URL(`/src/assets/images/${src}`, import.meta.url).href
useHead({
	title: userInfo.value.name,
	meta: [
		{ property: 'og:title', content: userInfo.value.name },
		{ property: 'og:description', content: userInfo.value.description },
		{ property: 'og:image', content: getSrc(userInfo.value.src) },
		{ property: 'og:url', content: window.location.href },
	]
})

</script>

<template>
	<main class="user">
		<div class="user__header">
			<h1 class="text-username user__name">{{ userInfo.name }}</h1>
			<Icon :name="IconVerify" v-if="userInfo.isVerified"/>
		</div>
		<div class="user-info">
			<Avatar :src="userInfo.src" :alt="userInfo.name" class="user-info__avatar"/>
			<div class="user__header user__header--mobile">
				<h1 class="text-username user__name">{{ userInfo.name }}</h1>
				<Icon :name="IconVerify" v-if="userInfo.isVerified"/>
			</div>
			<div class="user-info__column">
				<div class="user-info__item">
					<p class="user-info__title text-h2">{{ $t('profession') }}</p>
					<p class="user-info__text text-uppart">{{ userInfo.profession }}</p>
				</div>
				<div class="user-info__item">
					<p class="user-info__title text-h2">{{ $t('job') }}</p>
					<p class="user-info__text text-uppart">{{ userInfo.job }}</p>
				</div>
				<div class="user-info__item">
					<p class="user-info__title text-h2">{{ $t('company') }}</p>
					<p class="user-info__text text-uppart">{{ userInfo.company }}</p>
					<p class="user-info__text text-main">{{ userInfo.address }}</p>
				</div>
				<div class="user-info__item user-info__item--mobile">
					<p class="user-info__title text-main">{{ userInfo.profession }}, {{ userInfo.address.split(', ')[1] }}</p>
				</div>
				<div class="user-info__item user-info__item--mobile">
					<p class="user-info__title text-main">{{ userInfo.job }} {{ $t('in') }} {{ userInfo.company }}</p>
				</div>
				<div class="user-info__footer">
					<p class="user-info__id text-comment-small">id{{ userInfo.id }}</p>
					<button class="user-info__button">
						<Copy :copyValue="url"/>
					</button>
					<button class="user-info__button" @click="canShare ? navigator.share({url: url}) : modalShare = true ">
						<Icon :name="IconShare" :size="24"/>
					</button>
					<button class="user-info__button" @click="modalQR = true">
						<Icon :name="IconQR" :size="24"/>
					</button>
				</div>
			</div>
		</div>
		<div class="user__content">
			<div class="user-controlls" v-if="isAuth">
				<Button class="user-controlls__button" :text="$t('button.write')" />
				<Button class="user-controlls__button" type="secondary" :text="$t('button.save')" />
			</div>
			<div class="user-note" v-if="id && isAuth">
				<p class="user-note__title text-h1">{{ $t('note') }}</p>
				<UserNote @update:value="noteAboutUser" :value="noteAboutUser"/>
			</div>
			<div class="user-about">
				<p class="user-about__title text-h1">{{ $t('titles.about') }}</p>
				<p class="user-about__text text-main">{{ userInfo.description }}</p>
			</div>
			<div class="user-interes">
				<div class="user-interes__title text-h1">{{ $t('titles.interes') }}</div>
				<InterestsList :interests="userInfo.interests"/>
			</div>
			<div class="user-contacts">
				<p class="user-contacts__title text-h1">{{ $t('titles.contacts') }}</p>
				<Social :icon="IconPhone" hidden :title="$t('telephone')" link="+7 (495) 123-45-67"/>
				<Social :icon="IconFilledTelegram" :title="`${$t('preffered')} - Telegram`" link="@maria.tverdh007"/>
				<div class="user-contacts__row">
					<div class="user-contacts__column">
						<Social :icon="IconTelegram" title="Telegram" link="@maria.tverdh007"/>
						<Social :icon="IconEmail" title="Почта" link="maria.tverdh@gmail.com"/>
						<Social :icon="IconLinkedIn" title="LinkedIn" link="maria-tverdh-651909224"/>
					</div>
					<div class="user-contacts__column" v-if="isAuth">
						<Social :icon="IconTelegram" title="Telegram" link="@maria.tverdh007"/>
						<Social :icon="IconEmail" title="Почта" link="maria.tverdh@gmail.com"/>
						<Social :icon="IconLinkedIn" title="LinkedIn" link="maria-tverdh-651909224"/>
					</div>
				</div>
			</div>
			<div class="user-controlls">
				<Button class="user-controlls__button" :text="$t('button.savetophone')" />
				<Button class="user-controlls__button" type="secondary" :text="$t('button.save')" v-if="!isAuth" />
			</div>
		</div>
		<Modal :open="modalQR" @close="modalQR = false" small>
			<div class="modal__header">
				<p class="user-content__title text-h1">QR-код вашего профиля</p>
			</div>
			<div class="modal__content qr">
				<div class="qr__row">
					<Avatar :src="userInfo.src" :alt="userInfo.name" :size="61"/>
					<div class="qr__info">
						<p class="text-main">{{ userInfo.name }}</p>
						<p class="text-comment-small">{{ userInfo.job }}, {{ userInfo.company }}</p>
					</div>
				</div>
				<img src="@/assets/images/qr.png" alt="qr">
				<div class="qr__actions">
					<button class="qr__action">
						<Icon :name="IconDownload"/>
					</button>
					<button class="qr__action">
						<Icon :name="IconCamera"/>
					</button>
					<button class="qr__action" @click="canShare ? navigator.share({url: url}) : modalShare = true ">
						<Icon :name="IconShare"/>
					</button>
				</div>
			</div>
		</Modal>
		<Modal :open="modalShare" @close="modalShare = false" share>
			<div class="share">
				<div class="share__input">
					<p class="text-comment">www.kontxt.me/id{{ userInfo.id }}</p>
					<Copy :copyValue="url"/>
				</div>
				<div class="share__links">
					<a :href="`https://t.me/share/url?url=${url}`" class="share__link" target="_blank">
						<Icon :name="IconTelegram" :size="24"/>
					</a>
					<a :href="`mailto:?subject=Hello%20again`" class="share__link" target="_top">
						<Icon :name="IconEnvelop" :size="24"/>
					</a>
					<a :href="`https://www.facebook.com/sharer/sharer.php?u=${url}`" class="share__link" target="_blank">
						<Icon :name="IconFacebook" :size="24"/>
					</a>
					<a :href="`https://vk.com/share.php?url=${url}`" class="share__link" target="_blank">
						<Icon :name="IconVK" :size="24"/>
					</a>
					<a :href="`https://www.linkedin.com/sharing/share-offsite/?url=${url}`" class="share__link" target="_blank">
						<Icon :name="IconLinkedIn" :size="24"/>
					</a>
				</div>
			</div>
		</Modal>
	</main>
</template>

<style scoped lang="scss">
.share {
	padding: 40px;
	display: flex;
	gap: 30px;
	align-items: center;
	flex-direction: column;
	&__input {
		display: flex;
		border: 1px solid var(--color-dynamic-gray);
		border-radius: 1000px;
		align-items: center;
		gap: 10px;
		padding: 10px 20px;
		width: 100%;
		justify-content: space-between;
		p {
			font-size: 16px;
		}
		:deep(path[fill]) {
			fill: var(--color-dynamic-gray);
		}
	}

	&__links {
		display: flex;
		align-items: center;
		gap: 30px;
		align-items: center;
		margin: 0 auto;
	}
}
.qr {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;
	&__row {
		display: flex;
		gap: 20px;
	}
	&__info {
		padding-top: 4px;
		display: flex;
		flex-direction: column;
		gap: 2px;
	}
	&__actions {
		margin-top: 20px;
		display: flex;
		gap: 30px;
	}
	&__action {
		width: 32px;
		height: 32px;
		cursor: pointer;
	}
}
.user {
	&__header {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 20px;
		&--mobile {
			display: none;
		}
	}

	&__content {
		margin-top: 70px;
		display: flex;
		flex-direction: column;
		gap: 60px;
	}

	@include screen(767.98px) {
		&__header {
			display: none;
			&--mobile {
				display: flex;
				margin-top: 20px;
				gap: 10px;
			}
		}
		&__content {
			margin-top: 40px;
			gap: 40px;
		}
	}
}

.user-about, .user-interes, .user-contacts, .user-note {
	display: flex;
	flex-direction: column;
	gap: 20px;
}

.user-contacts {
	&__column {
		display: flex;
		flex-direction: column;
		gap: 16px;
		width: 100%;
		max-width: calc(50% - 10px);
		min-width: 250px;
	}
	&__row {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}
}
.modal {
	&__header {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: 32px;
		padding-bottom: 8px;
		position: sticky;
		top: -1px;
		z-index: 1;
		background: var(--color-dynamic-white);
	}
}

.user-controlls {
	display: flex;
	gap: 20px 40px;
	align-items: center;
	flex-wrap: wrap;
	&__button {
		max-width: calc(50% - 20px);
		width: 100%;
		min-width: 250px;
	}
	@include screen(767.98px) {
		&__button {
			max-width: 100%;
		}
	}
}

.user-info {
	display: flex;
	justify-content: space-between;
	margin-top: 40px;
	&__column {
		display: flex;
		flex-direction: column;
		gap: 20px;
		max-width: 306px;
		width: 100%;
	}
	&__item {
		display: flex;
		flex-direction: column;
		gap: 5px;
		&--mobile {
			display: none;
		}
	}
	&__footer {
		display: flex;
		gap: 20px;
		align-items: flex-end;
	}
	&__button {
		cursor: pointer;
	}

	@include screen(767.98px) {
		align-items: center;
		flex-direction: column;
		margin-top: 30px;
		&__avatar {
			width: 225px !important;
			height: 225px !important;
			max-width: 225px !important;
			max-height: 225px !important;
			min-width: 225px !important;
			min-height: 225px !important;
		}
		&__column {
			margin-top: 10px;
			align-items: center;
			gap: 10px;
			max-width: 100%;
		}
		&__item {
			display: none;
			&--mobile {
				display: flex;
			}
		}
		&__footer {
			margin-top: 10px;
		}
		&__id {
			display: none;
		}
	}
}
</style>
