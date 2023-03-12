import { motion } from "framer-motion"
import { GrFormClose } from 'react-icons/gr';
import { useAddUser } from "../../../context";

const inputs = [
  {
    placeholder: 'Овог',
    name: 'lastName',
    type: 'text',
  },
  {
    placeholder: 'Нэр',
    name: 'firstName',
    type: 'text'
  },
  {
    placeholder: 'Утасны дугаар',
    name: 'phone',
    type: 'number',
  },
  {
    placeholder: 'И-Мэйл',
    name: 'email',
    type: 'email'
  }
]

const variants = {
  hidden: { x: 10, opacity: 0.3 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.2, type: "spring" } },
  exit: { x: 110, opacity: 0, transition: { duration: 0.2, type: "spring" } },
}

export const AddUser = () => {
  const { setOpen } = useAddUser();
  return (
    <motion.div 
      className="w-full h-screen absolute inset-0 z-10 flex items-center justify-center"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', backdropFilter: 'blur(20px)' }}
      variants={variants}
      initial="hidden" 
      animate="visible" 
      exit="exit"
    >
      <div className="w-1/3 py-8 px-16 bg-white rounded-2xl">
        <div className="w-full flex flex-col gap-12 relative">
          <h1 className="font-semibold text-2xl">Жолооч бүртгэх</h1>
          <div className="w-full flex flex-col gap-5">
            {
              inputs.map((el, idx) => {
                const { type, placeholder, name } = el;
                return (
                  <input type={type} name={name} className="w-full py-3.5 px-5 text-base border rounded-md border-gray-300 outline-none" placeholder={placeholder} />
                  )
                })
              }
          </div>
          <div className="w-full flex gap-12">
            <button className="w-1/2 bg-black text-base py-3 px-7 rounded-lg hover:opacity-80 shadow-md active:shadow-black duration-200 text-white">Хадгалах</button>
            <button className="w-1/2 border-slate-700 border text-base py-3 px-7 hover:opacity-80 shadow-md active:shadow-black duration-200 rounded-lg text-black">Хаах</button>
          </div>
          <button className="absolute right-0 top-2" onClick={() => setOpen(false)}>
            <GrFormClose size={20} />
          </button>
        </div>
      </div>
    </motion.div>
  )
}
