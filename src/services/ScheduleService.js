import axios from 'axios';
import { API_URL } from 'core/constants';

export const getSchedule = async id => {
    const url = `${API_URL}/schedules/${id}`

    return axios.get(url);
}