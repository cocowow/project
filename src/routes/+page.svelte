<script>
	import { base } from "$app/paths";
    import { onMount } from "svelte";
    import { scrollTo, scrollRef, scrollTop } from 'svelte-scrolling'


    let icon = "circel.png"
    let phot = "mephho.png"
    let things;
    let insta = "instagram.png"
    let linked = "linkedin.png"
    let yt = "youtube.png"

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
    <div class="home" id="home" use:scrollRef={'home'}>
        <h1 class="thing">Portfolio</h1>
    </div>
    <div class="about" id="about" use:scrollRef={'about'}>
        <div class="left">
            <h2 class="thing">HELLO!</h2>
            <div class="thing" id="line"></div>
            <div class="thing" id="me">
              <p class="meinfo">  I’m Jordan Carter, a graphic designer specializing in branding and digital design. With a background in visual arts and a passion for storytelling, I help businesses craft memorable identities that resonate with their audience.

Over the past 4 years, I’ve worked with startups, agencies, and creative teams to develop logos, marketing materials, and user-friendly digital experiences. My approach balances creativity with strategy—ensuring every design not only looks great but serves a purpose.

When I’m not designing, you’ll find me exploring photography, browsing art galleries, or perfecting my latte art. Let’s collaborate and bring your vision to life!
</p>

            </div>
            <div class="thing show" id="contact">
                <button><img src="{insta}" alt="email" id="icons"></button>
                <button><img src="{linked}" alt="sociakmedid" id="icons"></button>
                <button><img src="{yt}" alt="another social medi..." id="icons"></button>
            </div>
        </div>
        <img class="thing " id="mee" src="{phot}" alt="cat">
    </div>
    <div class="gallery" id="gallery" use:scrollRef={'gallery'}>
        <h3 class="thing">Gallery</h3>
        
        <a href="{base}/sketches">
            <div class="thing show" id="sketch">
                <p>Sketches</p>
            </div>
        </a><a href="{base}/artworks">
        <div class="thing" id="artwork">
            <p>Artworks</p>
        </div></a>
    </div>
</main>

<style>
    main{
        overflow-x: hidden;
    }
    
    .home{
        background-image: url(/astart.jpg);
        background-size: cover;
        background-position: 50% 10%;
        opacity: 0.9;
        height: 110vh;
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
        -webkit-text-stroke: 3px rgb(202, 212, 255);
        flex-wrap: wrap;
    }
    .about{
        padding: 5vh 8vw;
        height: 110vh;
        background-color: rgb(241, 178, 224);
        color: black;
        border-color: rgb(202, 212, 255);
        border-top-width: 15px;
        display: flex;
        justify-content: space-between;
        position: relative;
        align-items: center;
    }
    .left{
        width: 50%;
        margin-left: 5vw;
    }
    #mee{
        
        width: 40vw;

        
    }
    .meinfo{
        font-size: 1vw;
    }
    h2{
        justify-items: center;
        margin-left: 0;
        font-size: 6vw;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        color: rgb(244, 42, 140);
    }
    #line{
        height: 3px;
        width: 30vw;
        background-color: rgb(244, 42, 140);
        margin-left: 0;
        margin-top: 50px;

    }
    #me{
        margin: 20px;
        height: 33vh;
        width: 30vw;
        margin-left: 0;
        border-radius: 10px;
        margin-bottom: 0px;
        color: rgb(244, 42, 140);
    }
    #contact{
        height: 6vh;
        width: 30vw;
        margin-top: 2vh;
        margin: 20px;
        margin-left: 0;
        margin-bottom: 0;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
    }
    #icons{
        width: 3vw;
    }
    .gallery{
        height: 180vh;
        background-color: rgb(202, 212, 255);
        padding: 150px;
        border-top-width: 10px;
        border-color: rgb(244, 42, 140);
        justify-items: center;
        background-image: url(/bgpink.png);
        background-size: cover;
        background-repeat: repeat-y;
        background-attachment: fixed;
    }
    h3{
        font-size: 130px;
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        color: rgb(241, 178, 224);
        -webkit-text-stroke: rgb(244, 42, 140) 3px;
        margin-bottom: 150px;
    }
    #sketch{
        background-image: url(/IMG_5216.jpg);
        background-size: cover;
        background-position: 100%;
    }
    #artwork{
        background-image: url(/artwork1.jpg);
        background-size: cover;
        
    }
    #sketch, #artwork{
        height: 50vh;
        width: 50vw;
        margin: 100px;
        padding: 100px;
        border-width: 5px;
        border-color: rgb(241, 178, 224);
        color: rgba(240, 248, 255, 0);
        font-size: 90px;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        align-content: center;
        justify-items: center;
    }
    #sketch:hover, #artwork:hover{
        color: rgba(255, 106, 163, 0.763);
        opacity: 80%;
        transform: translateX(0);
    }
    .thing{
        opacity: 0;
        transition: opacity 700ms ease-in-out;
        transform: translateX(-8vw);
        transition: 1s;
    }
    .thing.show{
        transform: translateX(0);
        opacity: 1;
    }
   
</style>