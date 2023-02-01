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

export const createGetStaticProps = (token: string) => async (ctx: AppContext) => {
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
