class RemoteButton extends HTMLElement {
	constructor() {
		super();
		const template = document.createElement('template');
		template.innerHTML = RemoteButton.template();
		this.attachShadow({ mode: 'open' });
		this.shadowRoot.appendChild(document.importNode(template.content, true));
	}

	connectedCallback() {
		const { value: text } = this.attributes.getNamedItem('text');
		this.shadowRoot.querySelector('button').innerText = text;
	}

	static template() {
		return `
			<button></button>
		`;
	}
}

customElements.define('remote-button', RemoteButton);
