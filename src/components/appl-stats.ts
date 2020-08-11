import {LitElement, html, customElement, property, css} from 'lit-element';

@customElement('appl-stats')
export class Stats extends LitElement {

  static styles = css`
    :host {
      position: fixed;
      // top: 500px;
    }
  `;

  /**
   * The number of color divs that were added so far.
   */
  @property({type: Number})
  addedCount = 0;

  /**
   * The number of color divs that were removed so far.
   */
  @property({type: Number})
  removedCount = 0;

  // static get properties() {
  //   return {
  //     remainingCount: {type: Number},
  //   };
  // }

  render() {
    return html`
      <p>Added: ${this.addedCount}</p>
      <p>Removed: ${this.removedCount}</p>
      <p>Remaining: ${this.addedCount - this.removedCount}</p>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'appl-stats': Stats;
  }
}