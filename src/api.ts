// api.ts
import axios from 'axios';

export async function saveFormData(formData: string) {
    try {
        const response = await axios.post('http://35.174.52.228/usacedisperseuse/wp-json/utest/v2/save_form_data', {
            form_data: formData
        });
        return response;
    } catch (error) {
        console.error('Error during API call:', error);
        return null;
    }
}
