// This file is part of sisdai-componentes.
//
//   sisdai-componentes is free software: you can redistribute it and/or modify
//   it under the terms of the GNU Lesser General Public License as published by the
//   Free Software Foundation, either version 3 of the License, or
//   (at your option) any later version.
//
//   sisdai-componentes is distributed in the hope that it will be useful,
//   but WITHOUT ANY WARRANTY; without even the implied warranty of
//   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Lesser General
//   Public License for more details.
//
//   You should have received a copy of the GNU Lesser General Public License along
//   with sisdai-componentes. If not, see <https://www.gnu.org/licenses/>.

import { h } from "vue";

// https://vuejs.org/guide/extras/render-function.html
const SisdaiAreaTextoJS = {
  name: "SisdaiAreaTextoJS",
  props: {
    etiqueta: {
      type: String,
      required: true,
    },
    ejemplo: {
      type: String,
      required: false,
    },
    texto_ayuda: {
      type: String,
      default: "",
    },
    texto_error: {
      type: String,
      default: "",
    },
    modelValue: {
      type: String,
      default: "",
    },
    es_etiqueta_visible: {
      type: Boolean,
      required: true,
      default: true,
    },
    es_obligatorio: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  emits: ["update:modelValue"],
  setup(props, { /*slots, attrs,*/ emit }) {
    const identificador = idAleatorio();

    function idAleatorio() {
      return "campo-" + Math.random().toString(36).substring(2);
    }

    // type, props, children
    const vnode = h("div", [
      h(
        "label",
        {
          for: identificador,
          class: props.es_etiqueta_visible ? "" : "a11y-solo-lectura",
        },
        [
          props.etiqueta,
          h("span", { class: "formulario-obligatoriedad" }, [
            props.es_obligatorio ? "(Obligatorio)" : "",
          ]),
        ],
      ),
      h(
        "textarea",
        {
          name: identificador,
          id: identificador,
          placeholder: props.ejemplo,
          required: props.es_obligatorio,
          ariaRequired: props.es_obligatorio,
          value: props.modelValue,
          onInput: (event) => emit("update:modelValue", event.target.value),
        },
        props.modelValue,
      ),
      [
        props.texto_ayuda || props.es_obligatorio || props.texto_error
          ? h(
              "p",
              {
                ariaLive: "polite",
                class: "formulario-ayuda",
                role: "status",
              },
              props.texto_ayuda,
              props.texto_error,
            )
          : "",
      ],
    ]);

    // return the render function
    return () => vnode;
  },
};

export default SisdaiAreaTextoJS;
