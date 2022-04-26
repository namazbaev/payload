// import { Amount } from "pages/pay/style";
export const currencyMask = (e, currency) => {
    let value = e.target.value;
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d)(\d{0})$/, ` ${currency} `);
    value = value.replace(/(?=(\d{3})+(\D))\B/g, " ");
    e.target.value = value;
    return e;
}
export const sumMask = (e, currency) => {
    e = e.replace(/\D/g, "");
    e = e.replace(/(\d)(\d{0})$/, ` ${currency} `);
    e = e.replace(/(?=(\d{3})+(\D))\B/g, " ");
    return e;
}
export const cardMask = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || ''
    const parts = []
    // let len
    for (let i = 0, len = match.length; i < len; i += 4) {
        parts.push(match.substring(i, i + 4))
    }
    if (parts.length) {
        return parts.join(' ')
    } else {
        return value
    }
}