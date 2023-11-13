<script>
	import Map from 'ol/Map.js';
	import View from 'ol/View.js';
	import VectorSource from 'ol/source/Vector.js';
	import GeoJSON from 'ol/format/GeoJSON.js';
	import VectorLayer from 'ol/layer/Vector.js';
	import OSM from 'ol/source/OSM.js';
	import TileLayer from 'ol/layer/Tile.js';
	import { onMount } from 'svelte';
	import { Stroke, Style } from 'ol/style.js';
	import 'ol/ol.css';

	const mapDesignUrl = import.meta.glob('/src/routes/map/countries.geojson', {
		eager: true,
		as: 'url'
	});

	onMount(async () => {
		const map = new Map({
			layers: [new TileLayer({ source: new OSM() })],
			view: new View({
				center: [0, 0],
				zoom: 2
			}),
			target: 'map'
		});

		map.addLayer(
			new VectorLayer({
				source: new VectorSource({
					format: new GeoJSON(),
					url: mapDesignUrl['/src/routes/map/countries.geojson']
				}),
				style: new Style({
					stroke: new Stroke({
						color: 'rgba(0, 106, 78, 0.75)'
					})
				})
			})
		);
	});
</script>

<svelte:head>
	<title>Map</title>
	<meta name="description" content="Map Page" />
</svelte:head>

<div>
	<div id="map" class="w-full h-screen" />
</div>
