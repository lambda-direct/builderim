class RemoteImage {
	constructor(content) {
		this.content = content;
	}

	createElement() {
		const element = document.createElement('img');
		element.src = this.content.url
		element.style.cssText = 'width: 100%; height: auto;'
		return element
	}

	getElement() {
		return this.createElement()
	}
}

export default RemoteImage
