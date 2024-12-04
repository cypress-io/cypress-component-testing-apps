<script lang="ts">
  let { 
    label, 
    submitted, 
    requiredMessage, 
    value = $bindable(), 
    ...restProps
  }: {
    label: string
    submitted: boolean
    requiredMessage: string
    value?: string
  } = $props()

  function handleInput(e: any) {
    value = e.target.value;
  }
</script>

<label class="flex flex-col text-lg text-gray-800 mb-2">
  {label}:
  <input
    {...restProps}
    {value}
    class="p-2 text-gray-500 focus:outline-none border-2"
    oninput={handleInput}
  />
  {#if submitted && !value}
    <span class="text-red-500 mt-2">
      {requiredMessage}
    </span>
  {/if}
</label>
