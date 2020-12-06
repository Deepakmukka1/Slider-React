import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
 
const App=()=> {
 const [people,setPeople]=useState([{
   Name:'Susan Disouja',
   Role:'Web-Developer',
   Message:"I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
   Image:'https://st3.depositphotos.com/12985790/19065/i/600/depositphotos_190657278-stock-photo-smiling.jpg'


 },
 {
  Name:'Hemanth Rathode',
  Role:'',
  Image:'https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  Message:''


},
{
  Name:'Sammera Khan',
  Image:'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg'


},
{
  Name:'Pablo Stanley',
  Image:'https://st4.depositphotos.com/1001992/21109/i/600/depositphotos_211096346-stock-photo-confident-man-white-shirt-posing.jpg'


}
])
 const [curindex,setCurindex]=useState(0)

 const movenext=()=>{
     
     if(curindex<people.length-1)
     setCurindex(curindex+1)
     else
     setCurindex(people.length-curindex-1)

 }
 const moveback=()=>{

  if(curindex===0)
  setCurindex(people.length-1)
  else 
  setCurindex(curindex-1)

 }



  return (
    <div className="container">
    <div className="forms">
    <h3>{people[curindex].Name}</h3>
    <img src={people[curindex].Image} />
    <br/>
      <div className="buttons">
    <button className="btn" onClick={moveback}> <FontAwesomeIcon icon={faChevronLeft} /></button>
    <button className="btn" onClick={movenext}> <FontAwesomeIcon icon={faChevronRight}  /></button>
    </div>
  
    </div>
    </div>
  );
}

export default App;
