import instance from '~/utils/httpRequest';

export const getRevenue = async (user = '', from = '', to = '') => {
    try {
        const res = await instance.get('/v1/payment/revenue', {
            params: {
                user,
                from,
                to,
            },
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const getRevenueYearly = async (year) => {
    try {
        const res = await instance.get('/v1/payment/revenue/year/' + year);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const getUserInfo = async () => {
    try {
        const res = await instance.get('/v1/auths/user');
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const getSubject = async () => {
    return await instance.get('/v1/subjects/get-all');
};

// export const getUserList = async () => {
//     try {
//         const res = await instance.get('/v1/auths/user');
//         return res;
//     } catch (error) {
//         console.log(error);
//     }
// };
