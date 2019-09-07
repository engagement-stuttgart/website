import Markdown from 'markdown-it'
const markdown = Markdown()



export default ({
	Vue, // the version of Vue being used in the VuePress app
	options, // the options for the root Vue instance
	router, // the router instance for the app
	siteData // site metadata
}) => {
	Vue.directive('markdown', {
		bind: function (el, binding, vnode) {
			el.innerHTML = markdown.render(binding.value)
		}
	})
}
