class RemoteInput extends HTMLElement {
	constructor() {
		super();
		const template = document.createElement('template');
		template.innerHTML = RemoteInput.template();
		this.attachShadow({ mode: 'open' });
		this.shadowRoot.appendChild(document.importNode(template.content, true));
	}

	connectedCallback() {
		const { value: placeholder } = this.attributes.getNamedItem('placeholder');
		this.shadowRoot.querySelector('input').placeholder = placeholder;
	}

	static template() {
		return `
			<input />
		`;
	}
}

customElements.define('remote-input', RemoteInput);
