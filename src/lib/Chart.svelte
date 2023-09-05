<script>
	import Chart from 'chart.js/auto';
	import { onMount } from 'svelte';
	// @ts-ignore
	export let chartData;
	// @ts-ignore
	export let chartLabels;

	onMount(() => {
		// @ts-ignore
		const ctx = document.getElementById('chart').getContext('2d');
		// @ts-ignore
		console.log(chartData, chartLabels);
		const chartId = new Chart(ctx, {
			type: 'polarArea',
			data: {
				// @ts-ignore
				labels: chartLabels,
				datasets: [
					{
						// @ts-ignore
						data: chartData,
						backgroundColor: [
							'yellow',
							'aqua',
							'pink',
							'lightgreen',
							'gold',
							'lightblue',
							'red',
							'lightcyan',
							'lightyellow',
							'green'
						]
					}
				]
			},
			options: {
				responsive: false,
				plugins: {
					legend: {
						position: 'bottom'
					}
				}
			}
		});
	});
</script>

<div class="w-full h-2/3 flex justify-center items-center pt-10">
	<canvas id="chart" class="w-4/5 m-4 mt-20 absolute top-0" />
</div>
