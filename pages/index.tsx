import type { NextPage } from 'next';

import { Remote } from '../components/Remote';
import SDKHead from '../components/SDKHead';
import {
	createGetStaticProps,
	DataContext,
	IRemoteResponseBlockItem,
	withSDKData
} from '../components/withSDK';
import { useContext } from 'react';

const Home: NextPage = () => {
	const { data: { blocks } } = useContext(DataContext);

	const getBlockDataById = (id: string): IRemoteResponseBlockItem | undefined => {
		return blocks.find(item => String(item.id) === id)
	}

	return (
		<>
			<SDKHead />
			<div className="main">
				<div className="container">
					<div className="card">
						<div className="card__image">
							<Remote
								id="2"
								data={getBlockDataById('2')}
							/>
						</div>
						<div className="card__title">
							<Remote
								id="1"
								data={getBlockDataById('1')}
							/>
						</div>
						<div className="card__sub-title">
							<Remote
								id="3"
								data={getBlockDataById('3')}
							/>
						</div>
						<div className="card__gallery">
							<div className="card__gallery-list">
								<div className="card__gallery-list-item">
									<Remote
										id="4"
										data={getBlockDataById('4')}
									/>
								</div>
								<div className="card__gallery-list-item">
									<Remote
										id="5"
										data={getBlockDataById('5')}
									/>
								</div>
							</div>
						</div>
						<div className="card__description">
							<Remote
								id="6"
								data={getBlockDataById('6')}
							/>
							<br/>
							<Remote
								id="7"
								data={getBlockDataById('7')}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default withSDKData(Home);

export const getStaticProps = createGetStaticProps('1.Ykz6s1VxjV');
