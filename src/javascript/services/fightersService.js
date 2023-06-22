import callApi from '../helpers/apiHelper';

class FighterService {
    #endpoint = 'fighters.json';

    async getFighters() {
        try {
            const apiResult = await callApi(this.#endpoint);
            return apiResult;
        } catch (error) {
            throw error;
        }
    }

    async getFighterDetails(id) {
        try {
            const endpoint = `details/fighter/${id}.json`;
            const apiResult = await callApi(endpoint, 'GET');
            return apiResult;
        } catch (error) {
            throw error;
        }
    }
}

const fighterService = new FighterService();

export default fighterService;
