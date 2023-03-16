export type UserData = {
    id?: string;
    email?: string;
    firstName?: string;
    imagePath?: string;
    lastName?: string;
    phoneNumber?: string;
    permission?: boolean;
    position?: {
        latitude?: number;
        longitude?: number;
    }
}