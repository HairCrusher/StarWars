import {clientAPI} from '../../utils/clientAPI';

const model = 'films';

export const getFilm = (id) => clientAPI('get', `${model}/${id}/`);