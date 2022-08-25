<script lang="ts">
  export let type: string = "button";
  export let msg: string;
</script>

<button
  class="py-2 px-6 rounded-sm self-start text-white bg-cy-blue duration-20 border-solid border-2 border-transparent hover:border-gray-700 hover:bg-cy-blue disabled:opacity-50 disabled:cursor-not-allowed {$$props.class}"
  {type}
  on:click
>
  {msg}
</button>
