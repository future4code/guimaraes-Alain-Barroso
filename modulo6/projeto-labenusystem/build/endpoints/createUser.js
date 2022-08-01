"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Address_1 = require("../types/Address");
const connection_1 = __importDefault(require("../connection"));
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const baseUrl = "http://localhost:3003";
app.post(`${baseUrl}/turmas`, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const turma = new Address_1.Turma(Date.now().toString(), req.body.nome, req.body.modulo);
    console.log(turma);
    try {
        yield (0, connection_1.default)("turma")
            .insert({
            turma
        });
        res.send("Success!");
    }
    catch (error) {
        console.error("Erro", error);
        return null;
    }
}));