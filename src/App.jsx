import PresentationContent from "./components/PresentationContent.jsx";
import Card from "./components/card.jsx";
import useHooks from "./hooks/useHooks.jsx";
import Input from "./components/Input.jsx";
import Button from "./components/Button.jsx";
import {useRef, useState} from "react";




export default function App() {
    const nameRef = useRef();
    const [name, setName] = useState({name:'asep'});
    const funny = useHooks({name});


    function generateJokes(e) {
        e.preventDefault();
        setName(nameRef.current.value);
        nameRef.current.value = '';
    }

    return (
        <PresentationContent>
            <h1 className={'text-violet-50 font-bold text-3xl text-center mb-2'}>Jokes Random</h1>
           <Card>
               <Card.Header>
                   <div className={'flex items-center gap-x-2 justify-between'}>
                       <h1>App Jokes</h1>
                   </div>
               </Card.Header>
               <form>
                   <Card.Body>
                       {funny.value}
                   </Card.Body>
                   <Card.Footer>
                       <div className={'flex items-center gap-x-2'}>
                           <Input ref={nameRef} placeholder={'your name'}/>
                           <Button onClick={generateJokes}>Generate Jokes</Button>
                       </div>
                   </Card.Footer>
               </form>
           </Card>
        </PresentationContent>
    )
}