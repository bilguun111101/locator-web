import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { activeOrNot, EmployeeType } from "../type";



const Employee = ({ data }: EmployeeType) => {
    const {
        email,
        lastName, 
        firstName, 
        phoneNumber
    } = data;
    return (
        <div className="w-full p-2.5 flex bg-white items-center rounded-xl">
            <div className="w-20 h-20 overflow-hidden rounded-xl flex items-center justify-center">
                <img src="https://m.media-amazon.com/images/M/MV5BNzk0MDQ5OTUxMV5BMl5BanBnXkFtZTcwMDM5ODk5Mg@@._V1_FMjpg_UX1000_.jpg" alt="" />
            </div>
            <div className="p-2.5 flex flex-col gap-2">
                <h6 className="font-normal text-base leading-5"><strong>{ `${lastName} ${firstName}` }</strong></h6>
                <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-1">
                        <AiOutlineMail size={14} color="rgb(115 115 115)" />
                        <p className="font-normal text-xs text-neutral-500">{ email }</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <BsTelephone size={14} color="rgb(115 115 115)" />
                        <p className="font-normal text-xs text-neutral-500">{ phoneNumber }</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

type Props = {
    data: activeOrNot;
}

export const ActiveOrNot = ({ data }: Props) => {
    const { title, datas } = data;
  return (
    <div className="w-full mb-4">
        <div className="flex items-center gap-1 mb-2">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: title === 'Идэвхтэй' ? '#62C762' : "#000" }} />
            <h6>
                <strong style={{ color: title === 'Идэвхтэй' ? '#62C762' : "#000" }}>
                    { title }
                </strong>
            </h6>
        </div>
        <div className="gap-2 w-full">
            {
                datas?.map((el, idx) => <Employee data={el} key={idx} />)
            }
        </div>
    </div>
  )
}