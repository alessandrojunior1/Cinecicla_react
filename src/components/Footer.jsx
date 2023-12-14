import { CiFacebook, CiInstagram,CiTwitter } from "react-icons/ci"

export default function Footer(){
    return(
        <footer>
    <div
      class="w-[1310px] px-[70px] pt-8 pb-[7px] left-0 top-[1785px] absolute bg-zinc-100 items-center inline-flex 2xl:top-[2975px] 2xl:w-[1910px] 2xl:h-[350px] 2xl:pt-[0px]">
      <div class="w-[1220px] h-[127px] relative">
        <div class="w-[174px] h-[52px] left-[1000px] top-[7px] absolute">
          <div class="w-[52px] h-[52px] left-[122px] top-0 absolute bg-green-400 bg-opacity-40 rounded-full"><CiInstagram/></div>
          <div class="w-[52px] h-[52px] left-[61px] top-0 absolute bg-green-400 bg-opacity-40 rounded-full"><CiTwitter/> </div>
          <div class="w-[52px] h-[52px] left-0 top-0 absolute bg-green-400 bg-opacity-40 rounded-full"><CiFacebook/> </div>
          <div class="w-[21.54px] h-[21.11px] left-[76px] top-[15px] absolute">
          </div>
        </div>
        <div class="left-0 top-[82px] absolute text-black text-base font-normal font-['Poppins'] 2xl:text-[32px]">©2023 LS Project
          </div>
        <div class="left-[639px] top-[7px] absolute text-black text-base font-normal font-['Poppins'] 2xl:text-[32px]/[40px] 2xl:top-[0px]">Blog<br />Sed
          Feedback<br />Dummy Link<br />About<br />Help</div>
        <div class="w-28 h-[59px] left-0 top-0 absolute">
          <img class="w-[59px] h-[53px] left-0 top-0 absolute" src="images/logoTipo.png" />
          <div class="left-[59px] top-[7px] absolute text-lime-600 text-[17px] font-semibold font-['Poppins'] flex items-center">
            Cinecicla</div>
        </div>
      </div>
    </div>
  </footer>
    )
}