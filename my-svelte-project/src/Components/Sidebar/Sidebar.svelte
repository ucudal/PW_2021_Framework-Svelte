<script>
  import { Link } from "svelte-navigator";

  import GiCardboardBox from "svelte-icons/gi/GiCardboardBox.svelte";
  import FaHammer from "svelte-icons/fa/FaHammer.svelte";
  import SvelteIcon from "./Icons/SvelteIcon.svelte";
  import GiBookCover from "svelte-icons/gi/GiBookCover.svelte";
  import GiUnbalanced from "svelte-icons/gi/GiUnbalanced.svelte";
</script>

<div class="sidebar">
  <Link to="/">
    <div class="sidebar__icon group">
      <SvelteIcon />
      <span class="sidebar__icon__tooltip group-hover:scale-100"> Svelte </span>
    </div>
  </Link>
  <Link to="/features">
    <div class="sidebar__icon group">
      <GiCardboardBox />
      <span class="sidebar__icon__tooltip group-hover:scale-100"> Funcionalidades out-of-the-box </span>
    </div>
  </Link>
  <Link to="/community">
    <div class="sidebar__icon group">
      <FaHammer />
      <span class="sidebar__icon__tooltip group-hover:scale-100"> Nivel de mantenimiento y comunidad </span>
    </div>
  </Link>
  <Link to="/learning">
    <div class="sidebar__icon group">
      <GiBookCover />
      <span class="sidebar__icon__tooltip group-hover:scale-100"> Curva de aprendizaje </span>
    </div>
  </Link>
  <Link to="/compare">
    <div class="sidebar__icon group">
      <GiUnbalanced />
      <span class="sidebar__icon__tooltip group-hover:scale-100"> Comparativa con otros Frameworks </span>
    </div>
  </Link>
</div>
