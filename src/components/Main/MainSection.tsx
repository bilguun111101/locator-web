import { AiOutlinePlus } from "react-icons/ai";

export const MainSection = () => {
  return (
    <section className='w-full h-full flex relative' style={{ backgroundColor: '#EEF1F4' }}>
      <div className='w-1/3 h-full px-7 py-9 relative flex flex-col gap-9'>
        <div className='w-full flex justify-between items-center p-3 bg-white rounded-lg'>
          <h6><strong>Жолооч бүртгэх</strong></h6>
          <button className='p-1 rounded duration active:opacity-70' style={{ backgroundColor: '#EEF1F4' }}>
            <AiOutlinePlus size={21} />
          </button>
        </div>
        <div className="w-full h-full overflow-scroll">
          {/* <div className="w-full gap-3.5">
            <div className=""></div>
          </div> */}
        </div>
      </div>
    </section>
  )
}
