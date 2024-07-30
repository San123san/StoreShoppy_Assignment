import React, {useState} from 'react'
import LOGO from '../assets/Razorpay_logo.jpg'
import LOGO_1 from '../assets/Logo_1.jpg'
import HOME from '../assets/Home.jpg'
import USER from '../assets/User.jpg'
import USER_1 from '../assets/User_1.jpg'
import PAYMENT from '../assets/Payment.jpg'
import STAMP from '../assets/Stamp.jpg'
import PAYROLL from '../assets/Payroll.jpg'
import REPORT from '../assets/Report.jpg'
import SPEAKER from '../assets/Speaker.jpg'
import SEND from '../assets/Send.jpg'
import PAGE from '../assets/Page.jpg'
import DROPDOWN from '../assets/Dropdown_person.jpg'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import SearchIcon from '@mui/icons-material/Search'
import DoneIcon from '@mui/icons-material/Done'
import RefreshIcon from '@mui/icons-material/Refresh'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import EmailIcon from '@mui/icons-material/Email'
import { Add, ArrowDropDown } from '@mui/icons-material'

const options = [
    { id: 'all-contacts', label: 'All Contacts' },
    { id: 'vendors', label: 'Vendors' },
    { id: 'employees', label: 'Employees' },
    { id: 'customers', label: 'Customers' },
  ]
  
  const tableData = [
    { name: 'Shivam Arrora', type: '', phone: '--', email: '--', contactId: 'cont_NYixS2vwiws09W' },
    { name: 'Ujjwal', type: '', phone: '--', email: '--', contactId: 'cont_NYhoZUI8AREP3n' },
    { name: 'Amit Kumar', type: '', phone: '--', email: '--', contactId: 'cont_NYgRJAQ9xW7QdB' },
    { name: 'Harsh', type: '', phone: '--', email: '--', contactId: 'cont_NYLmqiGpceD4Hb' },
    { name: 'Roshni', type: '', phone: '--', email: '--', contactId: 'cont_NYLJM1K5rw29se' },
    { name: 'Random Verma', type: 'CUSTOMER', phone: '--', email: '--', contactId: 'cont_NXYz7GH2prhK9a' }
  ]

function CloseSidebar() {

    const [selectedOption, setSelectedOption] = useState(null)

  const handleClick = (id) => {
    setSelectedOption(id)
  }

  return (
    <>
      <div className='w-full'>
        <div className='h-screen flex flex-col'>


          <div className='bg-[#080d2a]'>
            <div className='bg-yellow-400 h-1'></div>
            <div className='flex justify-center p-1 bg-yellow-400 mx-[680px] rounded-b'>
              <div className='ml-1 text-[9px] font-medium'>GO BACK TO ONBOARDING </div>
              <i className="material-symbols-outlined text-gray-500 ml-1 text-[8px]">
                open_in_new
              </i>
            </div>
          </div>



          <div className='flex'>

            {/* Sidebar  */}
            <div className='absolute top-1 bottom-1 bg-[#080d2a] h-[733px] border-r-2 border-r-[#282d4d]'>
              <div className='flex flex-col bg-[#080d2a] p-1 justify-center'>

                <div>
                  <img src={LOGO} alt="logo_icon"
                    className='w-7 py-2' />

                  <div className='space-y-8 mt-3 '>
                    <img src={HOME} alt="home"
                      className='w-5 ml-1' />

                    <div className='text-[#a1a2b6] flex justify-center'>
                      <ArrowOutwardIcon sx={{
                        fontSize: 14,
                      }} />
                    </div>

                    <div className='flex justify-center'>
                      <img src={PAGE} alt="payment"
                        className='w-[11px] mr-1 bg-[#363b59]' />
                    </div>

                    <div className='flex'>
                      <div className="w-[2px] bg-amber-500 rounded-r-full h-4 mr-1"></div>
                      <img src={USER} alt=""
                        className='w-[15px] rounded bg-[#363b59] p-[1px]' />
                    </div>
                  </div>

                  <div className='space-y-8 mt-8 border-t-[1px] pt-7 border-t-[#232743]'>
                    <div className='flex justify-center'>
                      <img src={PAYMENT} alt="payment"
                        className='w-[13px] mr-1 bg-[#363b59]' />
                    </div>

                    <div className='flex justify-center'>
                      <img src={STAMP} alt="payment"
                        className='w-[13px] mr-1 bg-[#363b59]' />
                    </div>

                    <div className='flex justify-center'>
                      <img src={SEND} alt="send"
                        className='w-[13px] mr-1 bg-[#363b59]' />
                    </div>

                    <div className='flex justify-center'>
                      <img src={PAYROLL} alt="payment"
                        className='w-[13px] mr-1 bg-[#363b59]' />
                    </div>

                    <div className='flex justify-center'>
                      <img src={REPORT} alt="payment"
                        className='w-[13px] mr-1 bg-[#363b59]' />
                    </div>
                  </div>


                </div>

              </div>
            </div>
          </div>

          {/* Navbar  */}
          <div className=''>
            {/* First Navbar */}
            <div className='ml-2 bg-[#080d2a] py-1'>
              <div className='flex text-white items-center space-x-[60rem] pl-12 '>

                <div className='flex space-x-3 items-center'>
                  <img src={USER_1} alt="User"
                    className='w-[16px] rounded bg-[#1d2345] p-[3px]' />

                  <div className='text-base font-medium'>Contacts</div>
                  <div>/</div>
                  <div className='text-[#6bafff] bg-[#0c1a3f] p-2 text-[11px] font-semibold rounded'>Single</div>
                  <div className='text-[11px]'>Import Contacts</div>
                </div>

                <div className='flex items-center space-x-5 mb-1'>

                  <div className='flex text-[#6bafff] border-[1px] border-[#6bafff] items-center justify-center text-[13px] font-semibold 
                    my-[1px] rounded-sm'>
                    <div className='ml-2 mb-2 mr-1 '>< Add sx={{
                      fontSize: 11
                    }} /></div>
                    <div className=''>PAYOUT</div>
                    <div className="w-[2px] bg-[#282d4d] h-5 ml-3 mr-1 "></div>
                    <div className='mb-2 mr-1'>< KeyboardArrowDownIcon sx={{
                      fontSize: 20
                    }} /></div>
                  </div>

                  <SearchIcon sx={{
                    fontSize: 21
                  }} />

                  <img src={SPEAKER} alt="" className='w-[21px] ' />

                  <img src={DROPDOWN} alt="" className='w-[21px]' />

                </div>
              </div>
            </div>

            {/* Second Navbar  */}
            <div className='flex items-center bg-[#111739] pl-14 space-x-[45rem] text-[12px]'>
              <div className='flex text-white items-center space-x-[59rem] py-2 items-center'>
                <div className='flex items-center text-[#aab3d0] text-[12px]'>
                  <div className='mr-4 font-semibold'>Quick filters :</div>

                  <div className='flex items-center space-x-5'>
                    {options.map((option) => (
                      <div key={option.id}>
                        <div
                          className={`flex items-center py-2 pr-3 border-2 cursor-pointer font-medium rounded
                            ${selectedOption === option.id ? 'border-[#14234c] bg-[#14234c]' : 'border-[#101e41] bg-[#111e41]'}`}
                          onClick={() => handleClick(option.id)}
                        >
                          <div className="w-[2px] bg-white rounded-r-full h-3 ml-0 mr-3"></div>
                          <div className={`flex space-x-3 items-center ${selectedOption === option.id ? 'text-[#3a69c1]' : ''}`}>
                            {selectedOption === option.id ? (
                              <div className="flex justify-center items-center p-1 bg-blue-500 rounded-full h-4 w-4">
                                <DoneIcon sx={{ color: 'white', fontSize: 10 }} />
                              </div>
                            ) : (
                              <div className="bg-[#16224a] rounded-full h-4 w-4 border-2 border-[#3c66a2]"></div>
                            )}
                            <div>{option.label}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className='text-[#87a5db] font-bold'>
                View More Filters
                <KeyboardArrowDownIcon sx={{
                  marginBottom: 1
                }} />
              </div>

            </div>
          </div>

          <div className='bg-[#1d2345] h-screen flex flex-col'>
            <div className='pt-3 px-8 ml-7'>
              <div className='flex items-center bg-[#292c4b] pl-3 py-3 text-[#aab3d0] text-[12px] rounded'>
                <div className='text-black bg-[#b27f19] text-[7px] px-[2px] font-medium rounded-sm font-bold'>Test</div>
                <div className='ml-2'>These are test contacts. Actual funds can only transfered to contacts created in Live Mode.</div>
                <div className='ml-4 text-[#5774b2] font-semibold'>Learn More</div>
              </div>
            </div>

            <div className='py-2 px-8 ml-7'>
              <div className='flex items-center space-x-[51rem]'>
                <div className='flex items-center text-[#aab3d0] space-x-3'>
                  <div className='text-[13px] font-bold'>Showing 1-6 active contacts</div>
                  <div className='bg-[#aab3d0] rounded-full h-2 w-2'></div>
                  <div className='flex items-center text-[11px]'>
                    <div className='mr-1'>Sort by</div>
                    <div className='font-semibold'>latest creation date</div>
                  </div>
                </div>

                <div className='flex items-center space-x-2'>
                  <RefreshIcon sx={{ color: '#85b8ff', marginRight: 1 }} />
                  <MoreVertIcon sx={{ color: '#748cbc' }} />
                  <div className='flex'>
                    <div className='flex items-center space-x-2'>
                      <div className='flex items-center border-2 border-[#7998cf] text-[#5681d0] py-1 px-3 text-[11px] rounded-sm'>
                        <span className="material-symbols-outlined text-[16px]">
                          download
                        </span>
                        <div className='font-semibold'>Export</div>
                      </div>

                      <div className='flex text-white border-[1px] border-[#6bafff] items-center justify-center text-[13px] font-semibold 
                       my-[1px] rounded-sm bg-[#2b85f7]'>
                        <div className='ml-2 mb-2 mr-1 '>< Add sx={{
                          fontSize: 11
                        }} /></div>
                        <div className='text-[12px]'>CONTACT</div>
                        <div className="w-[2px] bg-[#aab3d0] h-5 ml-3 mr-1 "></div>
                        <div className='mb-2 mr-1'>< KeyboardArrowDownIcon sx={{
                          fontSize: 20
                        }} /></div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>


            {/* Table  */}
            <div className='ml-7'>
              <div className='rounded-full my-1 border-t border-gray-50'></div>
              <div>
                <div className="p-4">
                  <table className="text-[#aab3d0] font-light text-[12px]">
                    <thead>
                      <tr>
                        <th className="py-2 px-4 pr-[25rem]"> </th>
                        <th className="py-2 px-4 font-medium text-[12px] pr-[153px]">TYPE</th>
                        <th className="py-2 px-4 font-medium text-[12px] pr-56">
                          <div className='flex items-center'>
                            <LocalPhoneIcon sx={{ color: '#aab3d0', fontSize: 12, mr: 1 }} />
                            PHONE
                          </div>

                        </th>
                        <th className="py-2 px-4 font-medium text-[12px] pr-52">
                          <div className='flex items-center'>
                            <EmailIcon sx={{ color: '#aab3d0', fontSize: 12, mr: 1 }} />
                            EMAIL
                          </div>

                        </th>
                        <th className="py-2 px-4 font-medium text-[12px] ">CONTACT_ID</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-2 px-4 font-medium text-[13px] pr-[25rem]">NAME</td>
                      </tr>
                    </tbody>
                    <tbody>
                      {tableData.map((row, index) => (
                        <tr key={index}>
                          <td className="py-2 px-4 font-medium text-[13px]">{row.name}</td>
                          <td className="py-2 font-medium text-[13px]">
                            {row.type ? (
                              <div className='flex'>
                                <div className='bg-[#222747] px-2 py-[1px] rounded-full text-[8px]'>
                                  {row.type}
                                </div>
                              </div>
                            ) : ''}
                          </td>
                          <td className="py-2 px-4 font-medium text-[13px]">{row.phone}</td>
                          <td className="py-2 px-4 font-medium text-[13px]">{row.email}</td>
                          <td className="py-2 px-4 font-medium text-[13px]">{row.contactId}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className='rounded-full my-1 border-t border-gray-50 rounded-full'></div>

            <div className='mt-32 w-20 ml-[87rem]'>
              <div className=''>
                <div className='flex items-center bg-[#6f6be4] p-1 rounded-full'>
                  <div className='bg-[#8b8be1] rounded-full flex items-center justify-center'>
                    <img src={LOGO_1} alt="logo" className='w-5 h-5 p-[3px]' />
                  </div>
                  <div className='text-[8px] ml-1 text-white font-semibold'>Need Help?</div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CloseSidebar