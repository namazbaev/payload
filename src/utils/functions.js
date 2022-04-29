// import { Amount } from "pages/pay/style";
export const currencyMask = (e) => {
    let value = e;
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d)(\d{0})$/, ` `);
    value = value.replace(/(?=(\d{5})+(\D))\B/g, " ");
    e = value;
    return e;
}
export const sumMask = (e, currency) => {
    e = e.replace(/\D/g, "");
    e = e.replace(/(\d)(\d{0})$/, ` ${currency} `);
    e = e.replace(/(?=(\d{3})+(\D))\B/g, " ");
    return e;
}
export const cardMask = (value) => {
    let parts = []
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || ''
    for (let i = 0, len = match.length; i < len; i += 4)
        parts.push(match.substring(i, i + 4))
    if (parts.length) {
        return parts.join(' ')
    } else {
        return value
    }
}
export const phoneMask = val => {
    let x = val.replace(/\D/g, '').match(/(\d{0,3})(\d{0,2})(\d{0,3})(\d{0,4})(\d{2,4})/);
    console.log(x)
    return val = !x[1] ? x[1] : '+' + x[1] + ' ' + x[2] + (x[3] ? ' ' + x[3] + ' ' + x[4] + ' ' + x[5] : '');
}