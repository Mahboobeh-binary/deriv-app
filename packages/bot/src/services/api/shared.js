import _Symbol                     from 'api/symbolApi';
import { generateLiveApiInstance } from 'api/appId';
import TicksService                from 'api/ticksService';
import Observer                    from 'utils/observer';

export const symbolApi = new _Symbol(generateLiveApiInstance());

export const ticksService = new TicksService(generateLiveApiInstance());

export const createScope = () => {
    const api = generateLiveApiInstance();
    const observer = new Observer();

    return { observer, api, ticksService, symbolApi };
};
