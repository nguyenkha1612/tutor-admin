export const handleQuantity = (amount, delimiter) => {
    let result = '';
    let split = '';

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
    return result;
};

export const handleDateTime = (date) => {
    let result = '';
    if (date.getDay() === 0) result += 'Chủ nhật';
    else result += 'Thứ ' + Number(date.getDay() + 1);

    return (
        result +
        ' ' +
        date.getDate() +
        '/' +
        Number(date.getMonth() + 1) +
        '/' +
        date.getFullYear() +
        ' ' +
        date.getHours() +
        ':' +
        date.getMinutes()
    );
};

export const handleDate = (date) => {
    let result = '';
    if (date.getDay() === 0) result += 'Chủ nhật';
    else result += 'Thứ ' + Number(date.getDay() + 1);

    return result + ' ' + date.getDate() + '/' + Number(date.getMonth() + 1) + '/' + date.getFullYear();
};

export const upperCaseFirstLetter = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
};
