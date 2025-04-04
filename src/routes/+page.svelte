<script>
	import { onMount } from "svelte";

    
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
        threshold: 0.8,
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
});
   

    

    
    
</script>

<main>
    <div class="home">
        <h1 class="thing">Portfolio</h1>
    </div>
    <div class="about">
        <h2 class="thing">HELLO!</h2>
        <div class="thing" id="line"></div>
        <div class="thing" id="me">

        </div>
    </div>
    <div class="gallery">
        <div class="thing show" id="sketch">

        </div>
        <div class="thing" id="artwork">

        </div>
        <div class="thing" id="idkyet">

        </div>
    </div>
</main>

<style>
    main{
        overflow-x: hidden;
    }
    .home{
        background-image: url("IMG_5197.JPG");
        background-size: cover;
        opacity: 0.9;
        height: 100vh;
        width: 100vw;
        overflow-x: hidden;
        background-attachment: fixed;
        flex-direction: column;
        align-content: center;
    }
    
    h1{
        font-size: 35vh;
        justify-self: center;
        font-family: Impact;
        margin-left: -250px;
        margin-top: 300px;
        color: rgb(255, 127, 206);
        -webkit-text-stroke: 4px rgb(202, 212, 255);
    }
    .about{
        padding: 100px;
        padding-top: 200px;
        height: 130vh;
        background-color: rgb(241, 178, 224);
        color: black;
        border-color: rgb(202, 212, 255);
        border-top-width: 15px;
    }
    h2{
        margin-left: 150px;
        font-size: 10vh;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        color: rgb(244, 42, 140);
    }
    #line{
        height: 3px;
        width: 450px;
        background-color: rgb(244, 42, 140);
        margin-left: 150px;
        margin-top: 50px;

    }
    #me{
        margin: 60px;
        height: 60vh;
        width: 30vw;
        background-color: rgba(0, 0, 0, 0.397);
        margin-left: 150px;
        border-radius: 10px;
    }
    .gallery{
        height: 250vh;
        background-color: rgb(202, 212, 255);
        padding: 100px;
        border-top-width: 10px;
        border-color: rgb(244, 42, 140);
    }
    #sketch, #artwork, #idkyet{
        height: 50vh;
        width: 50vw;
        justify-self: center;
        background-color: white;
        margin: 100px;
        padding: 100px;
        border-width: 5px;
        border-color: rgb(241, 178, 224);
    }
    .thing{
        opacity: 0;
        transition: opacity 700ms ease-in-out;
        transform: translateX(-100px);
        transition: 1s;
    }
    .thing.show{
        transform: translateX(0);
        opacity: 1;
    }
   
</style>