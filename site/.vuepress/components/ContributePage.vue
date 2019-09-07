<template lang="pug">
.page-contribute
	.hero
		.text
			h1 {{ $page.frontmatter.hero.title }}
			h2 {{ $page.frontmatter.hero.subtitle }}
			p {{ $page.frontmatter.hero.description }}
		img(:src="$page.frontmatter.hero.image")
	.working-groups
		.working-group(v-for="workingGroup of $page.frontmatter.workingGroups")
			h3 {{ workingGroup.title }}
			p {{ workingGroup.description }}
			button#btn-mitmachen Mitmachen
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
.page-contribute
	.hero
		display: flex
		margin-bottom: 64px
		h2
			border: none

		img
			margin: 32px 0 0 32px
			flex: none
			height: 300px
	.working-groups
		display: flex

		.working-group
			flex: 1
			margin: 0 16px
			&:first-child
				margin-left: 0
			&:last-child
				margin-right: 0
			p
				height: 96px
			#btn-mitmachen
				outline: none
				border: none
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
</style>
