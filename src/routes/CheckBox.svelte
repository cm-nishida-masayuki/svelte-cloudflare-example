<script lang="ts">
	export let name = '';
	export let label = '';
	export let checked = false;
	export let onChange: svelte.JSX.ChangeEventHandler<HTMLElement> | undefined = undefined;
</script>

<label>
	<input type="checkbox" {name} {checked} on:change={onChange} />
	<span />
	{label}
</label>

<style>
	label {
		display: flex;
		align-items: center;
		width: fit-content;
	}

	input {
		display: none;
	}

	span {
		content: '';
		width: 1em;
		height: 1em;
		border: 2px solid var(--color-primary);
		display: inline-flex;
		border-radius: 15%;
		margin-right: 0.3em;
	}

	input:checked + span:after {
		content: '';
		width: 80%;
		height: 40%;
		border-left: 2px solid var(--color-primary);
		border-bottom: 2px solid var(--color-primary);
		transform: rotate(-45deg);
	}
</style>
