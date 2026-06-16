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

class SisdaiAreaTextoJS extends HTMLElement {
  constructor() {
    super();
    this._id = 'campo-js-' + Math.random().toString(36).substring(2);
  }

  static get observedAttributes() {
    return ['etiqueta', 'ejemplo', 'texto-ayuda', 'texto-error', 'model-value', 'es-etiqueta-visible', 'es-obligatorio'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      if (name === 'model-value') {
        const textarea = this.querySelector('textarea');
        if (textarea && textarea.value !== newValue) {
          textarea.value = newValue;
        }
      } else {
        this.render();
      }
    }
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const etiqueta = this.getAttribute('etiqueta') || '';
    const ejemplo = this.getAttribute('ejemplo') || '';
    const textoAyuda = this.getAttribute('texto-ayuda') || '';
    const textoError = this.getAttribute('texto-error') || '';
    const modelValue = this.getAttribute('model-value') || '';
    const esEtiquetaVisible = this.getAttribute('es-etiqueta-visible') !== 'false';
    const esObligatorio = this.getAttribute('es-obligatorio') === 'true';

    this.innerHTML = `
      <div>
        <label for="${this._id}" class="${esEtiquetaVisible ? '' : 'a11y-solo-lectura'}">
          ${etiqueta}
          ${esObligatorio ? '<span class="formulario-obligatoriedad">(Obligatorio)</span>' : ''}
        </label>
        <textarea
          name="${this._id}"
          id="${this._id}"
          placeholder="${ejemplo}"
          ${esObligatorio ? 'required aria-required="true"' : ''}
          ${modelValue ? `value="${modelValue}"` : ''}
        ></textarea>
        ${(textoAyuda || esObligatorio || textoError) ? `
          <p aria-live="polite" class="formulario-ayuda" role="status">
            ${textoError} ${textoAyuda}
          </p>
        ` : ''}
      </div>
    `;

    const textarea = this.querySelector('textarea');
    if (textarea) {
      textarea.addEventListener('input', (e) => {
        this.setAttribute('model-value', e.target.value);
        this.dispatchEvent(new CustomEvent('input', {
          detail: e.target.value,
          bubbles: true
        }));
      });
    }
  }
}

if (!customElements.get('sisdai-area-texto-js')) {
  customElements.define('sisdai-area-texto-js', SisdaiAreaTextoJS);
}

export default SisdaiAreaTextoJS;
