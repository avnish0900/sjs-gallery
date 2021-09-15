import React from 'react';
import Menu from './menuapi';
import MenuCard from './menucard';
import Navbar from './navbar'

const uniqueList = [...new Set(Menu.map((curEle) =>{
      return curEle.bigCategory;
    })
  ),
  "All",
];

const uniqueList2 = [...new Set(Menu.map((curEle) =>{
      return curEle.category;
    })
  ),
  "All",
];


const Gallery = () => {
  const [menuData, setmenuData] = React.useState(Menu);
  const [menuList, setmenulist] = React.useState(uniqueList);
  const [menuList2, setmenulist2] = React.useState(uniqueList2);

  const filteritem = (category) => {
    if(category === "All"){
      setmenuData(Menu);
      return ;
    }
    const updatedList = Menu.filter((curEle) =>{
      return curEle.bigCategory === category;
    });
    setmenuData(updatedList)
  }
  const filterCategory = (category) => {
    if(category === "All"){
      setmenuData(Menu);
      return ;
    }
    console.log(category);
    const updatedCategory = Menu.filter((curEle) =>{
      return curEle.bigCategory === category;
    });
    console.log(updatedCategory);
    setmenulist2(updatedCategory)
  }
  return (
    <>
    <Navbar filteritem={filteritem} menuList = {menuList} filterCategory={filterCategory}/>
      <MenuCard menuData = {menuData} />
    </>
  )
};

export default Gallery ;
