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
  Role:'Tester',
  Image:'https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  Message:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble"


},
{
  Name:'Sammera Khan',
  Role:'Devops-Engineer',
  Image:'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
  Message:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters"


},
{
  Name:'Pablo Stanley',
  Role:'Marketing',
  Image:'https://st4.depositphotos.com/1001992/21109/i/600/depositphotos_211096346-stock-photo-confident-man-white-shirt-posing.jpg',
  Message:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."


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
    
    <img src={people[curindex].Image} />
    <h3 style={{letterSpacing:'0.2rem',fontWeight:'bold'}}>{people[curindex].Name}</h3>
    <h4 style={{letterSpacing:'0.1rem',fontWeight:'bold',color:'#d35400'}}>{people[curindex].Role}</h4>
    <p style={{width:'50%',textAlign:'center',marginLeft:'25%',letterSpacing:'0.02rem'}}>
     {people[curindex].Message}
    </p>
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
