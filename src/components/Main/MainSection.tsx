import { useAddUser } from "../../context";
import { AiOutlinePlus } from "react-icons/ai";
import useGetUsers from "../../firebase/getUsers";
import { ActiveOrNot, AddUser, Map } from "./Build";
import { useEffect, useState } from "react";
import { UserData } from "../Types";

const center = [10.7712, 106.69];

export const MainSection = () => {
  const { open, setOpen } = useAddUser();
  const { active, inActive } = useGetUsers();
  return (
    <>
      { open && <AddUser /> }
      <section className='w-full h-full flex relative' style={{ backgroundColor: '#EEF1F4' }}>
        <div className='h-full px-7 py-9 relative flex flex-col gap-9 sticky' style={{ width: 510 }}>
          <div className='w-full flex justify-between items-center p-3 bg-white rounded-lg'>
            <h6><strong>Жолооч бүртгэх</strong></h6>
            <button className='p-1 rounded duration active:opacity-70' style={{ backgroundColor: '#EEF1F4' }} onClick={() => setOpen(true)}>
              <AiOutlinePlus size={21} />
            </button>
          </div>
          <div className="w-full h-full overflow-scroll">
            {
              (() => {
                const sections = [
                  { title: 'Идэвхтэй', datas: active }, 
                  { title: 'Идэвхгүй', datas: inActive }
                ]
                return (
                  <>
                    { sections.map((section, idx) => <ActiveOrNot key={idx} data={section} />) }
                  </>
                )
              })()
            }
          </div>
        </div>
        <div className="w-full h-full">
          <Map />
        </div>
      </section>
    </>
  )
}
