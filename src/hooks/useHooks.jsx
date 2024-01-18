import {useEffect, useState} from "react";
import axios from "axios";

export default function useHooks({name}){
    const [joke, setJoke ] = useState('');

    useEffect(() => {
        const getJoke = async () => {
            const { data } = await axios(`https://api.chucknorris.io/jokes/random?name=${name}`);
            setJoke(data);
        }
        getJoke().then(r => (r));
    }, [name]);

    return joke;
}
