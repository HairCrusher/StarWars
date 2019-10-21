import {clientAPI} from '../../utils/clientAPI';

const model = 'people';

export const getPage = (page = 1) => clientAPI('get', `${model}/?page=${page}`);
export const getPerson = (id) => clientAPI('get', `${model}/${id}`);