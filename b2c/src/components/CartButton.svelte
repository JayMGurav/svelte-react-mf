<script>
	import {svelteZTSStore as store} from "../store";

  import CartToolTip from "./CartToolTip.svelte"

  let isHovered = false;
  
  $: count = $store.b2b.length + $store.b2c.length || 0;

  function handleMouseOver(e) {
    isHovered = true;
	}
  function handleMouseOut(e) {
    isHovered = false;
	}
  

</script>

<style>
  #cartButton{
    background:#ffea28;
    padding-left:1em;
    align-self: stretch;
    font-size: 0.8rem;
    transform: skewX(-15deg);
    width: 80px;
    height:80px;
    position: relative;
  }
  #unSkewed{
    background:#ffea28;
    padding-right:1em;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction:column;
    transform: skewX(15deg);
  }
  #counter{
    z-index:99999;
    position: absolute;
    top:8%;
    right:30%;
    width:20px;
    height:20px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #007dbc;
    border-radius: 50%;
    color: white;
  }
  svg{
    width: 30px;
    height: 30px;
    position: relative;
  }

</style>


<div id="cartButton" on:mouseover={handleMouseOver}  on:mouseleave={handleMouseOut}>
  <div id="unSkewed">
      <div id="counter">{count}</div>
    <svg aria-hidden="true" viewBox="0 0 32 32"><path d="M7.873 6.008A1.01 1.01 0 018 6h21a1 1 0 011 1v11a1 1 0 01-.836.986l-18 3a1 1 0 01-1.128-.72L5.318 4.281l-2.002.668a1 1 0 01-.632-1.898l3-1a1 1 0 011.28.681l.91 3.276zM8.427 8l3.296 11.864L28 17.153V8H8.427zM16 29a3 3 0 110-6 3 3 0 010 6zm9 0a3 3 0 110-6 3 3 0 010 6zm0-2a1 1 0 100-2 1 1 0 000 2zm-9 0a1 1 0 100-2 1 1 0 000 2z"></path>
      </svg>
    My Basket
  </div>
  {#if isHovered}
  <CartToolTip mouseout={handleMouseOut} mousein={handleMouseOver}/>
  {/if}
</div>

