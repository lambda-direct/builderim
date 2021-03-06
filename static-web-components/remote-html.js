class RemoteHTML extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		const { value: content } = this.attributes.getNamedItem('content');
		this.shadowRoot.innerHTML = content;
	}
}

customElements.define('remote-html', RemoteHTML);
