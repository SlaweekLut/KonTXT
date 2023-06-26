<script setup>
import { ref, computed, watch } from 'vue';
import Icon from '../components/Icon.vue';
import IconChevron from '../components/icons/IconChevron.vue'
import IconVerify from '../components/icons/IconVerify.vue';
import Avatar from '../components/Avatar.vue';
import InterestsList from '../components/InterestsList.vue';
import Button from '../components/Button.vue';
import AchivementList from '../components/AchivementList.vue';
import {useUserStore} from '@/stores/user';
import Karma from '../components/Karma.vue';
import Reputation from '../components/Reputation.vue';
import Donars from '../components/Donars.vue';
import Info from '../components/Info.vue';
import { useRoute } from 'vue-router';

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper';
const modules = [Navigation]

import 'swiper/css';
import 'swiper/css/navigation';

import Users from '../database/users.js';
import KarmaSlider from '../components/KarmaSlider.vue';
import Sertificate from '../components/Sertificate.vue';
import Project from '../components/Project.vue';
import VideoReview from '../components/VideoReview.vue';
import Review from '../components/Review.vue';
import Work from '../components/Work.vue';
import Modal from '../components/Modal.vue';
import ActionModalBar from '../components/ActionModalBar.vue';
import Login from '../components/Login.vue';
import ReputationBubbles from '../components/ReputationBubbles.vue';

const route = useRoute()
const id = computed(() => route.params.id)

const userStore = useUserStore()
const userInfo = computed(() => {
	if(id.value) {
		return Users[id.value]
	}
	else return userStore.userInfo
})

const isAuth = computed(() => userStore.isAuth)
const testedKarma = ref(userInfo.value.karma)

const currentReview = ref(1)
const prevReview = ref(null)
const nextReview = ref(null)

const currentVideoReview = ref(1)
const prevVideoReview = ref(null)
const nextVideoReview = ref(null)

const modals = ref({
	project: false,
	works: false,
	sertificate: false,
	videoReview: false,
	review: false,
	login: false,
})

const currentReputationListId = ref(null)
const currentReputationList = ref(null)
const currentReputationListAll = ref(null)

watch(currentReputationListId, () => {
	if(currentReputationListId.value === null) {
		currentReputationList.value = null
	} else {
		currentReputationList.value = userInfo.value.reputationInfo[Object.keys(userInfo.value.reputationInfo)[currentReputationListId.value]]
	}
})
watch(currentReputationList, () => {
	if(currentReputationList.value === null) {
		currentReputationListAll.value = null
		return 
	} else if(currentReputationList.value.length > 0) {
		currentReputationListAll.value = currentReputationList.value.reduce((a,b) => {
			if(a.value) {
				return a.value + b.value
			} else {
				return a + b.value
			}
		})
	} else {
		currentReputationListAll.value = 0
	}
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
			<div class="user-info__column" :class="!isAuth ? 'user-info__column--hidden' : ''">
				<div class="user-info__item">
					<AchivementList :achivements="userInfo.achivements" class="user-info__achivments" />
				</div>
				<div class="user-info__item">
					<Karma :value="isAuth ? userInfo.karma : NaN"/>
					<Reputation :value="isAuth ? userInfo.reputation : NaN"/>
				</div>
				<div class="user-info__item user-info__item--donars">
					<p class="user-info__title text-h1">{{ $t('donars') }} <Info :text="$t('info.donars')" /></p>
					<donars :value="userInfo.donars" :hidden="!isAuth"/>
				</div>
			</div>
		</div>
		<div class="user__content">
			<div class="user-noauth" v-if="!isAuth">
				<p class="text-main user-noauth__text">
					{{ $t('noAuth') }}
				</p>
				<Button class="user-noauth__button" @click="modals.login = true" type="secondary" :text="$t('button.logIn')"/>
				<Login :open="modals.login" @close="modals.login = false" />
			</div>
			<template v-if="isAuth">
				<div class="user-karma">
					<p class="user-karma__title text-h1">{{ $t('karma') }} <Info :text="$t('info.karma')" /></p>
					<div class="user-karma__row">
						<p class="user-karma__text text-comment" v-if="testedKarma > 0">{{ $t('karmaDesc.positive', {value: `${testedKarma}`}) }}</p>
						<p class="user-karma__text text-comment" v-else-if="testedKarma === 0">{{ $t('karmaDesc.neutral') }}</p>
						<p class="user-karma__text text-comment" v-else>{{ $t('karmaDesc.negative', {value: testedKarma, valueb: -testedKarma}) }}</p>
						<KarmaSlider @tested="testedKarma = $event" class="user-karma__slider" :value="userInfo.karma" />
					</div>
				</div>
				<div class="user-reputation">
					<p class="user-reputation__title text-h1">{{ $t('reputation') }} <Info :text="$t('info.reputation')" /></p>
					<div class="user-reputation__row">
						<ReputationBubbles @getList="(n) => currentReputationListId = n === null ? null : n - 1" :value="userInfo.reputationInfo" :reputation="userInfo.reputation" />
						<div class="user-reputation__col" v-if="currentReputationListId !== null">
							<p class="user-reputation__list-title text-main">
								{{ $t(`reputationChart.${Object.keys(userInfo.reputationInfo)[currentReputationListId]}`) }} <Reputation :value="currentReputationListAll" small/>
							</p>
							<ul class="user-reputation__list">
								<li class="user-reputation__item text-comment" v-for="(item,i) in currentReputationList" :key="i">
									{{ item.title }} +{{ item.value }}
								</li>
							</ul>
						</div>
						<div class="user-reputation__col" v-else>
							<p class="user-reputation__text text-comment" v-if="testedKarma > 0">{{ $t('karmaDesc.positive', {value: `${testedKarma}`}) }}</p>
							<p class="user-reputation__text text-comment" v-else-if="testedKarma === 0">{{ $t('karmaDesc.neutral') }}</p>
							<p class="user-reputation__text text-comment" v-else>{{ $t('karmaDesc.negative', {value: testedKarma, valueb: -testedKarma}) }}</p>
						</div>
					</div>
				</div>
				<div class="user-content">
					<p class="user-content__title text-h1">{{ $t('titles.communities') }}</p>
					<InterestsList :interests="userInfo.groups"/>
				</div>
				<div class="user-content">
					<p class="user-content__title text-h1">{{ $t('titles.events') }}</p>
					<InterestsList :interests="userInfo.events"/>
				</div>
				<div class="user-content">
					<p class="user-content__title text-h1">{{ $t('titles.reviews') }} <span class="text-comment-small">{{ currentReview + " / " + userInfo.reviews.length }}</span></p>
					<div class="review-wrapper">
						<button class="review__button" ref="prevReview">
							<Icon :name="IconChevron" :size="32"/>
						</button>
						<swiper
							:slides-per-view="1"
							loop
							:modules="modules"
							:navigation="{
								prevEl: prevReview,
								nextEl: nextReview,
							}"
							space-between="16"
							@slideChange="currentReview = $event.realIndex + 1"
						>
							<swiper-slide v-for="({text, id}) in userInfo.reviews" :key="id">
								<Review :review="Users[id]" :text="text"/>
							</swiper-slide>
						</swiper>
						<button class="review__button review__button--next" ref="nextReview">
							<Icon :name="IconChevron" :size="32"/>
						</button>
					</div>
					<Button :text="$t('button.more')" @click="modals.review = true" class="user-content__more" />
				</div>
				<div class="user-content">
					<p class="user-content__title text-h1">{{ $t('titles.videoReviews') }} <span class="text-comment-small">{{ currentVideoReview + " / " + userInfo.videoReviews.length }}</span></p>
					<div class="review-wrapper review-wrapper--video">
						<button class="review__button review__button--video" ref="prevVideoReview">
							<Icon :name="IconChevron" :size="32"/>
						</button>
						<swiper
							:slides-per-view="2"
							:modules="modules"
							:navigation="{
								prevEl: prevVideoReview,
								nextEl: nextVideoReview,
							}"
							:breakpoints="{
								767.98: {
									slidesPerView: 3
								}
							}"
							space-between="30"
							@slideChange="currentVideoReview = $event.realIndex + 1"
						>
							<swiper-slide v-for="({id}) in userInfo.videoReviews" :key="id">
								<VideoReview :review="Users[id]"/>
							</swiper-slide>
						</swiper>
						<button class="review__button review__button--video review__button--next" ref="nextVideoReview">
							<Icon :name="IconChevron" :size="32"/>
						</button>
					</div>
					<Button :text="$t('button.more')" @click="modals.videoReview = true" class="user-content__more" />
				</div>
				<div class="user-content">
					<p class="user-content__title user-content__title--sertificates text-h1">{{ $t('titles.sertificates') }} <span class="text-comment-small">{{ "4 / " + userInfo.sertificates.length }}</span></p>
					<div class="user-content__grid">
						<template v-for="(sertificate, i) in userInfo.sertificates.slice(0, 4)" :key="i">
							<Sertificate  :sertificate="sertificate" grid/>
						</template>
					</div>
					<Button :text="$t('button.more')" @click="modals.sertificate = true" class="user-content__more" />
				</div>
				<div class="user-content">
					<p class="user-content__title text-h1">{{ $t('titles.projects') }} <span class="text-comment-small">{{ "2 / " + userInfo.projects.length }}</span></p>
					<div class="user-content__projects">
						<template v-for="(project, i) in userInfo.projects.slice(0,2)" :key="i">
							<Project  :project="project"/>
						</template>
					</div>
					<Button :text="$t('button.more')" @click="modals.project = true" class="user-content__more" />
				</div>
				<div class="user-content">
					<p class="user-content__title text-h1">{{ $t('titles.workExperience') }} <span class="text-comment-small">{{ "2 / " + userInfo.works.length }}</span></p>
					<div class="user-content__projects">
						<template v-for="(work, i) in userInfo.works.slice(0,2)" :key="i">
							<Work :work="work"/>
						</template>
					</div>
					<Button :text="$t('button.more')" @click="modals.works = true" class="user-content__more" />
				</div>

				<Modal :open="modals.review" @close="modals.review = false">
					<div class="modal__header">
						<p class="user-content__title text-h1">{{ $t('titles.reviews') }}</p>
						<ActionModalBar/>
					</div>
					<div class="modal__content user-content__projects">
						<template v-for="({text, id}) in userInfo.reviews" :key="id">
							<Review full :review="Users[id]" :text="text"/>
						</template>
					</div>
				</Modal>
				<Modal :open="modals.videoReview" @close="modals.videoReview = false">
					<div class="modal__header">
						<p class="user-content__title text-h1">{{ $t('titles.videoReviews') }}</p>
						<ActionModalBar/>
					</div>
					<div class="modal__content user-content__projects">
						<template v-for="({id}) in userInfo.videoReviews" :key="id">
							<VideoReview full :review="Users[id]"/>
						</template>
					</div>
				</Modal>
				<Modal :open="modals.sertificate" @close="modals.sertificate = false">
					<div class="modal__header">
						<p class="user-content__title text-h1">{{ $t('titles.sertificates') }}</p>
					</div>
					<div class="modal__content user-content__sertificates">
						<template v-for="(sertificate, i) in userInfo.sertificates" :key="i">
							<Sertificate  :sertificate="sertificate"/>
						</template>
					</div>
				</Modal>
				<Modal :open="modals.project" @close="modals.project = false">
					<div class="modal__header">
						<p class="user-content__title text-h1">{{ $t('titles.projects') }}</p>
						<ActionModalBar/>
					</div>
					<div class="modal__content user-content__projects">
						<template v-for="(project, i) in userInfo.projects" :key="i">
							<Project  :project="project"/>
						</template>
					</div>
				</Modal>
				<Modal :open="modals.works" @close="modals.works = false">
					<div class="modal__header">
						<p class="user-content__title text-h1">{{ $t('titles.workExperience') }}</p>
						<ActionModalBar/>
					</div>
					<div class="modal__content user-content__projects">
						<template v-for="(work, i) in userInfo.works" :key="i">
							<Work :work="work" nonline/>
						</template>
					</div>
				</Modal>
			</template>
		</div>
	</main>
</template>

<style scoped lang="scss">
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
			}
		}
		&__content {
			gap: 40px;
			margin-top: 40px;
		}
	}
}

.review-wrapper {
	display: flex;
	gap: 56px;
	align-items: start;
	&--video {
		gap: 14px;
	}
	@include screen(767.98px) {
		gap: 20px;
		&--video {
			gap: 16px;
		}
	}
}

.review {
	&__button {
		margin-top: 10px;
		width: 32px;
		height: 32px;
		cursor: pointer;
		&--next {
			transform: rotate(180deg);
		}
		&--video {
			margin-top: 64px;
		}
		@include screen(767.98px) {
			width: 24px;
			height: 24px;
			:deep(svg) {
				width: 24px !important;
				height: 24px !important;
				min-width: 24px !important;
				min-height: 24px !important;
				max-width: 24px !important;
				max-height: 24px !important;
			}
			&--video {
				margin-top: 41px;
			}
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
		position: relative;
		&--hidden {
			&::before {
				content: '';
				display: block;
				width: calc(100% + 64px);
				height: calc(100% + 64px);
				backdrop-filter: blur(14px);
				position: absolute;
				z-index: 1;
				margin: -32px;
				@include screen(767.98px) {
					width: 100vw;
					height: calc(100% + 62px);
					margin: -30px -20px -16px;
				}
			}
		}
	}
	&__item {
		display: flex;
		gap: 76px;
		&--donars {
			width: 100%;
			flex-direction: column;
			gap: 10px;
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
	&__title {
		display: flex;
		gap: 10px;
		align-items: center;
	}

	@include screen(767.98px) {
		align-items: center;
		flex-direction: column;
		margin-top: 30px;
		&__avatar {
			width: 225px;
			height: 225px;
		}
		&__column {
			max-width: 100%;
			margin-top: 30px;
			align-items: center;
			gap: 10px;
		}
		&__item {
			&--donars {
				margin-top: 30px;
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
.user-noauth {
	display: flex;
	gap: 12px 20px;
	align-items: center;
	@include screen(767.98px) {
		flex-direction: column;
		&__text {
			padding: 0px 7px;
		}
	}
}

.user-reputation {
	display: flex;
	flex-direction: column;
	gap: 20px;
	&__row {
		display: flex;
		gap: 20px 40px;
		justify-content: space-between;
		flex-wrap: wrap;
		align-items: center;
	}
	&__text {
		max-width: 307px;
		user-select: none;
	}
	&__col {
		display: flex;
		flex-direction: column;
		flex-grow: 1;
		gap: 10px;
	}
	&__title {
		display: flex;
		align-items: center;
		gap: 20px;
	}
	&__list-title {
		display: flex;
		align-items: center;
		gap: 20px;
	}
	&__list {
		list-style: none;
	}

	@include screen(767.98px) {
		&__text,&__slider {
			max-width: 100%;
			width: 100%;
		}
	}
}
.user-karma {
	display: flex;
	flex-direction: column;
	gap: 20px;
	&__row {
		display: flex;
		gap: 20px 56px;
		flex-wrap: wrap;
		justify-content: center;
	}
	&__slider {
		max-width: 360px;
		width: 100%;
	}
	&__text {
		max-width: 216px;
		user-select: none;
	}
	&__title {
		display: flex;
		align-items: center;
		gap: 20px;
	}

	@include screen(767.98px) {
		&__text,&__slider {
			max-width: 100%;
			width: 100%;
		}
	}
}

.user-content {
	display: flex;
	flex-direction: column;
	gap: 20px;
	&__title {
		display: flex;
		align-items: center;
		white-space: nowrap;
		gap: 20px;
		@include screen(767.98px) {
			&--sertificates {
				span {
					display: none;
				}
			}
		}
	}
	&__more {
		border-color: var(--color-dynamic-gray);
		color: var(--color-dynamic-gray);
		margin: 20px auto 0;
		font-size: 12px;
		font-family: 'Inter';
		font-weight: 500;
		display: inline-flex;
		padding: 8px 40px;
		width: auto;
		@include ui-mouse {
			&:hover {
				color: var(--color-dynamic-white);
				background-color: var(--color-dynamic-gray);
			}
		}
	}
	&__grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-template-areas: 'a b d' 'a c d';
		gap: 10px;
		div:nth-child(1) {
			grid-area: a;
		}
		div:nth-child(2) {
			grid-area: b;
		}
		div:nth-child(3) {
			grid-area: c;
		}
		div:nth-child(4) {
			grid-area: d;
		}
		@include screen(1199.98px) {
			grid-template-columns: repeat(2, 1fr);
			grid-template-areas: 'a b' 'a c';
			div:nth-child(4) {
				display: none;
			}
		}
		@include screen(767.98px) {
			grid-template-columns: repeat(2, calc(50% - 14px));
			gap: 14px;
		}
	}
	&__projects {
		display: flex;
		flex-direction: column;
		gap: 35px;
	}
	&__sertificates {
		display: grid;
		gap: 20px;
		grid-template-columns: repeat(auto-fill, calc(50% - 10px));
		grid-auto-rows: minmax(20px, auto);
		justify-content: center;
		& > * {
			padding-bottom: 0;
			&::after {
				display: none;
			}
			&:nth-child(n) {
				grid-row-end: span 2;
			}
			&:nth-child(2n) {
				grid-row-end: span 3;
			}
			&:nth-child(3n) {
				grid-row-end: span 4;
			}
			&:nth-child(4n) {
				grid-row-end: span 5;
			}
			&:nth-child(5n) {
				grid-row-end: span 6;
			}
		}
	}
	@include screen(767.98px) {
		&__projects {
			gap: 0;
		}
		&__sertificates {
			display: flex;
			flex-direction: column;
		}
	}
}
</style>
