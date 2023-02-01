<script>
	import { page } from '$app/stores';
</script>

<header>
	<nav>
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Todo</a>
			</li>
			<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<a href="/about">About</a>
			</li>
		</ul>
	</nav>
</header>

<style>
	header {
		display: flex;
		justify-content: center;
		background-color: var(--color-primary);
	}

	nav {
		display: flex;
	}

	ul {
		display: flex;
		font-weight: 700;
		letter-spacing: 0.1em;
	}

	li {
		height: 100%;
		display: inline-flex;
	}

	nav a {
		color: var(--color-text-icons);
		transition: color 0.2s linear;
		padding: 0.5rem;
	}

	a:hover {
		color: var(--color-accent);
	}

	li[aria-current='page'] a {
		text-decoration: underline;
		text-underline-offset: 0.4em;
	}
</style>
