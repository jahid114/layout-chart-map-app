<script>
	import Chart from '$lib/Chart.svelte';
	export let data;
	let temp = [...data.countries];
	let chartData = [];
	let chartLabels = [];
	temp.sort((c1, c2) => {
		if (c1.population < c2.population) {
			return 1;
		} else if (c1.population > c2.population) {
			return -1;
		}
		return 0;
	});
	for (let i = 0; i < 10; i++) {
		chartData.push(temp[i].population);
		chartLabels.push(temp[i].name.common);
	}
</script>

<svelte:head>
	<title>Chart</title>
	<meta name="description" content="Chart Page" />
</svelte:head>
<div class="md:p-10 p-2 h-screen w-full relative">
	<div class="md:w-1/3 w-full md:right-0 md:absolute m-1 md:ml-3 p-3 mt-3 bg-gray-50 h-3/4">
		<p class="text-md p-3 font-sans font-bold">Countries</p>
		<hr />
		<div><Chart {chartData} {chartLabels} /></div>
	</div>
	<div class="overflow-auto rounded-lg m-3">
		<table class="md:w-2/3 w-full font-sans border border-gray-200">
			<thead class=" bg-gray-50 border-b-2 border-gray-400">
				<tr>
					<th class="p-3 text-sm font-bold tracking-wide text-center">Flag</th>
					<th class="w-28 p-3 text-sm font-bold tracking-wide text-center">Name</th>
					<th class="p-3 text-sm font-bold tracking-wide text-center">Population</th>
					<th class="p-3 text-sm font-bold tracking-wide text-center">CIOC</th>
					<th class="p-3 text-sm font-bold tracking-wide text-center">UN Member Status</th>
					<th class="p-3 text-sm font-bold tracking-wide text-center">Currencies</th>
					<th class="w-48 p-5 text-sm font-bold tracking-wide text-center">Languages</th>
				</tr>
			</thead>
			<tbody class="divide-y divide-gray-200 bg-gray-100">
				{#each data.countries as country}
					<tr>
						<td class="p-3 flex justify-center items-center"
							><img class=" h-12 w-20" src={country.flags.svg} alt={country.name.common} /></td
						>
						<td class=" w-28 p-3 text-sm font-medium text-gray-700 text-center"
							>{country.name.common}</td
						>
						<td class="p-3 text-sm font-medium text-gray-700 text-center">{country.population}</td>
						<td class="p-3 text-sm font-medium text-gray-700 text-center"
							>{country.cioc ? country.cioc : 'N/A'}</td
						>
						<td class="p-3 text-sm font-medium text-center">
							{#if country.unMember}
								<span
									class="p-1.5 text-xs font-medium uppercase tracking-wider bg-gray-500 text-gray-200 rounded-md bg-opacity-50"
									>YES</span
								>
							{:else}
								<span
									class="p-1.5 text-xs font-medium uppercase tracking-wider bg-gray-900 text-gray-200 rounded-md bg-opacity-50"
									>No</span
								>
							{/if}
						</td>
						<td class="p-3 text-sm font-medium text-gray-700 text-center"
							>{#if country.currencies}<span
									>{Object.keys(country.currencies).join(' , ')}
								</span>{:else}N/A{/if}</td
						>
						<td class=" w-48 p-5 text-sm font-medium text-gray-700 text-center"
							>{#if country.languages}<span
									>{Object.values(country.languages).join(' , ')}
								</span>{:else}N/A{/if}</td
						>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>
