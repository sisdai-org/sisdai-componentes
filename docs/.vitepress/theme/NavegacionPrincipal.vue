<script setup>
import { ref } from 'vue'
import { useData } from 'vitepress'
import pkg from '../../../package.json'

// https://vitepress.dev/reference/runtime-api#usedata
const { theme, page } = useData()
const navegacionPrincipal = ref(null)
</script>

<template>
  <SisdaiNavegacionPrincipal
    :nav-informacion="`Sección: <b>${page.title}</b>`"
    ref="navegacionPrincipal"
  >
    <!--Definiendo el logo del sitio-->
    <template #identidad>
      <a
        href="https://sisdai.org"
        target="_blank"
        rel="noopener noreferrer"
        class="nav-hiperviculo-logo"
      >
        <img
          :src="`../../public/sisdai.png`"
          class="nav-logo color-invertir"
          alt="Sisdai."
        />
      </a>
    </template>
    <template #complementario>
      <div class="nav-menu-contenedor">
        <a
          class="nav-hipervinculo"
          href="https://sisdai.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <b>IR A SISDAI</b>
        </a>
        <a
          class="nav-hipervinculo"
          :href="pkg.repository.url"
          :aria-label="`Repositorio de código sisdai-componentes versión ${pkg.version}`"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span
            class="pictograma-social-github m-r-1"
            aria-hidden="true"
          ></span>
          <b> {{ `v${pkg.version}` }} </b>
        </a>
      </div>
    </template>
    <ul class="nav-menu">
      <li
        v-for="nav in theme.nav"
        :key="nav.text"
      >
        <a
          class="nav-hipervinculo"
          :class="{
            'router-link-exact-active router-link-active':
              nav.activeMatch ==
              page.relativePath.replace('index.md', '').split('/')[0],
          }"
          :href="nav.link"
          :target="nav.target"
          :rel="nav.rel"
        >
          <img
            v-if="nav.img"
            class="nav-logo"
            :src="nav.img"
            alt=""
          />
          {{ nav.text }}
        </a>
      </li>
    </ul>
  </SisdaiNavegacionPrincipal>
</template>
