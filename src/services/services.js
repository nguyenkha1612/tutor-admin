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

export const getCourseList = async (currentPage) => {
    try {
        const res = await instance.get('/v1/class-room/', {
            params: {
                current_page: currentPage,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const getCourseById = async (id) => {
    try {
        const res = await instance.get('/v1/class-room/', {
            params: {
                id: id,
            },
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const getTransactionList = async (currentPage, maxResult) => {
    try {
        const res = await instance.get('/v1/payment/history-all', {
            params: {
                current_page: currentPage,
                max_result: maxResult,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const getTransactionById = async (id) => {
    try {
        const res = await instance.get(`/v1/payment/history/${id}`);
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

export const getCourseListByUser = async (id) => {
    try {
        const res = await instance.get('/v1/class-room/', {
            params: {
                user_id: id,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const getTransactionByUserId = async (id) => {
    try {
        const res = await instance.get(`/v1/payment/history/user/${id}`);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
