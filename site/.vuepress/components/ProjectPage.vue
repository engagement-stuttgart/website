<template lang="pug">
.page-project
	.hero
		.text
			h1 {{ $page.frontmatter.hero.title }}
			h2(v-if="$page.frontmatter.hero.subtitle !== ' '") {{ $page.frontmatter.hero.subtitle }}
			div(v-markdown="$page.frontmatter.hero.description")
		img(:src="$page.frontmatter.hero.image")
	h2 {{ $page.frontmatter.goals.title }}
	p {{ $page.frontmatter.goals.description }}
	.goals
		.goal(v-for="goal of $page.frontmatter.goals.items")
			img(:src="goal.image")
			.text
				h3 {{ goal.title }}
				p {{ goal.description }}
	h2 {{ $page.frontmatter.structure.title }}
	div(v-markdown="$page.frontmatter.structure.description")
	.structures
		.structure(v-for="structure of $page.frontmatter.structure.items")
			img(:src="structure.image")
			.text
				h3 {{ structure.title }}
				p {{ structure.description }}
</template>
<script>
export default {
	components: {},
	data () {
		return {
		}
	},
	computed: {},
	created () {},
	mounted () {
		this.$nextTick(() => {
		})
	},
	methods: {}
}
</script>
<style lang="stylus">
.page-project
	.hero
		display: flex
		margin-bottom: 64px
		h2
			border: none

		img
			margin: 32px 0 0 32px
			flex: none
			height: 300px
	> h2
		border: none
	.goal
		display: flex
		margin: 32px 0
		.text
			padding-top: 32px
			align-self: center
		h2
			border: none
		img
			margin: 32px
			flex: none
			height: 200px
		&:nth-child(odd)
			flex-direction: row-reverse
	.structures
		display: flex
		.structure
			flex: 1
			display: flex
			flex-direction: column
			margin: 0 16px
			&:first-child
				margin-left: 0
			&:last-child
				margin-right: 0
			.text
				padding-top: 32px
			h2
				border: none
			img
				margin: 32px 0 -48px 0
				flex: none
				height: 200px
</style>
