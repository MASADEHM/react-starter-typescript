export interface ILoginRequest {
    email: string,
    password: string
}
export interface ILoginReponse {
    code: number
    message: string
    data: Data
}

export interface Data {
    Id: number
    Name: string
    Email: string
    Token: string
}