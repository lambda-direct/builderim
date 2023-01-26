import axios from 'axios';
import { AppContext } from 'next/app';
import { createContext } from 'react';

export const DataContext = createContext<IDataContext>({
	components: [],
	data: {
		blocks: []
	},
});

export interface IRemoteResponse {
	status: string,
	data: {
		blocks: Array<IRemoteResponseBlockItem>
	}
}

export enum E_BLOCK_TYPE {
	TEXT = 'TEXT',
	IMAGE = 'IMAGE'
}

export type TRemoteBlockType = E_BLOCK_TYPE.TEXT | E_BLOCK_TYPE.IMAGE

export interface IRemoteResponseBlockItem {
	id: number,
	slotId: number,
	type: 'TEXT' | 'IMAGE',
	content: Record<string, string>
	order: number
	createdAt: string
}

export interface IDataContext extends Pick<IRemoteResponse, 'data'>{
	components: Array<TRemoteBlockType>
}

export const withSDKData = (Component: React.FC) => {
	const WithSDKData: React.FC<{ sdkData: IDataContext }> = ({ sdkData, ...props }) => {
		return (
			<DataContext.Provider value={sdkData}>
				<Component {...props} />
			</DataContext.Provider>
		);
	};

	return WithSDKData;
};

function getMockedData(): Promise<IRemoteResponse> {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({
				status: 'OK',
				data: {
					blocks: [{
						id: 1, slotId: 2, type: 'TEXT', content: { text: 'Mount Fuji' }, order: 0, createdAt: '2023-01-19T09:26:01.412Z'
					}, {
						id: 2, slotId: 3, type: 'IMAGE', content: { url: 'https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg' }, order: 0, createdAt: '2023-01-19T09:26:16.630Z'
					}, {
						id: 3, slotId: 4, type: 'TEXT', content: { text: 'Mount Fuji (富士山, Fujisan, Japanese: [ɸɯꜜ(d)ʑisaɴ] (listen)), or Fugaku, located on the island of Honshū, is the highest mountain in Japan, with a summit elevation of 3,776.24 m (12,389 ft 3 in). It is the second-highest volcano located on an island in Asia (after Mount Kerinci on the island of Sumatra), and seventh-highest peak of an island on Earth.[1]' }, order: 0, createdAt: '2023-01-19T09:26:30.504Z'
					}, {
						id: 4, slotId: 5, type: 'IMAGE', content: { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Views_of_Mount_Fuji_from_%C5%8Cwakudani_20211202.jpg/544px-Views_of_Mount_Fuji_from_%C5%8Cwakudani_20211202.jpg' }, order: 0, createdAt: '2023-01-19T09:26:44.902Z'
					}, {
						id: 5, slotId: 5, type: 'IMAGE', content: { url: 'https://gaijinpot.scdn3.secure.raxcdn.com/app/uploads/sites/6/2016/02/Mount-Fuji-New.jpg' }, order: 0, createdAt: '2023-01-19T09:26:57.334Z'
					}, {
						id: 6, slotId: 6, type: 'TEXT', content: { text: 'Mount Fuji is an active stratovolcano that last erupted from 1707 to 1708.[4][5] The mountain is located about 100 km (62 mi) southwest of Tokyo and is visible from there on clear days. Mount Fuji\'s exceptionally symmetrical cone, which is covered in snow for about five months of the year, is commonly used as a cultural icon of Japan and it is frequently depicted in art and photography, as well as visited by sightseers and climbers.[6]' }, order: 0, createdAt: '2023-01-19T09:27:11.625Z'
					}, {
						id: 7, slotId: 6, type: 'TEXT', content: { text: 'Mount Fuji is one of Japan\'s "Three Holy Mountains" (三霊山, Sanreizan) along with Mount Tate and Mount Haku. It is a Special Place of Scenic Beauty and one of Japan\'s Historic Sites.[7] It was added to the World Heritage List as a Cultural Site on June 22, 2013.[7] According to UNESCO, Mount Fuji has "inspired artists and poets and been the object of pilgrimage for centuries". UNESCO recognizes 25 sites of cultural interest within the Mount Fuji locality. These 25 locations include the mountain and the Shinto shrine, Fujisan Hongū Sengen Taisha.[8]' }, order: 0, createdAt: '2023-01-19T09:27:21.294Z'
					}]
				}
			})
		}, 0)
	})
}

export const createGetStaticProps = (token: string) => async (ctx: AppContext) => {
	// const mockedResponse = await getMockedData();
	// const { data } = mockedResponse;
	const response = await axios.get(`https://sitebuilder.fly.dev/blocks/token?token=${token}`);
	const { data } = response.data;
	// @ts-ignore-next-line
	const components = [...new Set(data.blocks.map(item => item.type))]

	const sdkData: IDataContext = {
		data,
		components
	}

	return {
		props: {
			sdkData,
		},
	};
};
