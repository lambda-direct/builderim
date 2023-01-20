/* eslint-disable @next/next/no-sync-scripts */
import Head from 'next/head';
import { useContext } from 'react';

import { DataContext } from './withSDK';

const SDKHead: React.FC = () => {
	const sdkData = useContext(DataContext);

	return (
		<Head>
			<>
				<script src={`http://localhost:3001/remote-slot.js`} />
				{sdkData.components.map((c) => (
					<script key={c} src={`http://localhost:3001/${c}.js`} />
				))}
			</>
		</Head>
	);
};

export default SDKHead;
