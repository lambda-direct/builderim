class RemoteSlot extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		const data = this.attributes.getNamedItem('data');

		if (!data) {
			this.shadowRoot.innerHTML = `<div>[no data]</div>`;
			return;
		}

		const value = JSON.parse(data.value);
		// Create web component with name from value.type and fields from data.content
		// TODO: apply "DRY" to code below
		const elementTypeMap = {
			TEXT: 'remote-text',
			IMAGE: 'remote-image'
		};
		const component = document.createElement(elementTypeMap[value.type]);

		const fields = value.content;

		Object.entries(fields).forEach(([key, value]) => {
			component.setAttribute(key, value);
		});

		this.shadowRoot.appendChild(component);
	}
}

customElements.define('remote-slot', RemoteSlot);
