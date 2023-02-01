import { createElement, useContext, useEffect, useRef } from 'react';

import { DataContext } from './withSDK';

import RemoteSlot from '../static-web-components/remote-slot';

export interface Props {
	id: string;
}

export const Remote: React.FC<Props> = ({ id }) => {
	const effectRan = useRef(false);
	const { data: { blocks } } = useContext(DataContext);
	const slotData = blocks.find(item => String(item.id) === id);

	useEffect(() => {
		if (!effectRan.current) {
			new RemoteSlot(slotData)
		}
		return () => {
			effectRan.current = true
		}
	}, [])

	return createElement('div', { 'remote-id': slotData.id });
};
