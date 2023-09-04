<div class="box">
	<div class="bg-yellow-100 circle">
		<div class="rec1" />
		<div class="rec2" />
	</div>
</div>

<style>
	.box {
		height: 300px;
		width: 300px;
		background-color: #293462;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.circle {
		height: 200px;
		width: 200px;
		border-radius: 50%;
		position: relative;
		overflow: hidden;
	}
	.rec1 {
		background-color: #fe5f55;
		height: 120px;
		width: 180px;
		position: absolute;
		right: -10px;
		bottom: -30px;
		transform: rotate(-50deg);
	}
	.rec2 {
		background-color: #fe5f55;
		height: 80px;
		width: 80px;
		position: absolute;
		left: 0;
		bottom: -20px;
		transform: rotate(-50deg);
	}
</style>
