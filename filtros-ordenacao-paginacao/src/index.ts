import app from './app'
import connection from './data/connection'
import { Request, Response } from "express"
import { getAllUsers } from './endpoints/getAllUsers'
import { getAllUserstype } from './endpoints/getAllUsers2'

app.get("/users",getAllUsers)
app.get("/users/:type",getAllUserstype)