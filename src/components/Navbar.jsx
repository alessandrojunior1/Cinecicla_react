
import Link from 'next/link'

export default function Navbar(){
    return(
        <div className='flex justify-between bg-green-600'>
            <div className='w-[68px] mt-2 ml-2'>
                <img src='images/logoTipo.png' alt='Logo'/> 
            </div> 
            <div className='flex items-center'>
                <ul className='flex items-center justify-center'>
                    <li className='my-[0px] mx-[15px]'>
                        <a href="#lixeiras">Lixeiras</a>
                    </li>
                    <li className='my-[0px] mx-[15px]'>
                        <Link href="">Feedback</Link>
                    </li>
                </ul>
            </div>
        </div>

    )
}