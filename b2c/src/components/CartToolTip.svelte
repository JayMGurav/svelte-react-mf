<script>
  //  import { onMount } from "svelte";
  import CartItem from "./CartItem.svelte"
	import {svelteZTSStore as store} from "../store";
  // import loader from "b2b/ReactApp/loader"
  // import cart from "b2b/ReactApp/B2BCart"
  export let mouseout;
  export let mousein;

  // onMount(function() {
  //   cart();
  // });

</script>

<style>
  #tooltip{
    position: absolute;
    top:100%;
    right:-30%;
    z-index: 9999999;
    width: max-content;
    transform: skewX(15deg);
    box-shadow: 0 0 0.75rem 0.15rem rgba(104, 104, 104, 0.5);
    background-color: #fff;
  }
  #toolTipHeader{
    background-color: #ffea28;
    text-align:center;
    padding:0.5em;
    font-size: 20px;
  }
  #basket{
    width: 400px;
  }
  #empty{
    width: 400px;
    text-align: center;
    margin: 3em 0;
  }
</style>

<div id="tooltip" on:mouseover={mousein} on:mouseleave={mouseout}>
  <div id="toolTipHeader">
    My Basket
  </div>
  {#if $store.b2b.length <= 0 && $store.b2c.length <= 0}
    <div id="empty"><h3>Empty cart!</h3></div>
  {:else}
  <div id="basket">
    {#if $store.b2c.length > 0}
    <div>
      <div style="text-align: center; margin: 0.5rem 0;">
        <strong>B2C cart</strong>
      </div>
        <div style="padding:0.5rem;">
          {#each $store.b2c as item}
          <CartItem product={item.product} quantity={item.quantity} cartType="b2c"/>
          {/each}
        </div>
    </div>
    {/if}
    {#if $store.b2b.length > 0}
    <hr/>
    <div>
      <div style="text-align: center; margin: 0.5rem 0;">
        <strong>B2B cart</strong>
      </div>
      <div style="padding:0.5rem;">
        {#each $store.b2b as item}
        <CartItem product={item.product} quantity={item.quantity} cartType="b2b"/>
        {/each}
      </div> 
  <!-- {#await import("b2b/ReactApp/B2BCart")}
				<p>loading B2B Cart</p>
				{:catch error}
					<p>Something went wrong: {error.message}</p>
			 <h1>500 :(</h1>
					<p><b>pls start ur react server</b></p> 
			{/await} -->
    </div>
    {/if}
  </div>
  {/if}
</div>