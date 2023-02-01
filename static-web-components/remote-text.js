class RemoteText {
	constructor(content) {
		this.content = content;
	}

	createElement() {
		const element = document.createTextNode(this.content.text);
		return document.importNode(element, true)
	}

	getElement() {
		return this.createElement()
	}
}

export default RemoteText
