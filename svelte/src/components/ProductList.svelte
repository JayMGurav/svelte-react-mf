<script>
 import { gql } from '@apollo/client/core';
 import { query } from "svelte-apollo";
import ProductItem from "./ProductItem.svelte"


 const GET_PRODUCTS = gql`
  query GetProducts{
    products {
      id
      name
      brand
      price
      img
  }
}`;

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
  Loading...
{:else if $products.error}
  Error: {$products.error.message}
{:else}
<div id="productList">
  {#each $products.data.products as product}
    <ProductItem product={product}/>
  {/each}
</div>  
{/if}

