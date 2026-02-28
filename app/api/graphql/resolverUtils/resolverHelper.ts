// type RequestConfig = {
//     method: string;
//     headers: {
//         'Content-Type': string;
//     };
//     body?: string;
// };

type RequestConfig = {
	method: 'GET' | 'POST' | 'PUT' | 'DELETE';
	headers: {
		'Content-Type': string;
	};
	body?: string;
};
type QueryParams =
	| Record<string, string | number | boolean | undefined>
	| undefined;
type BodyType = Record<string, unknown>;

const defaultConfig: RequestConfig = {
	method: 'GET',
	headers: {
		'Content-Type': 'application/json',
	},
};

export const doGet = async <T = unknown>(
	endpoint: string = '',
	args?: QueryParams,
): Promise<T> => {
	return (await resolverHelper(
		endpoint,
		{ ...defaultConfig },
		args,
	)) as Promise<T>;
};

export const doPost = async <T = unknown>(
	endpoint: string = '',
	body: BodyType = {},
) => {
	const config = {
		...defaultConfig,
		method: 'POST',
		body: JSON.stringify(body),
	} as RequestConfig;
	return await resolverHelper<T>(endpoint, config, {});
};

const resolverHelper = async <T>(
	endpoint: string = '',
	config: RequestConfig,
	queryParams: QueryParams,
) => {
	const url = new URL(`${process.env.API_HOST}${endpoint}`);
	url.searchParams.append('api_key', process.env.API_KEY || '');

	if (queryParams) {
		Object.entries(queryParams as Record<string, unknown>).forEach(
			([param, value]) => {
				if (value !== undefined) {
					url.searchParams.append(param, String(value));
				}
			},
		);
	}

	const res = await fetch(url.toString(), config);

	if (!res.ok) {
		throw new Error(`Failed to fetch data from ${endpoint}`);
	}

	const resp = (await res.json()) as T;

	// console.log('#debug api response');
	// console.log(resp);

	return resp;
};
