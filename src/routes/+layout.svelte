<script>
	import '../app.postcss';
	import './styles.css';
</script>

<div class="appStyle">
	<slot />
</div>

<style>
	.appStyle {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		width: 100%;
	}
</style>
