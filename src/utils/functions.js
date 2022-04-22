// import { Amount } from "pages/pay/style";
export const currencyMask = (e, currency) => {
    let value = e.target.value;
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d)(\d{0})$/, `$1 ${currency} $2`);
    value = value.replace(/(?=(\d{3})+(\D))\B/g, " ");
    e.target.value = value;
    return e;
}
// export const toThousandFilter = (num, currency) => {
//     return <Amount>{(+num || 0).toString().replace(/^-?\d+/g, m => m.replace(/(?=(?!\b)(\d{3})+$)/g, ' '))} {currency}</Amount>
// }