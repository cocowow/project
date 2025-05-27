<script>
    import Carousel from 'svelte-carousel'

    let artworks = [{img:"IMG_5216.jpg"}, {img:"IMG_5308.jpeg"},{img:"sketch1.jpeg"},{img:"sketch2.jpeg"},{img:"sketch3.jpeg"},{img:"sketch4.jpeg"},{img:"sketch5.jpeg"}]
</script>

<main>
    <Carousel
        
        particlesToShow={2}
        particlesToScroll={1}
    >
    
        {#each artworks as art}
        
            <img src={art.img} alt="i" id="artwork">

        {/each}
        
    </Carousel>
</main>

<style>
    main{
        overflow-y: hidden;
        background-color: aliceblue;
    }
   #artwork{
    height: 100vh;
    object-fit: contain;
    padding: 5vh;
}
    
</style>