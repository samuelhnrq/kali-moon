<script lang="ts">
	import Scaffolding from '../lib/scaffolding.svelte';
	import Clock from './clock.svelte';
	import ky from 'ky';
	import Moons from './moons.svelte';

	let showClock = true;
	let currentNumber = '';

	async function fetchNumber() {
		const resp = await ky('/api/today').text();
		currentNumber = resp;
	}
</script>

<main>
	<Scaffolding>
		<button on:click={() => (showClock = !showClock)} class="bg-cyan-500 hover:bg-cyan-600">
			Toggle the clock
		</button>
		{#if showClock}
			<p>Time is</p>
			<Clock />
		{/if}
		<Moons />
		<button type="button" on:click={fetchNumber}>Fetch number</button>
		{#if currentNumber}
			<p>Random number is {currentNumber}</p>
		{/if}
	</Scaffolding>
</main>
