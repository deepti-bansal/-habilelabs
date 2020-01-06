import {useState, useEffect} from "react";
import i18n from '../helpers/i18n';

/**
 * Custom hook to set multi lang.
 */

export default function useMultiLanguage(){
    const [language, setLanguage] = useState(sessionStorage['_lang'] || 'en');
    useEffect(()=>{
        i18n.changeLanguage(language);
    }, [language]);
    function changeLanguage(key){
        sessionStorage['_lang'] = key;
        setLanguage(key);
    }
    return {
        language,
        changeLanguage
    };
}