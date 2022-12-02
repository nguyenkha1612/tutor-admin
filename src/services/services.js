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

export const getUserList = async () => {
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

export const loginService = async (email, password) =>
    await instance
        .post('/v1/auths/login', { email, password })
        .then((res) => {
            return res.data;
        })
        .catch((e) => e.response?.data);
