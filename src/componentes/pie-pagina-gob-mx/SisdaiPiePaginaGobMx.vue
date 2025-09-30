<!--This file is part of sisdai-componentes.-->

<!--sisdai-componentes is free software: you can redistribute it and/or modify-->
<!--it under the terms of the GNU Lesser General Public License as published by the-->
<!--Free Software Foundation, either version 3 of the License, or-->
<!--(at your option) any later version.-->

<!--sisdai-componentes is distributed in the hope that it will be useful,-->
<!--but WITHOUT ANY WARRANTY; without even the implied warranty of-->
<!--MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Lesser General-->
<!--Public License for more details.-->

<!--You should have received a copy of the GNU Lesser General Public License along-->
<!--with sisdai-componentes. If not, see <https://www.gnu.org/licenses/>.-->

<template>
  <div
    class="contenedor piepagina-gobmx"
    aria-label="Gobierno de México"
  >
    <div class="flex flex-wrap">
      <div class="columna-8 columna-4-esc">
        <img
          class="pie-logo"
          src="https://cdn.conahcyt.mx/sisdai-archivos/gobmx-2024.svg"
          alt="Gobierno de México"
          width="207px"
          height="75px"
        />
      </div>

      <div class="columna-8 columna-4-esc">
        <p class="piepagina-titulo">Enlaces</p>
        <ul>
          <li>
            <a
              href="https://participa.gob.mx"
              target="_blank"
              rel="noopener noreferrer"
              class="hipervinculo-gobmx"
              title="Enlace abre en ventana nueva"
              >Participa</a
            >
          </li>
          <li>
            <a
              href="http://www.ordenjuridico.gob.mx"
              target="_blank"
              rel="noopener noreferrer"
              class="hipervinculo-gobmx"
              title="Enlace abre en ventana nueva"
              >Marco Jurídico</a
            >
          </li>
          <li>
            <a
              href="https://consultapublicamx.inai.org.mx/vut-web/"
              target="_blank"
              rel="noopener noreferrer"
              class="hipervinculo-gobmx"
              title="Enlace abre en ventana nueva"
              >Plataforma Nacional de Transparencia</a
            >
          </li>
          <li>
            <a
              href="https://transparencia.gob.mx"
              target="_blank"
              rel="noopener noreferrer"
              class="hipervinculo-gobmx"
              title="Enlace abre en ventana nueva"
              >Transparencia para el pueblo</a
            >
          </li>
          <li>
            <a
              href="https://alertadores.funcionpublica.gob.mx/"
              target="_blank"
              rel="noopener noreferrer"
              class="hipervinculo-gobmx"
              title="Enlace abre en ventana nueva"
              >Alerta</a
            >
          </li>
        </ul>
      </div>

      <div class="columna-8 columna-4-esc">
        <p class="piepagina-titulo">¿Qué es gob.mx?</p>

        <p>
          Es el portal único de trámites, información y participación ciudadana.
          <a
            href="https://www.gob.mx/que-es-gobmx"
            class="hipervinculo-gobmx hipervinculo-subrayado"
            target="_blank"
            rel="noopener noreferrer"
            >Leer más</a
          >
        </p>

        <ul>
          <li>
            <a
              href="https://datos.gob.mx"
              class="hipervinculo-gobmx"
              target="_blank"
              rel="noopener noreferrer"
              >Portal de datos abiertos</a
            >
          </li>
          <li>
            <a
              href="https://www.gob.mx/accesibilidad"
              class="hipervinculo-gobmx"
              target="_blank"
              rel="noopener noreferrer"
              >Declaración de accesibilidad</a
            >
          </li>
          <li>
            <a
              href="https://www.gob.mx/terminos"
              class="hipervinculo-gobmx"
              target="_blank"
              rel="noopener noreferrer"
              >Términos y Condiciones</a
            >
          </li>
        </ul>
      </div>

      <div class="columna-8 columna-4-esc">
        <p class="piepagina-titulo">
          <a
            class="hipervinculo-gobmx hipervinculo-subrayado"
            href="https://sidec.buengobierno.gob.mx/#!/"
            target="_blank"
            rel="noopener noreferrer"
            >Denuncia contra servidores públicos</a
          >
        </p>

        <p class="piepagina-titulo">
          Síguenos en
          <span class="a11y-solo-lectura">nuestras redes sociales:</span>
        </p>

        <ul class="piepagina-social">
          <li>
            <a
              lang="en"
              href="https://www.facebook.com/gobmexico"
              hreflang="es"
              class="hipervinculo-gobmx"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span
                class="pictograma-social-facebook"
                aria-hidden="true"
              ></span>
              <span class="a11y-solo-lectura">feisbuk</span>
            </a>
          </li>
          <li>
            <a
              lang="en"
              hreflang="es"
              href="https://x.com/GobiernoMX"
              class="hipervinculo-gobmx"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span
                class="pictograma-social-x"
                aria-hidden="true"
              ></span>
              <span class="a11y-solo-lectura">x.</span>
            </a>
          </li>
          <li>
            <a
              lang="en"
              hreflang="es"
              href="https://www.instagram.com/gobmexico"
              aria-label="instagram"
              class="hipervinculo-gobmx"
            >
              <span
                aria-hidden="true"
                class="pictograma-social-instagram"
              />
            </a>
          </li>
          <li>
            <a
              lang="en"
              hreflang="es"
              href="https://www.youtube.com/@gobiernodemexico"
              aria-label="youtube"
              class="hipervinculo-gobmx"
            >
              <span
                aria-hidden="true"
                class="pictograma-social-youtube"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
const cdn = import.meta.env.VITE_CDN_ARCHIVOS
</script>
