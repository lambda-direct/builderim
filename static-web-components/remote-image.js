class RemoteImage extends HTMLElement {
	constructor() {
		super();

		this.element = RemoteImage.template();
		const template = document.createElement('template');

		template.content.appendChild(this.element);
		template.content.appendChild(this.getStyles());

		this.attachShadow({ mode: 'open' });
		this.shadowRoot.appendChild(document.importNode(template.content, true));
	}

	connectedCallback() {
		const { value: url } = this.attributes.getNamedItem('url');
		this.shadowRoot.querySelector('img').src = url;
	}

	getStyles(additionalStyles = '') {
		const css = 'img { width: 100%; height: auto; } ' + additionalStyles;

		const style = document.createElement('style');
		style.appendChild(document.createTextNode(css));

		return style
	}

	static template() {
		return document.createElement('img');
	}
}

customElements.define('remote-image', RemoteImage);
