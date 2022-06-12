import axios from 'axios';
import { AppContext } from 'next/app';
import { createContext } from 'react';

export const DataContext = createContext<RemoteData>({
	components: [],
	data: {},
});

export interface RemoteData {
	components: string[];
	data: Record<
		string,
		{
			type: string;
			payload: Record<string, unknown>;
		}
	>;
}

export const withSDKData = (Component: React.FC) => {
	const WithSDKData: React.FC<{ sdkData: RemoteData }> = ({ sdkData, ...props }) => {
		return (
			<DataContext.Provider value={sdkData}>
				<Component {...props} />
			</DataContext.Provider>
		);
	};

	return WithSDKData;
};

export const createGetStaticProps = (pageKey: string) => async (ctx: AppContext) => {
	const response = await axios.get(`https://jsonbase.com/builderim/${pageKey}`);
	return {
		props: {
			sdkData: response.data,
		},
	};
};
