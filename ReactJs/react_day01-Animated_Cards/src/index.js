import React from 'react';
import ReactDOM from 'react-dom';
// CSS
import './index.css';

// this is my day 1 of react course
const stafflist = [
  { id: 1,
    img: `https://source.unsplash.com/mans-grey-and-black-shirt-ILip77SbmOE`,
    name:`John Doe`, 
    position:'Manager'
  },{
    id: 2,
    img: `https://source.unsplash.com/man-in-gray-crew-neck-t-shirt-DMVD9RkZIwQ`,
    name:`Jane Smith`,
    position:`Developer`
  },{
    id: 3,
    img: `https://source.unsplash.com/man-standing-At__EKm5PGE`,
    name:`Tom Brown`,
    position:`Designer`
  },{
    id: 4,
    img: `https://source.unsplash.com/man-wearing-red-and-black-striped-ringer-shirt-SpIKPT8zeAs`,
    name:`Harry White`,
    position:`Marketing Manager`
  },{
    id: 5,
    img: `https://source.unsplash.com/man-standing-beside-wall-pAtA8xe_iVM`,
    name:`Mike Green`,
    position: `CEO`
  },{ id: 6,
    img: `https://source.unsplash.com/woman-in-blue-jacket-standing-beside-walls-ANNsvl-6AG0`,
    name:`Victoria Hama `, 
    position:'HR'
  },{
    id: 7,
    img: `https://source.unsplash.com/man-wearing-brown-knit-crew-neck-sweater-liy0P6AmGPM`,
    name:`Evans job`,
    position:`Operations Manager`
  },{
    id: 8,
    img: `https://source.unsplash.com/man-wearing-green-crew-neck-t-shirt-looking-upwards-lkMJcGDZLVs`,
    name:`Emma Stephen`,
    position:`Designer`
  },{
    id: 9,
    img: `https://source.unsplash.com/woman-looking-up-for-photo-shoot-pOVy61t9NeA`,
    name:`Stephanie Jade`,
    position:`Marketing Manager`
  },{
    id: 10,
    img: `https://source.unsplash.com/woman-sitting-near-pink-flowers-at-daytime-x9cXI2eQLBw`,
    name:`Becky Johnson`,
    position: `Graphics Designer`
  }
];

function Staff(){
  return(
    <section>
      <h2 className="title">Meet our team</h2>
      <div className='cards_container'>
        {stafflist.map((item)=>{
          return <StaffBox key={item.id} {...item}></StaffBox>
        })}
      </div>
    </section>
  )
}
const StaffBox = ({img, name, position})=>{
  return(
    <div className='cards'>
      <img src={img} alt="" />
      <h2>{name}</h2>
      <p>{position}</p>
    </div>
  )
}

ReactDOM.render(<Staff />, document.getElementById('root'))
