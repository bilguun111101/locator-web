import { AiOutlineMail } from "react-icons/ai";

interface EmployeeType {
    element: {
        name: string,
        email: string,
        phone: string | number,
    }
}

const Employee = () => {
    // const { name, email, phone } = props.element;
    const element = [false, false];
    return (
        <div className="w-full p-2.5 flex bg-white">
            <img src="" alt="" className="w-20 h-20 rounded" />
            <div className="p-2.5 flex-col gap-2">
                <h6>Баярсайхан Тэргэлтэнгис</h6>
                <div className="gap-1">
                    <div className="flex items-center gap-1">
                        <AiOutlineMail size={10} />
                        <p>nasaa@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const ActiveOrNot = () => {
  return (
    <div className="w-full gap-3.5">
        <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-50" />
            <h6>
                <strong>
                    Идэвхтэй
                </strong>
            </h6>
        </div>
        <div className="gap-2 w-full">
            <Employee />
        </div>
    </div>
  )
}