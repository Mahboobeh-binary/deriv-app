import TicksService                from 'Api/ticksService';
import { generateLiveApiInstance } from 'Api/appId';
import Interpreter                 from './interpreter';
import Observer                    from 'Utils/observer';

export const createScope = () => {
    const observer = new Observer();
    const api = generateLiveApiInstance();

    const ticksService = new TicksService(api);

    return { observer, api, ticksService };
};

export const createInterpreter = () => new Interpreter();
