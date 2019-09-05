<template lang="pug">
.page-progress
	.hero
		.text
			h1 {{ $page.frontmatter.hero.title }}
			h2 {{ $page.frontmatter.hero.subtitle }}
			p {{ $page.frontmatter.hero.description }}
		img(:src="$page.frontmatter.hero.image")
	.timeline
		.item(v-for="item of $page.frontmatter.timeline")
			.date {{ item.date }}
			.text
				h3 {{ item.title }}
				p {{ item.description }}
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
.page-progress
	.hero
		display: flex
		margin-bottom: 64px
		h2
			border: none

		img
			margin: 32px 0 0 32px
			flex: none
			height: 300px
	.timeline
		display: flex
		flex-direction: column

		.item
			flex: none
			display: flex
			.date
				flex: none
				width: 128px
				text-align: right
				padding: 32px 16px 0 0
				position: relative

				&::after
					content: ''
					position: absolute
					right: -8px
					top: 35px
					background-color: $clr-green
					width: 16px
					height: @width
					border-radius: 50%
			.text
				padding: 8px 0 8px 32px
				border-left: 2px solid $clr-grey-400
</style>
