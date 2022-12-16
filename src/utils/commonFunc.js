export const handleQuantity = (amount, delimiter = '.', currency = '') => {
    let result = '';
    let split = '';
    let negative = '';

    if (amount < 0) {
        negative = '-';
        amount = Math.abs(amount);
    }

    amount += '';
    do {
        if (amount.length > 3) {
            split = amount.substring(amount.length - 3, amount.length);
            amount = amount.substring(0, amount.length - 3);
            result = delimiter + split + result;
        } else if (amount.length > 0 && amount.length <= 3) {
            split = amount;
            amount = '';
            result = split + result;
        } else break;
    } while (split != null && split.length > 0);
    return negative + result + currency;
};

export const handleDateTime = (date) => {
    date = new Date(date);

    let result = '';
    if (date.getDay() === 0) result += 'Chủ nhật';
    else result += 'Thứ ' + Number(date.getDay() + 1);

    let dateResult = '';
    if (date.getDate().toString().length === 1) dateResult = '0' + date.getDate();
    else dateResult = date.getDate();

    let month = '';
    if (date.getMonth().toString().length === 1) month = '0' + Number(date.getMonth() + 1);
    else month = Number(date.getMonth() + 1);

    let hours = '';
    if (date.getHours().toString().length === 1) hours = '0' + date.getHours();
    else hours = date.getHours();

    let minutes = '';
    if (date.getMinutes().toString().length === 1) minutes = '0' + date.getMinutes();
    else minutes = date.getMinutes();

    return result + ' ' + dateResult + '/' + month + '/' + date.getFullYear() + ' ' + hours + ':' + minutes;
};

export const handleDate = (date) => {
    date = new Date(date);

    let result = '';
    if (date.getDay() === 0) result += 'Chủ nhật';
    else result += 'Thứ ' + Number(date.getDay() + 1);

    let dateResult = '';
    if (date.getDate().toString().length === 1) dateResult = '0' + date.getDate();
    else dateResult = date.getDate();

    let month = '';
    if (date.getMonth().toString().length === 1) month = '0' + Number(date.getMonth() + 1);
    else month = Number(date.getMonth() + 1);

    return result + ' ' + dateResult + '/' + month + '/' + date.getFullYear();
};

export const upperCaseFirstLetter = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
};

export const handleGender = (text) => {
    if (text.toLowerCase() === 'male') return 'Nam';
    else if (text.toLowerCase() === 'female') return 'Nữ';
    else return text;
};

export const handleLevel = (text) => {
    if (text.toLowerCase() === 'student') return 'Học sinh';
    else if (text.toLowerCase() === 'teacher') return 'Giáo viên';
    else return text;
};

export const handleTypeTransaction = (text) => {
    if (text.toLowerCase() === 'become_tutor') return 'Đăng ký làm gia sư';
    else if (text.toLowerCase() === 'deposit') return 'Nạp tiền';
    else if (text.toLowerCase() === 'create_class') return 'Tìm gia sư';
    else return text;
};

export const handleStatusCourse = (text) => {
    if (text.toLowerCase() === 'create') return 'Mới tạo';
    else if (text.toLowerCase() === 'teaching') return 'Đã nhận lớp';
    else return text;
};
