import React, { useState } from 'react';


const imageSources = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuVMurEoLfiHUyTEbHqzuM9MBou2hYKV07ew&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVUeiLWCDqaEAtPqKI5pnoNRzDwqg0Ai1qDw&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPU_jJ3z7Io4AL5VIQCLHcBCx4dqZjJ31CKQ&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNlmc2BayzDPfAGyMKbtSi5oa9MY0y7HblY_RklSVdAod_qxQOI7VENWrPxizgAlhSnY0&usqp=CAU',
    'https://www.tnsocialwelfare.tn.gov.in/website-345/sites/default/files/2022-11/Image2.jpg'
  ];
  
function Body() {
 const [show, setShow] = useState(true);

 const ShawPage=()=>{
  if(show === true){
    setShow(false)
  }
  else{
    setShow(true)
  }
 }
   
  return (
    <div className='hms_body w-full h-96'>
  <div className='flex w-full'>
  <div className="book">
      {imageSources.map((src, index) => (
        <div key={index} className={`page page${index + 1}`}>
          <img className="h-80" alt="" src={src} />
        </div>
      ))}
    </div>
<div className='link_content_fram bg-teal-100 '>
{show &&(
   <div className='link_content justify-center items-center text-center text-white bg-gray-500' >
   <img className=' h-24 w-40 ml-32 mb-1' alt='' src='https://tnschools.gov.in/wp-content/uploads/2022/06/Logo-embossed.png'/>
     <h1 className='text-white font-bold text-xl'>
     பிற்படுத்தப்பட்டோர் நலத்துறை / மிகப்பிற்படுத்தப்பட்டோர் மற்றும் சீர்மரபினர் நலத்துறை / சிறுபான்மையினர் நலத்துறை
     </h1>
   </div>
)
 
}

</div>

  </div>
  



    </div>
  )

  
}

export default Body