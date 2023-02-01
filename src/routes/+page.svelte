<script lang="ts">
	import TextField from './TextField.svelte';

	import type { PageData } from './$types';
	import CheckBox from './CheckBox.svelte';
	import type { Todo } from '$lib/types';
	export let data: PageData;

	const onCheck = async (todo: Todo) => {
		await fetch(`/api/todo/${todo.id}/status`, {
			method: 'PUT',
			body: JSON.stringify({ newStatus: todo.status === 'new' ? 'done' : 'new' }),
			headers: {
				'content-type': 'application/json'
			}
		});
	};
</script>

<div>
	<h2>Todo Lists</h2>
	<ul>
		{#each data.todoList as todo}
			<li>
				<CheckBox
					label={todo.title}
					checked={todo.status === 'done'}
					onChange={() => onCheck(todo)}
				/>
			</li>
		{/each}
		<li>
			<form method="POST" action="/">
				<TextField name="title" /><button>追加</button>
			</form>
		</li>
	</ul>
</div>

<style>
	li {
		padding: 6px 0;
	}
</style>
