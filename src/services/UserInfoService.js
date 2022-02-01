import axios from 'axios'

    const USERINFO_REST_API_URL = 'http://localhost:8080/api/userinfo';

    class UserInfoService {

        getAllUsers(){
            return axios.get(USERINFO_REST_API_URL);
        }

    }

    export default new UserInfoService();