<script lang="ts">
  export let label: string;
  export let submitted: boolean;
  export let requiredMessage: string;
  export let value: string;

  function handleInput(e: any) {
    value = e.target.value;
  }
</script>

<label class="flex flex-col text-lg text-gray-800 mb-2">
  {label}:
  <input
    {...$$restProps}
    {value}
    class="p-2 text-gray-500 focus:outline-none border-2"
    on:input={handleInput}
  />
  {#if submitted && !value}
    <span class="text-red-500 mt-2">
      {requiredMessage}
    </span>
  {/if}
</label>
