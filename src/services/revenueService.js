import * as httpRequest from '~/utils/httpRequest';

export const getRevenue = async () => {
    try {
        const res = await httpRequest.get('/v1/payment/revenue');
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
