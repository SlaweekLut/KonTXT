<template>
	<div class="project">
		<div class="project__header">
			<p class="project__title">{{ project.title }}</p>
			<p class="project__date text-comment">{{ project.date }}</p>
		</div>
		<div class="project__images">
			<img v-for="(image, i) in project.images" :src="getSrc(image)" class="project__image" :key="i" />
		</div>
		<div class="project__row">
			<div class="project__col">
				<p class="project__col-title text-main">{{ $t('projects.results') }}:</p>
				<ul class="project__results">
					<li class="project__result text-main-small" v-for="(result, i) in project.results" :key="i">{{ result }}</li>
				</ul>
			</div>
			<div class="project__col project__col--member">
				<p class="project__col-title text-comment-small">{{ $t('members') }}:</p>
				<div class="project__members">
					<Donars :value="project.members" :size="29" title="Участники"/>
				</div>
			</div>
		</div>
		<div class="project__col" v-if="project.description">
			<p class="project__col-title text-main">{{ $t('projects.description') }}:</p>
			<p class="project__col-text text-main-small">{{ project.description }}</p>
		</div>
		<div class="project__col" v-if="project.link">
			<p class="project__col-title text-main">{{ $t('projects.link') }}:</p>
			<p class="project__col-text text-main-small">{{ project.link }}</p>
		</div>
	</div>
</template>

<script setup>
import Donars from './Donars.vue';

const props = defineProps({
	project: {
		type: Object,
		required: true
	}
})

// const getSrc = (src) => {
// 	let formattedSrc =`./../assets/images/${src}`
// 	return new URL(formattedSrc, import.meta.url).href
// }
const getSrc = (src) => new URL(`/src/assets/images/${src}`, import.meta.url).href
</script>

<style scoped lang="scss">
.project {
	padding: 10px 0px;
	display: flex;
	flex-direction: column;
	gap: 10px;
	&__header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-right: 18px;
	}
	&__title {
		font-size: 18px;
		font-weight: 600;
		color: var(--color-dynamic-black);
	}
	&__images {
		display: flex;
		gap: 20px;
		height: 108px;
	}
	&__image {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
	}
	&__row {
		display: flex;
		gap: 10px 24px;
		flex-wrap: wrap-reverse;
	}
	&__members {
		display: flex;
		gap: 4px;
	}
	&__col {
		display: flex;
		flex-direction: column;
		gap: 2px;
		&--member {
			gap: 5px;
			margin-left: auto;
			align-items: flex-end;
			padding-right: 18px;
		}
	}
	&__col-text {
		max-width: 396px;
	}
	&__results {
		padding-left: 18px;
	}
	@include screen(767.98px) {
		&__image {
			max-width: calc(33.333% - 8.66667px);
		}
	}
}
</style>