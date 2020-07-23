import React from 'react';
import s from './Accordion.module.scss'

type AccordionType = {
  children?: object | string
}

const Accordion = ({ children }: AccordionType) => {
  return <div className={s.accordion}>{children}</div>
}

export default Accordion