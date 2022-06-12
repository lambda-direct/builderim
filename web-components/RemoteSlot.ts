export class RemoteSlot extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.shadowRoot!.innerHTML = `<div>${this.attributes.getNamedItem('data')?.value}</div>`;
	}
}

customElements.define('remote-slot', RemoteSlot);
