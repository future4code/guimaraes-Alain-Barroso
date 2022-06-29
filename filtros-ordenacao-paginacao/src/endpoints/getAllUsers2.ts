import { Request, Response } from "express";
import connection from "../data/connection";

export default async function selectAllUsersType(type:String):Promise<any> {
  const result = await connection.raw(`
     SELECT id, name, email, type
     FROM aula48_exercicio where type like "%${type}%";`)

  return result[0]}
  
export const getAllUserstype = async(req: Request,res: Response): Promise<void> =>{
    let statusCode=500
  try {
    let type=req.params.type as string 
    console.log(type)
    if(!type || type==":type"|| type===":type="){
      statusCode=400
      throw new Error(" type não informado")
    }
     const users = await selectAllUsersType(type.trim())

     if(!users.length){
        res.statusCode = 404
        throw new Error("No Users type  found")
     }

     res.status(200).send(users)

  } catch (error:any) {
     console.log(error)
     res.send(error.message || error.sqlMessage)
  }
}