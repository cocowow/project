<!-- src/routes/devblog/[slug]/+page.svelte -->
<script>
    /** @type {import('./$types').PageData} */
    export let data;
  </script>
  
  <article>

    <h1>{data.title}</h1>
    <p>Published: {data.date}</p>
    <svelte:component this={data.content} />
  </article>

  <style>
    article{
      margin-top: 9vh;
    }
  </style>