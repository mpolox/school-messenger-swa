import React from 'react'
import { Accordion } from 'react-bootstrap';
import AccordionItem from 'react-bootstrap/esm/AccordionItem';
import { AcordeonItem } from './AcordeonItem';

export const Acordeon = ({data}) => {
  const materias = data.materias;
  const listItems = materias.map((item) => <AcordeonItem key={item.nombre} data={item}/>);
  return (
    <>
      <br/>      
      <Accordion>
        {listItems }
      </Accordion>
    </>
    
  )
}
