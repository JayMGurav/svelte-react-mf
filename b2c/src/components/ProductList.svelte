<script>
import { query } from "svelte-apollo";
import ProductItem from "./ProductItem.svelte"
import {GET_PRODUCTS} from "../gql/queries"


const products = query(GET_PRODUCTS);

</script>

<style>
  #productList{
    margin: 2em;
    display: flex;
    gap: 2ch;
  }
</style>


{#if $products.loading}
<p>Loading...</p>
{:else if $products.error}
  Error: {$products.error.message}
{:else}
<div id="productList">
  {#each $products.data.products as product}
    <ProductItem product={product}/>
  {/each}
</div>  
{/if}

