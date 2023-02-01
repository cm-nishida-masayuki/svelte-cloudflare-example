<script lang="ts">
	export let name = '';
</script>

<input type="text" placeholder="タスクを追加" {name} />

<style>
	input {
		border: 0;
		border-bottom: 1px solid #ccc;
		background: transparent;
		outline: 0;
		padding: 7px 0px;
		transition: border-color 0.2s;
	}

	input:focus {
		border-bottom: 2px solid var(--color-primary);
	}
</style>
