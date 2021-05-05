import React from 'react';

const Title = (props) => {
  let starArray = [];
  for (let i = 0; i < props.item.reviewAvg; i++) {
    starArray.push(<svg key={i} className="star" xmlns="http://www.w3.org/2000/svg" viewBox="3 3 18 18" aria-hidden="true" focusable="false"><path d="M20.83,9.15l-6-.52L12.46,3.08h-.92L9.18,8.63l-6,.52L2.89,10l4.55,4L6.08,19.85l.75.55L12,17.3l5.17,3.1.75-.55L16.56,14l4.55-4Z"></path></svg>);
  }
  return (
    <div>
      <h4 className="title">{props.item.brandName}</h4>
      <span>{props.item.numberOfSales} sales | </span>
        {starArray}
      <br />
      <br />
      <h1>{props.item.itemName}</h1>
    </div>
  )
};

export default Title;