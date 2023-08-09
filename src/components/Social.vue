<template>
	<a class="social" @click="() => {if(status !== 'hidden') copy()}" :href="link">
		<Icon :name="icon" :size="iconSize"/>
		<div class="social__info">
			<Transition name="fade-slide-up">
				<div class="tooltip text-main-small" v-if="copied">{{ $t('copy') }}</div>
			</Transition>
			<p class="text-comment-small">{{ status === 'primary' ? `${$t('primarySocial')} - ${title}` : title }}</p>
			<p class="text-main social__text" :class="{'hidden': status === 'hidden'}">
				{{ status === 'hidden' ? 'This is text filler' : text }}
				<Icon v-if="messenger" v-for="social in messenger" :key="social" :size="14" :name="getIcon(social)"/> 
			</p>
		</div>
	</a>
</template>

<script setup>
import { computed, ref } from 'vue';
import Icon from './Icon.vue';
import IconTelegram from './icons/IconTelegram.vue';
import IconLinkedIn from './icons/IconLinkedIn.vue';
import IconEmail from './icons/IconEmail.vue';
import IconInstagram from './icons/IconInstagram.vue';
import IconFacebook from './icons/IconFacebook.vue';
import IconVK from './icons/IconVk.vue';
import IconKonTxT from './icons/IconKonTXT.vue';
import IconWebsite from './icons/IconWebsite.vue';
import IconCompanyWebsite from './icons/IconCompanyWebsite.vue';
import IconTwitter from './icons/IconTwitter.vue';
import IconOther from './icons/IconOther.vue';
import IconPhone from './icons/IconPhone.vue';
import IconFilledTelegram from './icons/IconFilledTelegram.vue';
import IconFilledWhatsapp from './icons/IconFilledWhatsapp.vue';
import IconFilledViber from './icons/IconFilledViber.vue';

const props = defineProps({
	iconSize: {
		type: Number,
		default: 32,
	},
	type: {
		type: String,
		required: true,
	},
	text: {
		type: String,
		required: true
	},
	link: {
		type: String,
		required: true
	},
	status: {
		type: String,
	},
	messenger: {
		type: Array
	}
})

const getIcon = (name) => {
	switch (name) {
		case 'telegram':
			return IconFilledTelegram
			break;
		case 'whatsapp':
			return IconFilledWhatsapp
			break;
		case 'viber':
			return IconFilledViber
			break;
	}
}

const title = computed(() => {
	switch (props.type) {
		case 'telegram':
			return 'Telegram'
			break;
		case 'instagram':
			return 'Instagram'
			break;
		case 'linkedin':
			return 'LinkedIn'
			break;
		case 'email':
			return 'Почта'
			break;
		case 'facebook':
			return 'facebook'
			break;
		case 'website':
			return 'Web-site'
			break;
		case 'vk':
			return 'Vkontakte'
			break;
		case 'company-website':
			return 'Company website'
			break;
		case 'twitter':
			return 'Twitter'
			break;
		case 'kontxt':
			return 'KonTxT'
			break;
		case 'phone':
			return 'Телефон'
			break;
		default:
			return 'Другая соц. сеть'
			break;
	}
})
const icon = computed(() => {
	switch (props.type) {
		case 'telegram':
			return props.state === 'primary' ? IconTelegram : IconFilledTelegram
			break;
		case 'instagram':
			return props.state === 'primary' ? IconInstagram : IconInstagram
			break;
		case 'linkedin':
			return IconLinkedIn
			break;
		case 'email':
			return IconEmail
			break;
		case 'facebook':
			return IconFacebook
			break;
		case 'website':
			return IconWebsite
			break;
		case 'vk':
			return IconVK
			break;
		case 'company-website':
			return IconCompanyWebsite
			break;
		case 'twitter':
			return IconTwitter
			break;
		case 'kontxt':
			return IconKonTxT
			break;
		case 'phone':
			return IconPhone
			break;
		default:
			return IconOther
			break;
	}
})

const copied = ref(false);

const copy = () => {
	if(!props.hidden) {
		navigator.clipboard.writeText(props.link)
		copied.value = true
		setTimeout(() => {
			copied.value = false
		}, 1000)
	}
}
</script>

<style scoped lang="scss">
.social {
	display: flex;
	gap: 20px;
	align-items: center;
	text-decoration: none;
	cursor: pointer;
	&__info {
		display: flex;
		flex-direction: column;
		gap: 5px;
		position: relative;
	}
	&__text {
		display: flex;
		align-items: center;
		gap: 15px;
	}
	.hidden {
		position: relative;
		user-select: none;
		pointer-events: none;
		filter: blur(7px);
	}
}
.tooltip {
	padding: 10px 20px;
	background-color: var(--color-dynamic-white);
	border-radius: 20px 20px 30px 0px;
	border: 1px solid rgba(var(--color-dynamic-gray), 0.1);
	box-shadow: 0px 12px 10px 0px rgba(0, 0, 0, 0.04);
	font-size: 12px;
	font-family: "Inter";
	font-weight: 500;
	letter-spacing: 0.12px;
	color: var(--color-dynamic-gray);
	position: absolute;
	padding: 4px 8px;
	z-index: 1;
	left: 50%;
	transform: translate(-50%, -120%);
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