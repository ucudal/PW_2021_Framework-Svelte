<script>
  import Header from "../Components/Common/Header.svelte";
  import Definitions from "../Components/Svelte/Definitions.svelte";
  import Quizz from "../Components/Svelte/Quizz.svelte";
  import WhatsSvelte from "../Components/Svelte/WhatsSvelte.svelte";

  let showWhatsSvelte = false;

  function onQuizzSuccess() {
    showWhatsSvelte = true
  }
</script>
<div class="p-5 w-3/4 ml-auto mr-auto mt-10">
  <Header title="Bienvenido al maravilloso mundo de Svelte! 🙌✨"/>
  <Definitions />
  <Quizz onCorrectAnswerSelected={onQuizzSuccess}/>
  <WhatsSvelte doShow={showWhatsSvelte} />
</div>