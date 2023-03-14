import axios from "axios";

class RestClient {

    static GetRequest(getURL) {
        return axios.get(getURL)
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                return null;
            })
    }

}

export default RestClient;