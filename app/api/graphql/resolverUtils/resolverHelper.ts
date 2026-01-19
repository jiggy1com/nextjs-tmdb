type RequestConfig = {
    method: string;
    headers: {
        'Content-Type': string;
    };
    body?: string;
};
const defaultConfig: RequestConfig = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    },
};

type bodyType = Record<string, unknown>;

export const doGet = async (endpoint: string = '', args: undefined | object = undefined) => {
    return await resolverHelper(endpoint, { ...defaultConfig }, args);
};

export const doPost = async (endpoint: string = '', body: bodyType = {}) => {
    const config = {
        ...defaultConfig,
        method: 'POST',
        body: JSON.stringify(body),
    };
    return await resolverHelper(endpoint, config);
};

const resolverHelper = async (
    endpoint: string = '',
    config: RequestConfig,
    queryParams: undefined | object = undefined,
) => {
    const url = new URL(`${process.env.API_HOST}${endpoint}`);
    url.searchParams.append('api_key', process.env.API_KEY || '');

    if (queryParams) {
        Object.entries(queryParams as Record<string, unknown>).forEach(([param, value]) => {
            if (value !== undefined) {
                url.searchParams.append(param, String(value));
            }
        });
    }

    console.log(`Fetching from URL: ${url.toString()}`);
    console.log(`Fetching with config: ${JSON.stringify(config)}`);

    const res = await fetch(url.toString(), config);

    if (!res.ok) {
        throw new Error(`Failed to fetch data from ${endpoint}`);
    }

    return await res.json();
};

// // method: 'POST', // Must specify POST
// //     headers: {
// //     'Content-Type': 'application/json', // Sending JSON
// // },
// // body: JSON.stringify({
// //     title: 'New Movie',
// //     releaseDate: '2026-01-17',
// // }),
//
// const defaultOptions = {
//     method: 'GET',
//     headers: {
//         'Content-Type': 'application/json',
//     },
// };
//
// export const doGet = async (endpoint: string) => {
//     return await resolverHelper(endpoint, { ...defaultOptions });
// };
//
// export const doPost = async (endpoint: string, body: Record<string, unknown>) => {
//     const config = {
//         ...defaultOptions,
//         method: 'POST',
//         body: JSON.stringify(body),
//     };
//     return await resolverHelper(endpoint, config);
// };
//
// type ResolverHelper = (endpoint: string, config?: RequestInit | null) => Promise<unknown>;
// const resolverHelper: ResolverHelper = async (endpoint = '', config?: RequestInit) => {
//     const url = new URL(`${process.env.API_HOST}${endpoint}`);
//     url.searchParams.append('api_key', process.env.API_KEY || '');
//
//     console.log(`Fetching from URL: ${url.toString()}`);
//     console.log(`Fetching with config: ${JSON.stringify(config)}`);
//
//     const res = await fetch(url.toString(), config);
//
//     if (!res.ok) {
//         throw new Error(`Failed to fetch data from ${endpoint}`);
//     }
//
//     const data = await res.json();
//     return data;
// };
// // const resolverHelper: ResolverHelper = async (endpoint = '', config = null) => {
// //     const url = new URL(`${process.env.API_HOST}${endpoint}`);
// //     url.searchParams.append('api_key', process.env.API_KEY || '');
// //
// //     console.log(`Fetching from URL: ${url.toString()}`);
// //     console.log(`Fetching with config: ${JSON.stringify(config)}`);
// //
// //     const res = await fetch(url.toString(), config);
// //
// //     if (!res.ok) {
// //         throw new Error(`Failed to fetch data from ${endpoint}`);
// //     }
// //
// //     const data = await res.json();
// //     return data;
// // };
