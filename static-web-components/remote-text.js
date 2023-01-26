class RemoteText extends HTMLElement {
	constructor() {
		super();
		this.element = RemoteText.template();

		const template = document.createElement('template');
		template.content.appendChild(this.element);

		this.attachShadow({ mode: 'open' });
		this.shadowRoot.appendChild(document.importNode(template.content, true));
	}

	connectedCallback() {
		console.log('connectedCallback RemoteText')
		const { value: text } = this.attributes.getNamedItem('text');
		this.shadowRoot.querySelector('span').textContent = text;
	}

	static template() {
		return document.createElement('span');
	}
}

customElements.define('remote-text', RemoteText);
