<script>
	import Header from "./components/Header.svelte";
	import ProductsList from "./components/ProductList.svelte"
	import { Router, Route, Link } from "svelte-navigator";
	import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client/core';
	import { setClient } from "svelte-apollo";

	// function createApolloClient() {
  //  const httpLink = new HttpLink({
  //    uri: "http://localhost:3002/graphql",
  //  });
  //  const cache = new InMemoryCache();
  //  const client = new ApolloClient({
  //    httpLink,
  //    cache,
  //  });
  //  return client;
 	// }

 	const client = new ApolloClient({
    uri: "http://localhost:3002/graphql",
		cache: new InMemoryCache()
   });
	setClient(client);

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

