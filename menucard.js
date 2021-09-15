import React from 'react'

const MenuCard = ({ menuData }) => {
  // console.log(menuData);
  return  <>
  <section className="main-card--cointainer">
    {menuData.map((curEle) => {
      return <>
      <div className="card-container" key={curEle.id}>
        <div className="card">
          <div className="card-body">
            <span className="card-number card-circle subtle">
              {curEle.id}
            </span>
            <span className="card-author subtle">
              {curEle.name}
            </span>
            <h2 className="card-title">{curEle.name}</h2>
            <span className="card-description subtle">
            {curEle.description}
            </span>
          </div>
          <img src ={curEle.image} alt ="images" className = "card-media" />
          <span className = "card-tag subtle">
          <a href= "https://thebrandmaker.avnish0900.repl.co">
          Order Now</a></span>
        </div>
      </div>
      </>
    })}
    </section>
  </>;
};
export default MenuCard;
