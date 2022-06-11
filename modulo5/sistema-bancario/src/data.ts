export type USER = {
    id:number,
    name:string,
    cpf:string,
    birthDate:string,
    balance:number,
    extract: EXTRACT
}

type EXTRACT ={
    value:number,
    date:string,
    desc:string
}

export const usersData:USER[]=[
    {
        id: 1,
        name: "João Siqueira",
        cpf: "111.111.111-11",
        birthDate: "08/07/1987",
        balance:1340,
        extract: {
            value: 0,
            date: "",
            desc: ""
        }
    },
    {
        id: 2,
        name: "Alice Silva",
        cpf: "222.222.222-22",
        birthDate: "04/12/1954",
        balance:438,
        extract: {
            value: 0,
            date: "",
            desc: ""
        }
    },
    {
        id: 3,
        name: "Bruno Silveira",
        cpf: "333.333.333-33",
        birthDate: "05/04/2002",
        balance:0,
        extract: {
            value: 0,
            date: "",
            desc: ""
        }
    },
]