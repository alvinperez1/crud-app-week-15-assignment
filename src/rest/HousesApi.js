const HOUSES_ENDPOINT = 'https://ancient-taiga-31359.herokuapp.com/api/houses';

class HousesApi {
    get = async () => {
        try {
            const resp = await fetch(HOUSES_ENDPOINT);
            const data = await resp.json();
            return data;
        } catch(e) {
            console.log('Oops, looks like the fetchHouses had an issue.', e);
        }
    }

    put = async (houses) => {
        try {
            const resp = await fetch(`${HOUSES_ENDPOINT}/${houses._id}`,{
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(houses)
            });
            return await resp.json();
        } catch(e) {
            console.log('Oops, looks like updating houses had an issue.', e);
        }
    }
}

export const housesApi = new HousesApi();