<script>
	import { onMount } from "svelte";
	import { Router, Route } from "svelte-navigator";
	import { ApolloClient, InMemoryCache } from '@apollo/client/core';
	import { setClient } from "svelte-apollo";
	
	import { GET_B2C_CART, GET_B2B_CART } from "./gql/queries"
	import {svelteZTSStore as store} from "./store";
	import Header from "./components/Header.svelte";
	import ProductsList from "./components/ProductList.svelte"
	
 	export const client = new ApolloClient({
    uri: "http://localhost:3002/graphql",
		cache: new InMemoryCache()
   });
	setClient(client);
	
	async function getCart() {
    const b2c = await client.query({query: GET_B2C_CART})
			.then(({data}) => {
					return data.getB2CCart;
		})
    
    const b2b = await client.query({query: GET_B2B_CART})
			.then(({data}) => {
        return data.getB2BCart;
			})
		$store.initCart({
			b2c,
			b2b
		})
	};


	onMount(async () =>{
		await getCart()
	})

	export let url = "";
</script>

<main>
	<Router {url}>
		<div>
			<Route path="/" primary={false}>
				<Header/>
				<ProductsList/>
			</Route>
			<Route path="b2b" primary={false}>
				<div id="app"/>
				{#await import("b2b/ReactApp")}
				<p>loading B2B</p>
				{:catch error}
					<!-- <p>Something went wrong: {error.message}</p> -->
					<h1>500 :(</h1>
					<p><b>pls start ur react server</b></p>
					{/await}
			</Route>
		</div>
	</Router>
</main>

