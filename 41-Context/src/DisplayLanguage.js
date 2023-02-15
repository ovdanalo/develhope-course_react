import React from "react";
import { LanguageContext } from "./LanguageContext";

const Strings = {
    EN: {LANG: 'The language is set to English'},
    IT: {LANG: 'La lingua è impostata su Italiano'},
    ES: {LANG: 'el idioma esta puesto en espanol'}
}

export default class DisplayLanguage extends React.Component {
    render() {
        return(
            <div>
                <LanguageContext.Consumer>
                {language => {return <h1>{Strings[language].LANG}</h1>}}
                </LanguageContext.Consumer>
            </div>
        )
    }
}