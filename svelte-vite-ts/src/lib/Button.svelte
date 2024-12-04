<script lang="ts">
  import type { HTMLButtonAttributes } from "svelte/elements";

  const { 
    msg, 
    type = 'button',
    onClick = () => undefined,
    className = "" 
  }: {
    type?: HTMLButtonAttributes["type"]
    className?: string
    msg: string
    onClick?: () => void
  } = $props()
</script>

<button
  class="py-2 px-6 rounded-sm self-start text-white bg-cy-blue duration-20 border-solid border-2 border-transparent hover:border-gray-700 hover:bg-cy-blue disabled:opacity-50 disabled:cursor-not-allowed {className}"
  {type}
  onclick={onClick}
>
  {msg}
</button>
