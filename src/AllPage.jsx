import React from 'react'
import Page1 from './Page/SideBar'
import Page2 from './Page/OpenSidebar'
import Page3 from './Page/CloseSidebar'

function AllPage() {
  return (
    <>
      <div className='flex flex-col h-screen'>
        <div className='relative flex flex-grow'>
          {/* Sidebar open or close  */}
          <div className='absolute top-0 left-0 bottom-0 z-10'>
            <Page1 />
          </div>

          {/* Sidebar open  */}
          <div className='absolute top-[742px] left-0 bottom-0 z-20'>
            <Page2 />
          </div>

          {/* Sidebar close  */}
          <div className='absolute top-[1484px] left-0 bottom-0 z-30'>
            <Page3 />
          </div>
        </div>
      </div>


    </>
  )
}

export default AllPage