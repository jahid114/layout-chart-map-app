<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<main>
	<ul>
		<li><a href="/layout">Layout</a></li>
		<li><a href="/chart">Chart</a></li>
		<li><a href="/map">Map</a></li>
	</ul>
</main>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
		justify-content: center;
		align-items: center;
	}

	ul li {
		width: 4rem;
		height: 2rem;
		list-style: none;
		background-color: lightcoral;
		margin-bottom: 10px;
		border: 1px solid gray;
		border-radius: 8px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	a {
		color: black;
		text-decoration: none;
	}
</style>
