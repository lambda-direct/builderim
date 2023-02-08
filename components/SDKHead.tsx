/* eslint-disable @next/next/no-sync-scripts */
import Head from 'next/head';
import { useContext } from 'react';

import { DataContext } from './withSDK';

const SDKHead: React.FC = () => {
	const sdkData = useContext(DataContext);

	// TODO: apply "DRY" to code below
	const componentsMap = {
		TEXT: 'remote-text',
		IMAGE: 'remote-image'
	};

	return (
		<Head>
			{/*<>*/}
			{/*	<script src={`http://localhost:3001/remote-slot.js`} />*/}
			{/*	{sdkData.components.map((c) => (*/}
			{/*		<script key={componentsMap[c]} src={`http://localhost:3001/${componentsMap[c]}.js`} />*/}
			{/*	))}*/}
			{/*</>*/}
		</Head>
	);
};

export default SDKHead;
