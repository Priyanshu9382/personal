import { FaFacebook, FaInstagram, FaGithub, FaEnvelope } from 'react-icons/fa';
const Footer = () => {
  return (
    <div className='h-full w-7/12  flex flex-col items-center'>
      <div className="min-w-full h-full m-5  flex  justify-center items-center">
        <ul className='flex  gap-9'>
          <li><a href=""><FaFacebook color="#4267B2" size={30} className='cursor-pointer'/></a></li>
          <li><a href=""><FaInstagram color="#E1306C" size={30} className='cursor-pointer'/></a></li>
          <li><a href=""><FaGithub color="#333" size={30} className='cursor-pointer'/></a></li>
          <li><a href=""><FaEnvelope color="#D44638" size={30} className='cursor-pointer'/></a></li>
        </ul>
      </div>
      <p className='text-white mb-3'>All Rights Reserved</p>
    </div>
  )
}

export default Footer
