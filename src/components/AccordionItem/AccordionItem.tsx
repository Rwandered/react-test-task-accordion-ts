import React, {useState} from 'react';
import cn from 'classnames'
import s from './AccordionItem.module.scss'

type AccordionItemType = {
  title: string,
  children?: object | string
}

const AccordionItem = ( {title, children}: AccordionItemType ) => {

  // по идее, когда в стейт передается какой-то простой элемент
  //то типизация не требуется, так как useState чистая функция и
  // она всегда будет возвращать тот тип, который в нее передали
  // но можно и типизировать
  const [ isOpen, setIsOpen ] = useState( false )

  const handlerIsOpenClick = (event: React.MouseEvent):void => {
    event.stopPropagation()
    setIsOpen(!isOpen)
  }

  const handlerIsOpenKeyPress = (event: React.KeyboardEvent):void => {
    event.stopPropagation()
    if(event.key === ' ') {
      setIsOpen(!isOpen)
    }
  }

  return (
    <div
      className={cn(s.item, { [s.opened]: isOpen })}
      onKeyPress={handlerIsOpenKeyPress}
      tabIndex={0}
    >
      <div className={s.header} onClick={handlerIsOpenClick}>
        <span className={s.title}>{title}</span>
        <span className={s.iconArrow}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
          </svg>
        </span>
      </div>
      { isOpen && <div className={ s.accordionContent }> { children } </div>}
    </div>
  );
}

export default AccordionItem
