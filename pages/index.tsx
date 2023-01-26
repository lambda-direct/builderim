import type { NextPage } from 'next';

import { Remote } from '../components/Remote';
import SDKHead from '../components/SDKHead';
import { createGetStaticProps, withSDKData } from '../components/withSDK';

const Home: NextPage = () => {
	return (
		<>
			<SDKHead />
			<div className="main">
				<div className="container">
					<div className="grid">
						<div className="card">
							<Remote id="2" />
							<div className="description">
								<Remote id="1" />
							</div>
						</div>
						<div className="card">
							<Remote id="4" />
							<div className="description">
								<Remote id="3" />
							</div>
						</div>
						<div className="card">
							<Remote id="5" />
							<div className="description">
								<Remote id="6" />
								<Remote id="7" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default withSDKData(Home);

export const getStaticProps = createGetStaticProps('1.nXXKiiQumf');
