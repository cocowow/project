<script>
    import { onMount } from "svelte";
    import { base } from '$app/paths';

    let skeches = [{img: "dumrcok.jpg", info:"idkgang"}, {img:"IMG_5202.jpg"},{img:"IMG_5216.jpg"}, {img:"IMG_5308.jpeg"},{img:"IMG_5310.jpeg"},{img:"IMG_5311.jpeg"},{img:"IMG_5312.jpeg"}]
    let moreSkeches = [...skeches]

    let things;

    onMount(() => {
        things = document.querySelectorAll(".thing");
        const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            entry.target.classList.toggle("show", entry.isIntersecting);
        });
        console.log(entries)
    },
    {
        threshold: 0.9,
    }
    );

    things.forEach(thing => {
        observer.observe(thing);
    });
    
    return () => {
        if (things) {
            things.forEach(thing => {
                observer.unobserve(thing);
            });
        }
    }
})
</script>

<main>
    <div class="horizontal-scroll">
        {#each moreSkeches as skech}
        
            <img src={skech.img} alt="i" id="sketches" class="thing show">

        {/each}
    </div>
    <div class="white"></div>
</main>

<style>
    main{
        overflow-y: hidden;
        background-color: rgb(255, 215, 240);
        padding-top: 8vh;
    }
    .horizontal-scroll{
        overflow-y: hidden;
        overflow-x: auto;
        height: 80vh;
        width: fit-content;
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        scroll-behavior: smooth;
        
    }
    #sketches{
            flex: 0 0 auto;
            margin: 100px;
            border: solid rgb(255, 255, 255) 10px;
            vertical-align: middle;
            background-color: rgb(0, 0, 0);
            padding: 3vh;
            object-fit: contain;
        }
    .thing{
        transition: 600ms ease-in-out;
        width: 50vw;
        height: 60vh;
    }
    .thing.show{
        width: 60vw;
        height: 70vh;
    }
    .white{
		background-color: white;
		height: 10vh;
        width: 100%;
        position: fixed;
	}
</style>