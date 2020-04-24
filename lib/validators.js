

const isValidNumber = (number) => {

    let regex = /^\d{10}$/;

    return number.replace(/\D/g,'').match(regex);

}

const isValidZip = (zip) => {

    let regex = /^(?!.*[DFIOQU])[A-VXY][0-9][A-Z] ?[0-9][A-Z][0-9]$/;

    return zip.match(regex);

}

const formatNumber = (number) => {

    number = number.replace(/\D/g, '').substring(0, 10);

    let formatedNumber = "";

    const zip = number.substring(0, 3);
    const middle = number.substring(3, 6);
    const last = number.substring(6, 10);

    if (number.length > 6) {
        formatedNumber = `(${zip}) ${middle}-${last}`;
    } else if (number.length > 3) {
        formatedNumber = `(${zip}) ${middle}`;
    } else if (number.length > 0) {
        formatedNumber = `(${zip}`;
    }

    return formatedNumber;

}
const isAlphaNumberic = (string) => {
    if (string !== undefined ){
        let regex = /^[a-zA-Z0-9]+$/;
        return string.match(regex)!== null ; 
    }else {
        return true; 
    }

}
const isNumeric = (string) => {
    if (string !== undefined ){
        let regex = /^[0-9]+$/;
        return string.match(regex)!== null;
    }else {
        return true; 
    }

}
const isLetter = (string)=>{
    if (string !== undefined){
        let regex = /^[a-zA-Z ]+$/; 
        return string.match(regex)!== null ;
    }else {
        return true;
    }

}
const isValidTitle= (string)=>{
    console.log(string);
    console.log("Matches")
    let regex = /^(WOMEN|MEN|KIDS|HOME)(?:SHIRTS|SWEATERS|PANTS|JEANS|JOGGERS|VESTS)$ /;
    return string.match(regex) !== null ;
}
export {
    isValidNumber,
    isValidZip,
    formatNumber,
    isAlphaNumberic,
    isNumeric,
    isLetter,
    isValidTitle
}