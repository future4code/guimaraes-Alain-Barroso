import express from "express";
import { Request, Response } from "express";
import cors from 'cors'
import { usersData as users, USER } from "./data";
import { AddressInfo } from "net";

const app = express();
app.use(express.json());
app.use(cors());
app.post('/users/create', (req: Request, res: Response) => {
  let errorCode = 500
  try {
    const userName = req.body.name
    const userCPF = req.body.cpf
    const userBirthDate = String(req.body.birthDate)

    users.forEach(user => {
      if(user.cpf === userCPF){
        errorCode = 400
        throw new Error("CPF já cadastrado.")}});

    var date_regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
    if (!(date_regex.test(userBirthDate))) {
      errorCode = 422
      throw new Error("Formato de data incorreto. MM/DD/AAAA")}
    var cpf_regex = /^([0-9]{2}[.][0-9]{3}[.][0-9]{3}[\/][0-9]{4}[-][0-9]{2})|([0-9]{3}[.][0-9]{3}[.][0-9]{3}[-][0-9]{2})/;
    if (!(cpf_regex.test(userCPF))) {
      errorCode = 422
      throw new Error("Formato de CPF incorreto. xxx.xxx.xxx-xx")}
    if (!userName || !userCPF || !userBirthDate) {
      errorCode = 422
      throw new Error("Parâmetro inválido. Não foi possível enviar.")}

    const checkDate = (userDate: any) => {
      const userAge = new Date(userDate)
      const today = new Date();
      const day = String(today.getDate()).padStart(2, '0');
      const month = String(today.getMonth() + 1).padStart(2, '0');
      const year = String(today.getFullYear());
      const dateToday = new Date(`${month}/${day}/${year}`)
      const differenceInMS = dateToday.getTime() - userAge.getTime()
      const differenceInYears = differenceInMS / (1000 * 3600 * 24) / 365
      return differenceInYears}

    const userAge = Number(checkDate(userBirthDate))
      if (userAge < 18) {
      errorCode = 400
      throw new Error("Cadastro somente para maiores de 18 anos.")}
    const newUser: USER = {
      id: users.length + 1,
      name: userName,
      cpf: userCPF,
      birthDate: userBirthDate,
      balance: 0,
      extract: {
        value: 0,
        date: "",
        desc: ""
      }}

    users.push(newUser)
    res.status(201).send(users)}
  
    catch (err: any) {
    res.status(errorCode).end(err.message)}})



app.get('/user', (req: Request, res: Response)=>{
    let errorCode = 500
    try{
    const userName = req.body.name
    const userCPF = req.body.cpf
    if(!userCPF || !userName){
      errorCode = 422
      throw new Error("Parâmetro não enviado.")}

    const userFound = users.find(user => {
        return (user.cpf === userCPF) && (user.name === userName)});
    if(!userFound){
      errorCode = 400
      throw new Error("Nome e/ou CPF não localizados.")}
    res.status(200).send(`Saldo: R$${userFound?.balance}`)}
  catch(err:any){
    res.status(errorCode).end(err.message)}})

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Servidor rodando em http://localhost:${address.port}`)
  } else {
    console.error(`Falha ao iniciar o servidor.`)}})