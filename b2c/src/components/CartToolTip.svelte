<script>
  import CartItem from "./CartItem.svelte"
	import {svelteZTSStore as store} from "../store";
</script>

<style>
  #tooltip{
    position: absolute;
    top:120%;
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
</style>

<div id="tooltip">
  <div id="toolTipHeader">
    My Basket
  </div>
  <div id="basket">
    <div>
      <div style="text-align: center; margin: 0.5rem 0;">
        <strong>B2C cart</strong>
      </div>
        <div style="padding:0.5rem;">
          {#each $store.b2c as item}
          <CartItem product={item.product} quantity={item.quantity}/>
          {/each}
        </div>
    </div>
    <hr/>
    <div>
      <div style="text-align: center; margin: 0.5rem 0;">
        <strong>B2B cart</strong>
      </div>
     <div id="b2bBucketLists"></div>
      <div style="padding:0.5rem;">
        {#each $store.b2b as item}
        <CartItem product={item.product} quantity={item.quantity}/>
        {/each}
      </div>
      </div>
  </div>
</div>