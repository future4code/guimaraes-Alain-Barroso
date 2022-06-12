export type USER = {
    cpf:string,
    birthDate:string,
    id:number,
    name:string,
    balance:number,
    extract: EXTRACT}

type EXTRACT ={
    value:number,
    date:string,
    desc:string}

export const usersData:USER[]=[
    {
        id: 1,
        name: "Alain Christian",
        cpf: "122.344.544.78",
        birthDate: "17/03/1999",
        balance:321,
        extract: {
            value: 0,
            date: "",
            desc: ""}},
    
    {
        id: 2,
        name: "Elon Musk",
        cpf: "988.766.544.32",
        birthDate: "28/06/1971",
        balance:0,
        extract: {
            value: 0,
            date: "",
            desc: ""}},
    
    {
        id: 3,
        name: "Steve Jobs",
        cpf: "123.456.789.01",
        birthDate: "24/06/1955",
        balance:24061955,
        extract: {
            value: 0,
            date: "",
            desc: ""}},
    
    {
        id: 4,
        name: "Bill Gates",
        cpf: "281.101.195.50",
        birthDate: "28/10/1955",
        balance:28101955,
        extract: {
            value: 0,
            date: "",
            desc: ""}},

    {
        id: 5,
        name: "Warren Buffett",
        cpf: "190.442.555.10",
        birthDate: "30/08/1930",
        balance:9950,
        extract: {
            value: 0,
            date: "",
            desc: ""}},
]