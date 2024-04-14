import React, {useState, useEffect} from 'react'
import create from '../assets/create.svg';
import profile from '../assets/profile.png'
import trash from '../assets/delete.svg';
import edit from '../assets/edit.svg'
import bk from '../assets/bk.svg'
import add from '../assets/add.svg'
import { useDispatch, useSelector } from 'react-redux';
import { createClient, reset } from '../features/auth/authSlice';
import { fetchClient, removeClient } from '../features/client/clientSlice';
import { Link } from 'react-router-dom';


const Clients = () => {
const [previewImageUrl, setPreviewImageUrl] = useState("");
const [openModal, setOpenModal] = useState(false);
const [formValue, setFormValue] = useState({
    name:"",
    email:'',
    phone:'',
    role:"",
    password:'',
});

const clients = useSelector(state => state.client)
const {isLoading, isSuccess, isError, message} = useSelector(state => state.auth)
const dispatch = useDispatch();
const {name, email, phone, role, password} = formValue;

console.log(isSuccess)
console.log(isError)
console.log(message)

useEffect(() => {
    dispatch(fetchClient()) 
        if(isSuccess){
            setOpenModal(false);
            setTimeout(()=>{
              dispatch(reset())
          },3000)
        }
        if(isError) {
            setTimeout(()=>{
              dispatch(reset())
          },2000)
        }
},[dispatch, isSuccess, isError, message])

// useEffect(() => {
       
// },[])
    
    
const handleChange = (e) => {
    const { name, value, files } = e.target;
    const updatedValue = name === 'file' ? files[0] : value;
    setFormValue((prevFormValue) => ({
    ...prevFormValue,
    [name]: updatedValue 
    }));

     const file = files[0];
     const imageUrl = URL.createObjectURL(file);
     setPreviewImageUrl(imageUrl);
  };

  console.log(previewImageUrl);

const deleteHandler = (_id) => {
    dispatch(removeClient(_id));
}

const onSubmit = (e) => {
    e.preventDefault();
    //   URL.revokeObjectURL(imageUrl);

    const userData = {
        name,
        email,
        phone,
    password,
    role
    }

// console.log(userData)
dispatch(createClient(userData))
}

  return (
    <div className='h-full w-full lg:px-12 px-3'>

        <div className='flex items-center mt-20 justify-between'>
            <div className='flex items-center space-x-4'>
                <Link to="/dashboard">
                    <img src={bk} className='w-5 h-5 object-contain' />
                </Link>
                <p className='lg:text-2xl text-lg font-bold '>All clients</p>
            </div>

            <button onClick={() => setOpenModal(!openModal)} className='flex items-center w-max h-[36px] justify-center gap-2 px-2 py-1 rounded-lg bg-[#FF6700] text-sm text-white '>
                <img src={create} className='w-4 h-4 object-contain' />
                Create customer
            </button>
        </div>


            {clients.client.count === 0  ? (
                <>
                <table className='w-full h-full mt-4'>
                    {/* TABLE HEAD BEGINS HERE */}
                    <thead className=''>
                        <tr className='bg-transparent text-[#00000060] text-sm flex items-center gap-12 text-left px-3'>
                            <th className='py-3 w-full font-normal '> <span className='bg-[#D9D9D9] rounded-full py-2 px-5'>Sort by</span></th>
                            <th className=' py-3 w-full font-normal'>Name</th>
                            <th className=' py-3 w-full font-normal'>Email</th>
                            <th className=' py-3 w-full font-normal'>Phone number</th>
                            <th className=' py-3 w-full font-normal'>Id number</th>
                            <th className=' py-3 w-full font-normal'>Status</th>
                            <th className=' py-3 w-full font-normal'>Action</th>
                        </tr>
                    </thead>
                    </table>

                <div className='w-full h-full mt-[10rem] flex items-center justify-center '>
                <p>No clients to display.......</p>
                </div>

                </>
            )
        
        :
        
      (
            <table className='w-full h-full mt-4'>
                    {/* TABLE HEAD BEGINS HERE */}
                    <thead className=''>
                        <tr className='bg-transparent text-[#00000060] text-sm flex items-center gap-12 text-left px-3'>
                            <th className='py-3 w-full font-normal '> <span className='bg-[#D9D9D9] rounded-full py-2 px-5'>Sort by</span></th>
                            <th className=' py-3 w-full font-normal'>Name</th>
                            <th className=' py-3 w-full font-normal'>Email</th>
                            <th className=' py-3 w-full font-normal'>Phone number</th>
                            <th className=' py-3 w-full font-normal'>Id number</th>
                            <th className=' py-3 w-full font-normal'>Status</th>
                            <th className=' py-3 w-full font-normal'>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                    { clients.client.count > 0 ? clients.client.users.map(user =>   (

                        <tr key={user._id} className='bg-white text-xs rounded-lg flex items-center gap-9 px-5 mt-2'>
                            <td className='py-2 w-full'><img src={profile} className='w-9 h-9 object-contain rounded-full' /></td>
                            <td className='py-2 w-full'>{user.name}</td>
                            <td className='py-2 w-full'>{user.email}</td>
                            <td className='py-2 w-full'>{user.phone}</td>
                            <td className='py-2 w-full'>{user._id}</td>
                            <td className='py-2 w-full'><p className='ml-3'>Active</p></td>
                            <td className='flex py-2 w-full items-center justify-center gap-20 '>
                                <img onClick={() => deleteHandler(user._id)} src={trash} className='w-4 h-4 object-contain ml-5 cursor-pointer'/>
                                <img src={edit} className='w-4 h-4 object-contain'/>
                            </td>
                        </tr>
                        ))
                        : 

                        (
                            <div className='w-full h-full mt-40 flex items-center justify-center'>
                                <p className='font-bold text-2xl'>NO USERS AVAILABLE.......</p>
                            </div>
                        )
                    
                    }
                    </tbody>
            </table>

             )}


            {
                openModal && 
           
             <div  className="fixed h-screen flex justify-center w-full py-10 inset-0 bg-gray-900 bg-opacity-75">
                <div className='w-[599px] h-max bg-white px-14 rounded-lg py-10'>
                   
                    <div className='flex items-center justify-between'>
                        <p className='text-lg font-semibold'>Create Client</p>
                        <p onClick={() => setOpenModal(!openModal)} className='font-bold cursor-pointer'>X</p>
                    </div>
                    <form onSubmit={onSubmit} className='w-full text-xs mt-6'>
                        <div className='flex flex-col my-4 w-full'>
                            <label htmlFor='name' className=' mb-3'> Company name</label>
                            <input type='text' name='name' value={name} onChange={handleChange} placeholder='Type in Company name' className='w-full appearance-none p-3 border-[1px] border-black rounded-lg'/>
                        </div>

                        <div className='flex flex-col my-4 w-full'>
                            <label htmlFor='phone' className=' mb-3'>Phone number</label>
                            <input type='number' name='phone' value={phone}  onChange={handleChange} placeholder='Type in phone number' className='w-full appearance-none p-3 border-[1px] border-black rounded-lg'/>
                        </div>

                        <div className='flex flex-col my-4 w-full'>
                            <label htmlFor='email' className=' mb-3'>Email</label>
                            <input type='text' name='email' value={email} onChange={handleChange} placeholder='Type in Company email' className='w-full appearance-none p-3 border-[1px] border-black rounded-lg'/>
                        </div>

                        <div className='flex flex-col my-4 w-full'>
                            <label htmlFor='role' className=' mb-3'>Role</label>
                            <input type='text' name='role' value={role} onChange={handleChange} placeholder='Type in client role' className='w-full appearance-none p-3 border-[1px] border-black rounded-lg'/>
                        </div>

                        <div className='flex flex-col my-4 w-full'>
                            <label htmlFor='password' className=' mb-3'>Password</label>
                            <input type='password' value={password} name='password' onChange={handleChange} placeholder='Create a password' className='w-full appearance-none p-3 border-[1px] border-black rounded-lg'/>
                        </div>

                        {/* <p className='mb-2'>Media</p>
                        <p className='text-xs mb-1'>Upload picture of your logo<span className='text-[#FF6700]'>(5mb max)</span></p> */}

                        
                        {/* <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-2 rounded-lg  justify-end relative p-2 bg-[#FF6700] w-max'>
                                <img src={add} className='w-5 h-5'/>
                                <label htmlFor='file'className='text-white' >Upload picture</label>
                                <input type='file' id='file' onChange={handleChange} name='file' className='absolute opacity-0 cursor-pointer p-2 appearance-none ' />
                                <p className='absolute left-[8.5rem] w-full'>{file ? file.name : null}</p>
                            </div>

                            <img src={previewImageUrl ? previewImageUrl : null} className='w-16 h-16 rounded-full' />
                        </div> */}


                        <button type='submit' disabled={isLoading ? true : false }  className={`w-max ${isLoading ? "cursor-not-allowed": ""} py-2 px-7 rounded-lg bg-black text-white text-sm text-center mt-9`}>
                            {isLoading ? "Processing" : "Create"}
                        </button>
                    </form>
                </div>
             </div>
            }
    </div>
  )
}

export default Clients