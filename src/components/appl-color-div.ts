import {LitElement, html, customElement, property, internalProperty, css} from 'lit-element';
import { styleMap } from 'lit-html/directives/style-map';
import {randomColor, getRandomIntInclusive} from '../utils/utils';

@customElement('appl-color-div')
export class ColorDiv extends LitElement {

  static styles = css`
    :host {
      position: absolute;
    }

    div {
      border-radius: 50%;
    }
  `;

  /**
   * The 
   */
  @property({type: String})
  color = 'red';

  /**
   * The 
   */
  @property({type: Object})
  globalSettings = { };

  @internalProperty()
  protected size = 100;

  // @internalProperty()
  // protected left = 100;

  // @internalProperty()
  // protected top = 100;

  constructor() {
    super();
    this.color = randomColor();

  }

  connectedCallback() {
    super.connectedCallback();

    const size = this.globalSettings.colorDiv.size;
    this.size = Array.isArray(size) ? getRandomIntInclusive(size[0], size[1]) : size;

    const parent = this.parentElement;
    if (parent) {
      this.style.left = `${getRandomIntInclusive(0, parent.clientWidth - this.size)}px`;
      this.style.top = `${getRandomIntInclusive(0, parent.clientHeight - this.size)}px`;
    }

    this.addEventListener('click', this.handleClick);

    // this.addEventListener('mousemove', this.handleMouseMove);
    this.addEventListener('mouseenter', this.handleMouseEnter);
    // this.addEventListener('mouseover', this.handleMouseOver);
  }

  render() {
    return html`
      <div style=${styleMap({
        backgroundColor: this.color,
        width: `${this.size}px`,
        height: `${this.size}px`,
      })}></div>
    `;
  }

  private handleClick() {
    console.log('click');
    if (this.globalSettings.removeOn.click) {
      console.log(this);
      this.doRemove();
    }
  }

  private handleMouseMove(e: MouseEvent) {
    console.log(e);
    e.stopImmediatePropagation();
    e.preventDefault();
    console.log('mousemove - stop imm - pre');
    if (this.globalSettings.removeOn.mouseEnter) {
      this.doRemove();
    }
  }

  private handleMouseEnter(e: MouseEvent) {
    // console.log(e);
    // e.stopPropagation();
    // console.log('mouseenter');
    if (this.globalSettings.removeOn.mouseEnter) {
      this.doRemove();
    }
  }

  private handleMouseOver(e: MouseEvent) {
    // console.log(e);
    // e.stopPropagation();
    console.log('mouseover');
    if (this.globalSettings.removeOn.mouseEnter) {
      this.doRemove();
    }
  }

  private doRemove() {
    const click = new Event('removed');
    this.dispatchEvent(click);
    this.remove();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'appl-color-div': ColorDiv;
  }
}