<script lang="ts">
	import { onDestroy } from 'svelte';
	let time = new Date();

	function updateTime() {
		time = new Date();
	}

	const timerId = setInterval(updateTime, 1000);
	onDestroy(() => clearInterval(timerId));
</script>

<div>
	{time.getHours()}:{time.getMinutes()}:{('0' + time.getSeconds()).substring(1)}
</div>
