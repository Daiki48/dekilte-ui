<!-- <svelte:options customElement="deki-button" /> -->

<script lang="ts">
	export let fontColor: string | null = null;
	const defaultColor: string = '#fffeea';
	export let onClick: any | null = null;
</script>

<button style="color: {fontColor ?? defaultColor};" on:click={onClick}><slot /></button>

<style>
	button {
		padding: 0.8em;
		background-color: #36e871;
		cursor: pointer;
		border: none;
		border-radius: 10px;
	}

	button:hover {
		color: #fff;
		background-color: #22c056;
	}
</style>
