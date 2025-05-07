<script>
	import { base } from "$app/paths";
    import { onMount } from "svelte";

    let icon = "circel.png"
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
    <div class="home" id="home">
        <h1 class="thing">Portfolio</h1>
    </div>
    <div class="about" id="about">
        <div class="left">
            <h2 class="thing">HELLO!</h2>
            <div class="thing" id="line"></div>
            <div class="thing" id="me">
                i am me and here my art wowoowowowo i am this old and i am this and this and yes very beautifol pictru of me to the right here don  u like it veyr mcuc ebfo lvo e ir  so fjdocduh its amaixn
            </div>
            <div class="thing show" id="contact">
                <img src="{icon}" alt="email" id="icons">
                <img src="{icon}" alt="sociakmedid" id="icons">
                <img src="{icon}" alt="another social medi..." id="icons">
            </div>
        </div>
        <img class="thing show" id="mee" src="https://i.pinimg.com/236x/84/6d/ab/846dab8b33339cb37cff781a8b95ab07.jpg" alt="cat">
    </div>
    <div class="gallery" id="gallery">
        <h3 class="thing">Gallery</h3>
        
        <a href="{base}/sketches">
            <div class="thing show" id="sketch">
                <p>Sketches</p>
            </div>
        </a><a href="{base}/artworks">
        <div class="thing" id="artwork">
            <p>Artworks</p>
        </div></a>
        <div class="thing" id="idkyet">
            <p>Traditional</p>
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
        background-position: 50% 10%;
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
        -webkit-text-stroke: 3px rgb(202, 212, 255);
        flex-wrap: wrap;
    }
    .about{
        padding: 100px;
        padding-top: 200px;
        height: 110vh;
        background-color: rgb(241, 178, 224);
        color: black;
        border-color: rgb(202, 212, 255);
        border-top-width: 15px;
        display: flex;
        justify-content: space-between;
        position: relative;
    }
    .left{
        width: 50%;
    }
    #mee{
        height: 60vh;
    }
    h2{
        justify-items: center;
        margin-left: 10vw;
        font-size: 6vw;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        color: rgb(244, 42, 140);
    }
    #line{
        height: 3px;
        width: 30vw;
        background-color: rgb(244, 42, 140);
        margin-left: 10vw;
        margin-top: 50px;

    }
    #me{
        margin: 60px;
        height: 20vh;
        width: 30vw;
        border: rgba(0, 0, 0, 0.259) 4px dotted;
        margin-left: 10vw;
        border-radius: 10px;
        margin-bottom: 0px;
        color: rgba(168, 84, 119, 0.803);
    }
    #contact{
        height: 15vh;
        width: 30vw;
        background-color: rgba(189, 71, 198, 0.105);
        border-radius: 25px;
        color: black;
        margin: 20px;
        margin-left: 10vw;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
    }
    #icons{
        height: 9vh;
    }
    .gallery{
        height: 250vh;
        background-color: rgb(202, 212, 255);
        padding: 100px;
        border-top-width: 10px;
        border-color: rgb(244, 42, 140);
        justify-items: center;
    }
    h3{
        font-size: 130px;
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        color: rgb(241, 178, 224);
        -webkit-text-stroke: rgb(244, 42, 140) 3px;
        margin-bottom: 100px;
    }
    #sketch{
        background-image: url("IMG_5216.JPG");
        background-size: cover;
        background-position: 100%;
    }
    #artwork{
        background-image: url("IMG_5202.JPG");
        background-size: cover;
        
    }
    #sketch, #artwork, #idkyet{
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
    #sketch:hover, #artwork:hover, #idkyet:hover{
        color: rgba(255, 106, 163, 0.763);
        opacity: 80%;
        transform: translateX(0);
    }
    .thing{
        opacity: 0;
        transition: opacity 700ms ease-in-out;
        transform: translateX(-200px);
        transition: 1s;
    }
    .thing.show{
        transform: translateX(0);
        opacity: 1;
    }
   
</style>