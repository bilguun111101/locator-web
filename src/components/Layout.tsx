import { PropsWithChildren } from 'react';
import { FaIdCard } from "react-icons/fa";
import { HiChatAlt2 } from 'react-icons/hi'; 
import { FiMap, FiLogOut } from "react-icons/fi";
import { DashboardProvider, useDashboard } from '../context';


const page_buttons = [
    { text: "Явц харах", icon: <FiMap color='rgb(255 255 255)' size={25} /> },
    { text: "Ажилчид", icon: <FaIdCard color='rgb(255 255 255)' size={25} /> }
];

type navbarBtn = {
    element: {
        text: string,
        icon: any
    },
    index: number
}

const NavbarBtn = (props: navbarBtn) => {
    const { icon, text } = props.element;
    const { index } = props;
    const { active_button, setActive_button } = useDashboard();
    const click = () => {
        setActive_button(active_button.map((el: boolean, idx: number) => idx === index ? el = true : el = false));
    }
    return (
        <button 
            className={`w-full flex items-center gap-3 px-8 py-2 ${active_button[index] && "backdrop-blur"} ${active_button[index] ? 'opacity-100' : 'opacity-70'} duration-200`}
            style={{ backgroundColor: active_button[index] && 'rgba(255, 255, 255, 0.2)' }}
            onClick={click}
        >
            { icon }
            <h3 className='text-xs text-slate-300 font-black'>{ text }</h3>
        </button>
    )
}

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <DashboardProvider>
        <section className='w-full h-screen flex'>
            {/* navbar */}
            <div className='relative h-full overflow-hidden backdrop-blur dark:bg-slate-900 pb-8'
                style={{ width: 300 }}
            >
                <div className='flex w-full justify-between items-center backdrop-blur-lg z-10 pt-8 px-8'>
                    <h2 className='text-base text-slate-300 font-black'>Logo</h2>
                    <button>
                        <HiChatAlt2 color='rgb(148 163 184)' />
                    </button>
                </div>
                <div className='mt-20 flex flex-col w-full gap-1 h-4/5 relative'>
                    <div className="w-full">
                        { page_buttons.map((el, idx) => <NavbarBtn element={el} key={idx} index={idx} />) }
                    </div>
                    {/* <NavbarBtn element={{ text: "Гарах", icon: <FiLogOut /> }} /> */}
                    <button 
                        className={`w-full flex items-center gap-3 px-8 py-2 active:opacity-70 duration-500 absolute`}
                        style={{ bottom: 0 }}
                    >
                        { <FiLogOut color='rgb(255 255 255)' size={25} /> }
                        <h3 className='text-xs text-slate-300 font-black'>Гарах</h3>
                    </button>
                </div>
            </div>
            { children }
        </section>
    </DashboardProvider>
  )
}