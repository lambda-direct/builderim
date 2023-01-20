import { createElement, useContext } from 'react';

import { DataContext } from './withSDK';

export interface Props {
	id: string;
}

export const Remote: React.FC<Props> = ({ id }) => {
	const { data } = useContext(DataContext);

	return createElement('remote-slot', { data: JSON.stringify(data[id]) });
};
