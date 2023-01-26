import { createElement, useContext } from 'react';

import { DataContext } from './withSDK';

export interface Props {
	id: string;
}

export const Remote: React.FC<Props> = ({ id }) => {
	const { data: { blocks } } = useContext(DataContext);
	const slotData = blocks.find(item => String(item.id) === id);

	return createElement('remote-slot', { data: JSON.stringify(slotData) });
};
