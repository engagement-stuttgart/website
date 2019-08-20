<template lang="pug">
.under-construction(v-if="show")
	.dialog
		img(src="@theme/assets/images/under-construction.svg")
		h1 Diese Website befindet sich noch im Aufbau!
		button(@click="dismiss") Egal!
</template>
<script>
export default {
	components: {},
	data () {
		return {
			show: !sessionStorage.getItem('dismissedUnderConstruction')
		}
	},
	computed: {},
	created () {},
	mounted () {
		this.$nextTick(() => {
		})
	},
	methods: {
		dismiss () {
			sessionStorage.setItem('dismissedUnderConstruction', true)
			this.show = false
		}
	}
}
</script>
<style lang="stylus">
.under-construction
	z-index: 9000
	position: fixed
	top: 0
	left: 0
	width: 100vw
	height: 100vh
	background-color: $clr-disabled-text-light
	display: flex
	justify-content: center
	align-items: center

	.dialog
		background-color: $clr-white
		padding: 64px 64px 32px 64px
		max-width: 90vw
		border-radius: 4px
		box-sizing: border-box
		display: flex
		flex-direction: column
		justify-content: center
		text-align: center
		@media(max-width: $MQMobile)
			padding: 32px
		img
			height: 40vh
			@media(min-width: $MQMobile)
				margin-bottom: 16px
		button
			font-size: 1.2rem
			color: #fff
			background-color: $accentColor
			padding: 0.8rem 1.6rem
			border-radius: 4px
			transition: background-color .1s ease
			box-sizing: border-box
			outline: none
			border: none
			cursor: pointer
			&:hover
				background-color: lighten($accentColor, 10%)
</style>
