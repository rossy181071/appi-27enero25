import { LitElement, css, html } from 'lit'
import { Child1Element } from './child-1-element'
import { CharacterGetterElement } from './character-getter-element'
import { CharacterCardElement } from './character-card-element'

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class MyElement extends LitElement {
  static get properties() {
    return {
/**
 * The number of time the button has been clicked.
 */
count: { type: Number },
    }
  }


  constructor() {
    super()
    this.count = 0
  }
  myEvent1Handler() {
    this.count++
  }  

  
  firstUpdated() {
   let that = this
  
 setInterval(() =>{
  that.shadowRoot.querySelector("#getter").getNewCharacter()
  }, 3000)
}

  newCharacterEventHandler (e) {
    const character = e.detail
        
    this.shadowRoot.querySelector("#card-1").name = character.Name
    this.shadowRoot.querySelector("#card-1").image= character.image
    this.shadowRoot.querySelector("#card-1").species = character.species
    this.shadowRoot.querySelector("#card-1").status = character.status
  }

  render() {
    return html`
    <div class="card">
      <h1>
        count is ${this.count}
      </h1>
      <child-1-element @my-event-1="${this.myEvent1Handler}"></child-1-element>
      <character-getter-element id="getter" @new-character-event="${this.newCharacterEventHandler}"></character-getter-element>
      <character-card-element id="card-1"></character-card-element>
      <h1 id="character-name"></h1>
      <img id="character-img">
      <h3 id="character-species"></h3>
      <h3 id="character-status"></h3>

    </div>  
    `
  }

 
  static get styles() {
    return css`
      :host {
        max-width: 1280px;
        margin: 0 auto;
        padding: 2rem;
        text-align: center;
      }

      .logo {
        height: 6em;
        padding: 1.5em;
        will-change: filter;
        transition: filter 300ms;
      }
      .logo:hover {
        filter: drop-shadow(0 0 2em #646cffaa);
      }
      .logo.lit:hover {
        filter: drop-shadow(0 0 2em #325cffaa);
      }

      .card {
        padding: 2em;
        
      }

      .read-the-docs {
        color: #888;
      }

      a {
        font-weight: 500;
        color: #646cff;
        text-decoration: inherit;
      }
      a:hover {
        color: #535bf2;
      }

      ::slotted(h1) {
        font-size: 3.2em;
        line-height: 1.1;
      }

      button {
        border-radius: 8px;
        border: 1px solid transparent;
        padding: 0.6em 1.2em;
        font-size: 1em;
        font-weight: 500;
        font-family: inherit;
        background-color: #1a1a1a;
        cursor: pointer;
        transition: border-color 0.25s;
      }
      button:hover {
        border-color: #646cff;
      }
      button:focus,
      button:focus-visible {
        outline: 4px auto -webkit-focus-ring-color;
      }

      @media (prefers-color-scheme: light) {
        a:hover {
          color: #747bff;
        }
        button {
          background-color: #f9f9f9;
        }
      }

      img {
        width: 50vw;
      }
    `
  }
}

window.customElements.define('my-element', MyElement)
