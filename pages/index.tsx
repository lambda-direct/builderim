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
					<div className="card">
						<div className="card__image">
							<Remote id="2" />
						</div>
						<div className="card__title">
							<Remote id="1" />
						</div>
						<div className="card__sub-title">
							<Remote id="3" />
						</div>
						<div className="card__gallery">
							<div className="card__gallery-list">
								<div className="card__gallery-list-item">
									<Remote id="4" />
								</div>
								<div className="card__gallery-list-item">
									<Remote id="5" />
								</div>
							</div>
						</div>
						<div className="card__description">
							<Remote id="6" />
							<br/>
							<br/>
							<Remote id="7" />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default withSDKData(Home);

export const getStaticProps = createGetStaticProps('1.nXXKiiQumf');
