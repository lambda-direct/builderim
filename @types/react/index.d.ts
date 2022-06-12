declare global {
	namespace JSX {
		interface IntrinsicElements {
			'remote-slot': {
				data: string;
			};
		}
	}
}
