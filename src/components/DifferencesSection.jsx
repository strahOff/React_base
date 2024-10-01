import Button from "./Button/Btn";
import { differences } from "../data";
import { useState } from "react";

export default function DifferencesSection() {
  
  const [contentType, setContentType] = useState(null);
  console.log('App Render');

  function handleClick(type) {
    setContentType(type);
    console.log(contentType);
   // content = type; не сработает, только setContent(type) только так react поймет что что то изменилось и нуэно это отрендерить.
    }
    return( <section>
        <h3>Чем мы отличаемся от других?</h3>
        <Button 
        isActive={contentType === 'way'} 
        onClick={() => handleClick('way')}>
          Подход
          </Button>
        <Button 
        isActive={contentType === 'easy'} 
        onClick={() =>  handleClick('easy')}>
          Доступность
          </Button>
        <Button 
        isActive={contentType === 'program'} 
        onClick={() => handleClick('program')}>
          Концентрация
          </Button>
  
        {!contentType && <p>Нажми на кнопку</p>}
        {contentType &&  <p>{differences[contentType]}</p>}


      </section>) 
}