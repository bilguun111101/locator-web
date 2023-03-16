import { useState } from "react";
import { motion } from "framer-motion"
import { GrFormClose } from 'react-icons/gr';
import { useAddUser } from "../../../context";
import { register } from "../../../firebase/register";

const variants = {
  hidden: { x: 10, opacity: 0.3 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.2, type: "spring" } },
  exit: { x: 110, opacity: 0, transition: { duration: 0.2, type: "spring" } },
}

export const AddUser = () => {
  const { setOpen } = useAddUser();
  const 
  [email, setEmail] = useState<string>(""),
  [lastName, setLastName] = useState<string>(""), 
  [password, setPassword] = useState<string>(""),
  [firstName, setFirstName] = useState<string>(""), 
  [phoneNumber, setPhoneNumber] = useState<string>("");

  const save = (): void => {
    const data = { email, lastName, password, firstName, phoneNumber };
    if(!email || !lastName || !password || !firstName || !phoneNumber) return;
    register(data)
    setOpen(false)
  }

  const inputs = [
    {
      placeholder: 'Овог',
      name: 'lastName',
      type: 'text',
      onChange: (el: any) => setLastName(el.target.value),
      value: lastName
    },
    {
      placeholder: 'Нэр',
      name: 'firstName',
      type: 'text',
      onChange: (el: any) =>  setFirstName(el.target.value),
      value: firstName
    },
    {
      placeholder: 'Утасны дугаар',
      name: 'phone',
      type: 'number',
      onChange: (el: any) => setPhoneNumber(el.target.value),
      value: phoneNumber,
    },
    {
      placeholder: 'И-Мэйл',
      name: 'email',
      type: 'email',
      onChange: (el: any) => setEmail(el.target.value),
      value: email
    },
    {
      placeholder: 'Нууц үг',
      name: 'password',
      type: 'password',
      onChange: (el: any) => setPassword(el.target.value),
      value: password
    },
  ]
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
                const { type, placeholder, name, value, onChange } = el;
                return (
                  <input type={type} value={value} onChange={onChange} name={name} className="w-full py-3.5 px-5 text-base border rounded-md border-gray-300 outline-none" placeholder={placeholder} />
                  )
                })
              }
          </div>
          <div className="w-full flex gap-12">
            <button className="w-1/2 bg-black text-base py-3 px-7 rounded-lg hover:opacity-80 shadow-md active:shadow-black duration-200 text-white" onClick={save}>Хадгалах</button>
            <button className="w-1/2 border-slate-700 border text-base py-3 px-7 hover:opacity-80 shadow-md active:shadow-black duration-200 rounded-lg text-black" onClick={() => setOpen(false)}>Хаах</button>
          </div>
          <button className="absolute right-0 top-2" onClick={() => setOpen(false)}>
            <GrFormClose size={20} />
          </button>
        </div>
      </div>
    </motion.div>
  )
}
