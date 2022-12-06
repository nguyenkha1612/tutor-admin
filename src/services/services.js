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
        return res.data;
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
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const getSubject = async () => {
    return await instance.get('/v1/subjects/get-all');
};

export const getCourseList = async () => {
    try {
        const res = await instance.get('/v1/class-room/');
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const getTransactionList = async () => {
    try {
        const res = await instance.get('/v1/payment/history-all');
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const getUserList = async () => {
    try {
        const res = await instance.put('/v1/auths/users');
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const getUserById = async (id = '') => {
    try {
        const res = await instance.get('/v1/auths/user/' + id);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
