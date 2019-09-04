import axios from 'axios';
import { API_URL } from 'core/constants';

export const getSchedule = async () => {
    const url = `${API_URL}/profile`

    return axios.get(url, response => {
        debugger
    })
}