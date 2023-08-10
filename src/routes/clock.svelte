<script lang="ts">
	import { onDestroy } from 'svelte';
	import * as lune from 'lune';
	function listLunePhases() {
		const phase_list = lune.phase_range(
			new Date('2014-01-01T00:00:00.000Z'),
			new Date('2014-03-31T23:59:59.999Z'),
			lune.PHASE_FULL
		);
		console.log(phase_list);
	}

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
