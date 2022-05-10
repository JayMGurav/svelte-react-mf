<script>
	import { onMount, onDestroy } from "svelte";
	import {svelteZTSStore as store} from "../store";

  // import {svelteZTSStore as store} from "../store";
  import { query } from "svelte-apollo";
  import CartToolTip from "./CartToolTip.svelte"
  import { GET_B2C_CART_QUANTITY, GET_B2B_CART_QUANTITY } from "../gql/queries"

  let isHovered = false;
  const b2cCartQuantity = query(GET_B2C_CART_QUANTITY);
  const b2bCartQuantity = query(GET_B2B_CART_QUANTITY);
  
  // $: cartCount = $store.b2b.length + $store.b2c.length;
  console.log({b:$store.b2b, c:$store.b2c})
  // let unsub5 = store.subscribe(state => state.b2b, (pw, pre) => {
  //   cartCount = $store.b2b.length + $store.b2c.length
  //   console.log({cartCount, pw, pre})
  // }, { fireImmediately: true })

  function handleMouseOver(e) {
    isHovered = true;
	}
  function handleMouseOut(e) {
    isHovered = false;
	}
  // onDestroy(async () =>{
	// 	unsub5()
	// })

</script>

<style>
  #cartButton{
    background:#ffea28;
    padding-left:1em;
    align-self: stretch;
    font-size: 0.8rem;
    cursor: pointer;
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


<div id="cartButton" on:mouseover={handleMouseOver} on:mouseout={handleMouseOut}>
  <div id="unSkewed">
    {#if !$b2cCartQuantity.loading || !$b2bCartQuantity.loading && !$b2cCartQuantity.error || !$b2bCartQuantity.error}
      <!-- <div id="counter">{$b2cCartQuantity?.data?.getB2CCartQuantity + $b2bCartQuantity?.data?.getB2BCartQuantity || 0}</div> -->
      <div id="counter">{$store.b2b.length + $store.b2c.length || 0}</div>
    {/if}
    <!-- <div id="counter">{count || 0}</div> -->
    <svg aria-hidden="true" viewBox="0 0 32 32"><path d="M7.873 6.008A1.01 1.01 0 018 6h21a1 1 0 011 1v11a1 1 0 01-.836.986l-18 3a1 1 0 01-1.128-.72L5.318 4.281l-2.002.668a1 1 0 01-.632-1.898l3-1a1 1 0 011.28.681l.91 3.276zM8.427 8l3.296 11.864L28 17.153V8H8.427zM16 29a3 3 0 110-6 3 3 0 010 6zm9 0a3 3 0 110-6 3 3 0 010 6zm0-2a1 1 0 100-2 1 1 0 000 2zm-9 0a1 1 0 100-2 1 1 0 000 2z"></path>
      </svg>
    My Basket
  </div>
  {#if isHovered}
  <CartToolTip />
  {/if}
</div>

