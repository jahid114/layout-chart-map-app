<script>
	import MountainSticker from '../../lib/MountainSticker.svelte';
</script>

<svelte:head>
	<title>Layout</title>
	<meta name="description" content="Layout Page" />
</svelte:head>

<div class="container">
	<div class="blue-400" />
	<div class="rose-400" />
	<div class="cyan-400" />
	<div class="teal-400" />
	<div class="yellow-400">
		<MountainSticker />
	</div>
	<div class="emeraid-400" />
	<div class="fuchsia-400" />
</div>

<style>
	.container {
		display: grid;
		height: 100vh;
		grid-template-columns: repeat(12, 1fr);
		grid-template-rows: repeat(6, 1fr);
		grid-template-areas:
			'b-4 b-4 r-4 r-4 r-4 r-4 c-4 c-4 c-4 c-4 c-4 c-4'
			'b-4 b-4 r-4 r-4 r-4 r-4 c-4 c-4 c-4 c-4 c-4 c-4'
			'b-4 b-4 r-4 r-4 r-4 r-4 y-4 y-4 y-4 y-4 e-4 e-4'
			't-4 t-4 r-4 r-4 r-4 r-4 y-4 y-4 y-4 y-4 e-4 e-4'
			't-4 t-4 r-4 r-4 r-4 r-4 y-4 y-4 y-4 y-4 e-4 e-4'
			'f-4 f-4 f-4 f-4 f-4 f-4 y-4 y-4 y-4 y-4 e-4 e-4';
	}
	.blue-400 {
		background-color: blue;
		grid-area: b-4;
	}
	.rose-400 {
		background-color: rosybrown;
		grid-area: r-4;
	}
	.cyan-400 {
		background-color: cyan;
		grid-area: c-4;
	}
	.teal-400 {
		background-color: teal;
		grid-area: t-4;
	}
	.yellow-400 {
		background-color: lightyellow;
		grid-area: y-4;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.emeraid-400 {
		background-color: lightseagreen;
		grid-area: e-4;
	}
	.fuchsia-400 {
		background-color: fuchsia;
		grid-area: f-4;
	}

	@media only screen and (max-width: 768px) {
		.container {
			grid-template-columns: 1fr;
			grid-template-rows: repeat(7, calc(50%));
			grid-template-areas:
				'b-4'
				'r-4'
				'y-4'
				'e-4'
				'c-4'
				't-4'
				'f-4';
			overflow-y: scroll;
		}
	}
</style>
