import { createElement, useEffect, useRef } from 'react';

import { IRemoteResponseBlockItem } from './withSDK';

// @ts-ignore
import RemoteSlot from 'brushhh-core';
// import RemoteSlot from '../static-web-components/remote-slot';

export interface Props {
	id: string;
	data: IRemoteResponseBlockItem | undefined
}

export const Remote: React.FC<Props> = ({ id, data }) => {
	const effectRan = useRef(false);

	useEffect(() => {
		if (!effectRan.current) {
			new RemoteSlot(data)
		}
		return () => {
			effectRan.current = true
		}
	}, [])

	return createElement('div', { 'remote-id': id });
};
