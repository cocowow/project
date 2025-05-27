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
	import { scrollTo, scrollRef, scrollTop } from 'svelte-scrolling'


	hljs.registerLanguage('xml', xml); // for HTML
	hljs.registerLanguage('css', css);
	hljs.registerLanguage('javascript', javascript);
	hljs.registerLanguage('typescript', typescript);
	storeHighlightJs.set(hljs);

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
	
	let lastScrollTop 
   let showNav = true 
   import { page } from '$app/stores';

	$: isHome = $page.url.pathname === '/' ;

</script>

<svelte:window on:scroll={()=>{
    var st = window.pageYOffset || document.documentElement.scrollTop; //Get current scroll position
    //If new scroll position is greater than old (previous/ last) - hide
    if (st > lastScrollTop) 
   showNav = false
  else 
  showNav = true
  lastScrollTop = st;

}}></svelte:window>

<nav class="nav {showNav == true? "show": "hide" }">
	{#if isHome}
	<a href="{base}/#home" class="porto" use:scrollTo={'home'}>PORTFOLIO</a>
	<a href="{base}/#about" class="link" use:scrollTo={'about'}>ABOUT ME</a>
	<a href="{base}/#gallery" class="link" use:scrollTo={'gallery'}>GALLERY</a>
	<a href="{base}/devblog" class="link">DEVBLOG</a>
	{:else}
	<a href="{base}/#home" class="porto">PORTFOLIO</a>
	<a href="{base}/#about" class="link" >ABOUT ME</a>
	<a href="{base}/#gallery" class="link">GALLERY</a>
	<a href="{base}/devblog" class="link">DEVBLOG</a>
	{/if}
   </nav>
<slot />


<style>
	.nav{
        background: linear-gradient(rgb(173, 179, 255),rgba(202, 206, 252, 0.8), rgba(244, 245, 248, 0.586));
        padding: 6px;
        position: fixed;
        top: 0;
        width: 100%;
		color: rgba(215, 49, 118, 0.763);
		z-index: 5;
		height: 8vh;
		font-family: Impact;
		font-size: 3vh;
    }
	.porto{
		margin-right: 20vw;
		font-size: 5vh;
		font-family: Impact;
        color: rgb(202, 212, 255);
        -webkit-text-stroke: 3px rgba(215, 49, 118, 0.748);
	}
	.hide{
        opacity: 0;
		transition: 500ms ease-in-out;
		align-items: center;
		top: -3%;
    }
    .show{
		opacity: 1;
		transition: 500ms ease-in-out;
		top: 0%;
    }
	nav{
		display: flex;
		justify-content: space-evenly;
		align-items: center;
	}
	nav:hover{
		opacity: 1;
		transition: 500ms ease-in-out;
		top: 0%;
	}
	
	.link:hover{
		color: rgb(207, 126, 164);
	}
</style>