<script lang="ts">
	import { DateTime } from 'luxon';
	import * as lune from 'lune';

	let moons: Date[] = [];
	let startDate = '';
	let endDate = '';

	function listLunePhases(ev: SubmitEvent) {
		ev.preventDefault();
		console.log(startDate);
		const parsedStart = DateTime.fromISO(startDate);
		const parsedEnd = DateTime.fromISO(endDate);

		moons = lune.phase_range(parsedStart.toJSDate(), parsedEnd.toJSDate(), lune.PHASE_FULL);
	}

	let form: HTMLFormElement;
</script>

<div>
	<form bind:this={form} on:submit={listLunePhases} id="form_moons">
		<label>
			Start Date:
			<input type="date" name="startDate" required bind:value={startDate} />
		</label>
		<label>
			End Date:
			<input type="date" name="endDate" required bind:value={endDate} />
		</label>

		<button type="submit">Calculate moons</button>
	</form>
	<p>Today is {new Date().toLocaleDateString('en-IN', { dateStyle: 'full' })}</p>
	<div id="result">
		{#if moons.length > 0}
			<p>There are {moons.length} full moons in the specified period</p>
			<ul>
				{#each moons as moonDate}
					<li>Full moon at {moonDate.toDateString()}</li>
				{/each}
			</ul>
		{/if}
	</div>
</div>

<style module>
	#form_moons {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
	}
</style>
