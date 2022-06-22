import { connection } from "./connection"
import { app }from "./app"
import { Request, Response } from "express"


const getActorById = async (id: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE id = '${id}'
  `)

	return result[0][0]
}

getActorById("001")
	.then(result => {
		console.log(result)})
	.catch(err => {
		console.log(error)})


(async () => {
  console.log(await getActorById("001") )
})()


app.get("/users/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    console.log(await getActorById(id))
    
    res.end()
  } catch (error: any) {
		console.log(error.message)
    res.status(500).send("Unexpected error")
  }})