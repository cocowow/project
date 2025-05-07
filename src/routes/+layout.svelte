<script>
	import '../app.postcss';
	import { base } from '$app/paths';
	// Highlight JS
	import hljs from 'highlight.js/lib/core';
	import 'highlight.js/styles/github-dark.css';
	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	import xml from 'highlight.js/lib/languages/xml'; // for HTML
	import css from 'highlight.js/lib/languages/css';
	import javascript from 'highlight.js/lib/languages/javascript';
	import typescript from 'highlight.js/lib/languages/typescript';

	hljs.registerLanguage('xml', xml); // for HTML
	hljs.registerLanguage('css', css);
	hljs.registerLanguage('javascript', javascript);
	hljs.registerLanguage('typescript', typescript);
	storeHighlightJs.set(hljs);

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
	
	

</script>
<nav>
	<a href="{base}/#home">PORTFOLIO</a>
	<a href="{base}/#about">ABOUT ME</a>
	<a href="{base}/#gallery">GALLERY</a>
	<a href="{base}/devblog">DEVBLOG</a>
   </nav>
<slot />



<style>
	nav{
		display: flex;
		justify-content: space-evenly;
		height: 8vh;
		position: fixed;
		color: rgb(215, 49, 118);
		z-index: 5;
		width: 100vw;
		background: linear-gradient(rgb(173, 179, 255),rgba(202, 206, 252, 0.8), rgba(244, 245, 248, 0.586));
		opacity: 0;
		transition: 500ms ease-in-out;
		align-items: center;
		top: -3%;
	}
	nav:hover{
		opacity: 1;
		transition: 500ms ease-in-out;
		top: 0%;
	}
</style>