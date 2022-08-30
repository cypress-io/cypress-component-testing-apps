<script lang="ts">
  import LoginForm from "./lib/LoginForm.svelte";
  import Welcome from "./lib/Welcome.svelte";
  let isAuthed = false;
  let errorMessage: string = "";
  let username: string;

  async function handleLogin({
    detail,
  }: CustomEvent<{ username: string; password: string }>) {
    try {
      errorMessage = "";
      const res = await fetch("/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(detail),
      });
      if (res.status === 200) {
        isAuthed = true;
        username = detail.username;
      } else {
        console.log(res.status);
        if (res.status === 401) {
          const { message } = await res.json();
          errorMessage = message;
        } else {
          errorMessage = `error during auth, status code: ${res.status}`;
        }
      }
    } catch (e) {
      console.error(e);
    }
  }

  function handleLogout() {
    isAuthed = false;
    username = "";
  }
</script>

{#if !isAuthed}
  <LoginForm {errorMessage} on:login={handleLogin} />
{:else}
  <Welcome {username} on:logout={handleLogout} />
{/if}
