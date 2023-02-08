class RemoteText extends HTMLElement {
	constructor() {
		super();
		this.element = this.createElement();

		this.attachShadow({ mode: 'open' });
		this.shadowRoot.appendChild(this.element);
	}

	connectedCallback() {
		this.setData();
		this.setStyles();
		this.setAttributes();
		this.setContent();
	}

	setData() {
		this.data = JSON.parse(this.attributes.getNamedItem('data').value);
	}

	setStyles() {
		if (Object.keys(this.data.styles).length) {
			Object.entries(this.data.styles).forEach(([key, value]) => {
				this.element.style[key] = value;
			})
		}
	}

	setAttributes() {
		if (Object.keys(this.data.attributes).length) {
			Object.entries(this.data.attributes).forEach(([key, value]) => {
				this.element.setAttribute(key, value);
			})
		}
	}

	setContent() {
		this.element.textContent = this.data.content.text
	}

	createElement() {
		return document.createElement('span');
	}
}

customElements.define('remote-text', RemoteText);
