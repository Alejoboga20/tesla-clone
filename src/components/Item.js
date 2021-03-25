import React from 'react';
import Button from './Button';

const Item = ({
  title,
  desc,
  descLink,
  backgroundImg,
  leftBtnLink,
  leftBtnTxt,
  rightBtnLink,
  rightBtnTxt,
  twoButtons,
  first,
}) => {
  return (
    <div className='item' style={{}}>
      <div className='item__container'>
        <div className='item__text'>
          <p>{title}</p>
          <div className='item__textDesc'>
            <p>{desc}</p>
          </div>
        </div>
        <div className='item__lowerThird'>
          <div className='item__buttons'>
            <Button imp='primary' link={leftBtnLink} text={leftBtnTxt} />
            {twoButtons && (
              <Button imp='secondary' link={rightBtnLink} text={rightBtnTxt} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
