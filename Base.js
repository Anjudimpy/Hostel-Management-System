

import FixedHeader from './FixedHeader';


const Base = ({title="Wlcome",children}) => {
  return (
    <div className='container-fluid m-0 p-0'>
     <FixedHeader/>
        {children}
       
    </div>
  )
}

export default Base;