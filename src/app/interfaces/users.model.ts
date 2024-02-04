export interface IUserData {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: IUserInfo[];
}

export interface IUserInfo {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

export interface ICreateUser{
    name : string;
    job : string;
}

export interface ILoginRegister{
    email : string;
    password : string;
}