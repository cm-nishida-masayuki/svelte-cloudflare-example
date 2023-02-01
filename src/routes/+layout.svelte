<script lang="ts">
	import Header from './Header.svelte';
	import './styles.css';
</script>

<div class="app">
	<Header />
	<main>
		<slot />
	</main>
</div>

<style>
	.app {
		min-height: 100vh;
	}

	main {
		flex: 1;
		max-width: 52rem;
		margin: 0 auto;
		padding: 1rem;
		box-sizing: border-box;
		height: 100%;
	}
</style>
