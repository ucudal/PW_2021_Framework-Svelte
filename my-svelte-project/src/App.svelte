<script lang="ts">
  import Sidebar from "./Components/Sidebar/Sidebar.svelte";
  import { Router, Route } from "svelte-navigator";
  import Svelte from "./Pages/Svelte.svelte";
  import Community from "./Pages/Community.svelte";
  import Learning from "./Pages/Learning.svelte";
  import Compare from "./Pages/Compare.svelte";
  import Features from "./Pages/Features.svelte";
</script>

<main>
  <Router>
    <Sidebar />
    <div class="ml-16">
      <Route path="/" component={Svelte} />
      <Route path="/features" component={Features} />
      <Route path="/community" component={Community} />
      <Route path="/learning" component={Learning} />
      <Route path="/compare" component={Compare} />
    </div>
  </Router>
</main>
