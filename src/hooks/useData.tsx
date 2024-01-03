
import useSWR               from 'swr';
import { insecureInstance } from '../api/BaseURL';

const apiURL = '/api/anime/averageScoreByType';
const usedURL = insecureInstance

const axiosFetcher = async (url:string) => {
    try {
        const response = await usedURL.get(url);
        return response.data;
    } catch (error) {
        console.log('I am in useCaseData, and error is ', error);
        throw error;
    }
};

export const useCaseData = () => {
    const { data, error } = useSWR(`${apiURL}`, axiosFetcher, {
        refreshInterval: 5000,                          
        dedupingInterval: 2000,                         
        errorRetryInterval: 2000,                       
    });

    return {
        data,
        error,
    };
};