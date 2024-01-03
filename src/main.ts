import "./style.css";

const estiloNombreGrupo : string = "font-style: bold; font-size: 18px; background-color: green";

const grupo1 : string = "The Beatles";
const grupo2 : string = "Queen";
const grupo3 : string = "AC DC";
const grupo4 : string = "Ludwig van Beethoven"; 
const grupo5 : string = "The Rolling Stones";

const generoMusical1 : string = "🎵 Pop Rock";
const generoMusical2 : string = "🎸 Rock";
const generoMusical3 : string = "🤘 Hard Rock";
const generoMusical4 : string = "🎼 Clásica"; 

const activo : boolean = true;
const inactivo : boolean = false;

const fundacionBeatles : number = 1960;
const FundacionQueen : number = 1970;
const FundacionAcDc : number = 1973;
const FundacionBeethoven : number = 1770;
const FundacionStones : number = 1962;


console.log(
    `%c${grupo1}`,
    estiloNombreGrupo,
    `Año de fundación: ${fundacionBeatles} / Activo: ${activo} / ${generoMusical1}`
);

console.log(
    `%c${grupo2}`,
    estiloNombreGrupo,
    `Año de fundación: ${FundacionQueen} / Activo: ${inactivo} / ${generoMusical2}`
);

console.log(
    `%c${grupo3}`,
    estiloNombreGrupo,
    `Año de fundación: ${FundacionAcDc} / Activo: ${activo} / ${generoMusical3}`
);

console.log(
    `%c${grupo4}`,
    estiloNombreGrupo,
    `Año de fundación: ${FundacionBeethoven} / Activo: ${inactivo} / ${generoMusical4}`
);

console.log(
    `%c${grupo5}`,
    estiloNombreGrupo,
    `Año de fundación: ${FundacionStones} / Activo: ${activo} / ${generoMusical2}`
);



