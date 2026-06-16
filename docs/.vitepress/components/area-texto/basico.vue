<script setup>
import { ref } from 'vue'
import SisdaiAreaTextoJS from '../../../../src/componentes/area-texto/SisdaiAreaTextoJS'
const areaEjemplo = ref('')
const areaEjemplo2 = ref('')
</script>
<template>
  <div>
    <SisdaiAreaTextoJS 
    etiqueta="Nombre de la etiqueta"
    ejemplo="Ejemplo"
    :es_obligatorio="false"
    :es_etiqueta_visible="true"
    v-model="areaEjemplo2"
    texto_ayuda="Texto de ayuda."
    />  
    {{ areaEjemplo2 }}
    <SisdaiAreaTexto 
      etiqueta="Nombre de la etiqueta"
      ejemplo="Ejemplo"
      :es_obligatorio="false"
      :es_etiqueta_visible="true"
      v-model="areaEjemplo"
      texto_ayuda="Texto de ayuda."
    />
    {{ areaEjemplo }}
  </div>
</template>
