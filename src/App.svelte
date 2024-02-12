<script>
  import { data } from './data/data';
  import Footer from './lib/Footer.svelte';
  import Header from './lib/Header.svelte';
  
</script>

<main>
  <div class="header">
    <Header />
  </div>
  <div class="container">
    {#each $data as d}
      <div class="row">
        <div class="row-header">
          <span class="name">{d.animal}</span>
          <span class="value">{d.total}%</span>
        </div>
        <div class="waffle-grid">
          {#each Array.from({length: 100-d.total}) as cell}
            <div class="cell empty"></div>
          {/each}        
          {#each Array.from({length: d.total}) as cell}
            <div class="cell fill">
          </div>
          {/each}
        </div>
      </div>
    {/each}
  </div>
  <div class="footer">
    <Footer />
  </div>
</main>

<style>
  main {
    width: 80%;
    margin: 0 auto; 
  }

  .header {
    margin: 40px 0;
  }

  .container {
    width: 100%;    
    margin: calc(var(--margin)) auto;        
    display: grid;
    gap: 40px;    
    grid-template-columns: repeat(auto-fit, var(--grid-size));    
    place-content: left;
  }
  .row {
    width: var(--grid-size);
    height: calc(var(--grid-size) + 40px);
    display: flex;
    flex-direction: column;    
  }

  .row-header {
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-transform: uppercase;
    padding: 0 2px;
    color: var(--text-color);
  }

  .row-header .value {
    font-size: calc(var(--text-font-size) + 0.2rem);
    font-variant: tabular-nums;
    font-weight: 800; 
    color: var(--cell-fill-color);   
  }

  .row-header .name {
    font-size: var(--text-font-size);
    font-weight: 600;
    letter-spacing: 1.4px;
  }

  .waffle-grid {
    flex-grow: 1;
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(10, 1fr);
    gap: 1px;
  }

  .cell {
    border-radius: var(--cell-border-radius);
  }
  
  .cell.empty {
    opacity: 0.2;
    background-color: var(--cell-empty-color);  
  }

  .cell.fill {
    background-color: var(--cell-fill-color);
  }

  .footer {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 20px;
  }
</style>
