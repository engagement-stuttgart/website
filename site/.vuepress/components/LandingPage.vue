<template lang="pug">
.page-landing
	.hero
		.text
			h1 {{ $page.frontmatter.hero.title }}
			h2 {{ $page.frontmatter.hero.subtitle }}
			p {{ $page.frontmatter.hero.description }}
			a#btn-mitmachen(:href="$page.frontmatter.hero.link.url") {{ $page.frontmatter.hero.link.text }}
		img(:src="$page.frontmatter.hero.image")
	.highlights
		.highlight(v-for="highlight of $page.frontmatter.highlights")
			.text
				h1 {{ highlight.title }}
				h2 {{ highlight.subtitle }}
				p {{ highlight.description }}
				a#btn-mitmachen(:href="highlight.link.url") {{ highlight.link.text }}
			img(:src="highlight.image")
	h2 Förderer
	.sponsors
		a.sponsor(v-for="sponsor of $page.frontmatter.sponsors", :href="sponsor.link", :title="sponsor.title")
			img(:src="sponsor.image")
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
.page-landing
	.hero
		display: flex
		margin-bottom: 64px
		h2
			border: none

		img
			margin: 32px 0 0 32px
			flex: none
			height: 300px

	#btn-mitmachen
		display inline-block
		font-size 1.2rem
		color #fff
		background-color $accentColor
		padding 0.8rem 1.6rem
		border-radius 4px
		transition background-color .1s ease
		box-sizing border-box
		border-bottom 1px solid darken($accentColor, 10%)
		&:hover
			background-color lighten($accentColor, 10%)

	.highlight
		display: flex
		margin: 32px 0
		.text
			padding-top: 32px
		h2
			border: none
		img
			margin: 32px 0 0 32px
			flex: none
			height: 300px
		&:nth-child(odd)
			flex-direction: row-reverse
			img
				margin: 32px 32px 0 0
	> h2
		border-bottom: 0
		text-align: center
		font-size: 48px
	.sponsors
		display: flex
		.sponsor
			margin: 0 auto
			img
				max-height: 200px
</style>
