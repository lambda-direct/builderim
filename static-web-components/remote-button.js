// TODO: need to rework this component according to new BE contract
class RemoteButton extends HTMLElement {
	constructor() {
		super();
		// const template = document.createElement('template');
		// template.innerHTML = RemoteButton.template();
		// this.attachShadow({ mode: 'open' });
		// this.shadowRoot.appendChild(document.importNode(template.content, true));

		this.element = RemoteButton.template();
		const template = document.createElement('template');
		template.content.appendChild(this.getStyles());
		template.content.appendChild(this.element);
		this.attachShadow({ mode: 'open' });
		this.shadowRoot.appendChild(document.importNode(template.content, true));
	}

	connectedCallback() {
		const { value: text } = this.attributes.getNamedItem('text');
		this.shadowRoot.querySelector('button').textContent = text;

		const cssObjectAttr = this.attributes.getNamedItem('css');

		if (cssObjectAttr?.value) {
			this.shadowRoot.querySelector('style').replaceWith(this.getStyles(cssObjectAttr.value));
		}
	}

	getStyles(additionalStyles = '') {
		const css = 'button { border-radius: 4px; background: red; } ' + additionalStyles;

		const style = document.createElement('style');
		style.appendChild(document.createTextNode(css));

		return style
	}

	// static template() {
	// 	return `
	// 		<button></button>
	// 	`;
	// }

	static template() {
		return document.createElement('button');
	}
}

customElements.define('remote-button', RemoteButton);
