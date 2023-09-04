<script>
	import MountainSticker from '../../lib/MountainSticker.svelte';
</script>

<svelte:head>
	<title>Layout</title>
	<meta name="description" content="Layout Page" />
</svelte:head>

<div class="container1">
	<div class="bg-blue-400 blue-400" />
	<div class="bg-rose-100 rose-400" />
	<div class="bg-cyan-400 cyan-400" />
	<div class="bg-teal-400 teal-400" />
	<div class="bg-yellow-100 yellow-400">
		<MountainSticker />
	</div>
	<div class="bg-emerald-400 emeraid-400" />
	<div class="bg-fuchsia-400 fuchsia-400" />
</div>

<style>
	.container1 {
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
		grid-area: b-4;
	}
	.rose-400 {
		grid-area: r-4;
	}
	.cyan-400 {
		grid-area: c-4;
	}
	.teal-400 {
		grid-area: t-4;
	}
	.yellow-400 {
		grid-area: y-4;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.emeraid-400 {
		grid-area: e-4;
	}
	.fuchsia-400 {
		grid-area: f-4;
	}

	@media only screen and (max-width: 768px) {
		.container1 {
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
