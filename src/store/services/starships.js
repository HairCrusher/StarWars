import {clientAPI} from '../../utils/clientAPI';

const model = 'starships';

export const getSShip = (id) => clientAPI('get', `${model}/${id}/`);