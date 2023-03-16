import { auth, db } from "./api";
import { setDoc, doc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";

interface register_information {
    email: string
    firstName: string
    lastName: string
    phoneNumber: string | number
    password: string
    image?: string
}

export const register = async ({
    email,
    lastName,
    password,
    firstName,
    phoneNumber,
    image
}: register_information) => {
    const imagePath = image ? image : "";
    createUserWithEmailAndPassword(auth, email, password).then(async userCredential => {
        const uid = userCredential.user.uid;
        await setDoc(doc(db, 'users', uid), {
            email,
            lastName,
            firstName,
            phoneNumber,
            imagePath,
            permission: false,
            position: {
                latitude: 37.785834,
                longitude: -122.406417,
            }
        }, { merge: true });
    })
}