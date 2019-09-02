<template lang="pug">
.page-project
	.hero
		.text
			h1 {{ $page.frontmatter.hero.title }}
			h2 {{ $page.frontmatter.hero.subtitle }}
			p {{ $page.frontmatter.hero.description }}
		img(:src="$page.frontmatter.hero.image")
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
</style>
