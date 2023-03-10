import { AiOutlinePlus } from "react-icons/ai";
import { useAddUser } from "../../context";
import { ActiveOrNot, AddUser } from "./Build";

export const MainSection = () => {
  const { open } = useAddUser();
  return (
    <>
      { !open && <AddUser /> }
      <section className='w-full h-full flex relative' style={{ backgroundColor: '#EEF1F4' }}>
        <div className='h-full px-7 py-9 relative flex flex-col gap-9 sticky' style={{ width: 410 }}>
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
            <ActiveOrNot />
          </div>
        </div>
      </section>
    </>
  )
}
