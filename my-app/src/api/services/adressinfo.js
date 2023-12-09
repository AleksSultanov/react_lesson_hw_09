import { BaseService } from ".";

//Запрос информация по адресу
function getAdressInfoUrl(adress) {
    const searchUrl = "https://nominatim.openstreetmap.org/search";
    const prm1 = "addressdetails=1";
    const prm2 = `q=${adress}`;
    const prm3 = "format=jsonv2";
    const prm4 = "limit=10";
    const url = `${searchUrl}?${prm1}&${prm2}&${prm3}&${prm4}`;
    return url;
}

class AdressService extends BaseService {
    constructor() {
        super();
        this.Url = "";
    }

    async getInfo(adress) {
        this.Url = getAdressInfoUrl(adress);
        try {
            const response = await fetch(this.Url);
            const adresses = await response.json();

            if (response.status !== 200) {
                throw new Error("Что то с запросом");
            }

            return adresses;
        } catch (error) {
            return `Ошибка: ${error}`;
        }
    }
}

const adressService = new AdressService();

export { adressService };
