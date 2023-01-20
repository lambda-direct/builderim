import type { NextPage } from 'next';

import { Remote } from '../components/Remote';
import SDKHead from '../components/SDKHead';
import { createGetStaticProps, withSDKData } from '../components/withSDK';

const Home: NextPage = () => {
	return (
		<>
			<SDKHead />
			<div>Remote component:</div>
			<Remote id="header" />
			<Remote id="1" />
			<Remote id="2" />
			<Remote id="3" />
		</>
	);
};

export default withSDKData(Home);

export const getStaticProps = createGetStaticProps('1');
