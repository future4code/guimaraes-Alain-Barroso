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
exports.getAddressInfo = void 0;
const axios_1 = __importDefault(require("axios"));
const baseUrl = "https://viacep.com.br/ws";
const getAddressInfo = (zipcode) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.get(`${baseUrl}/${zipcode}/json/`);
        const address = {
            state: response.data.uf,
            city: response.data.localidade,
            district: response.data.bairro,
            street: response.data.logradouro
        };
        return address;
    }
    catch (error) {
        console.error("Erro no serviço getAddressInfo: ", error);
        return null;
    }
});
exports.getAddressInfo = getAddressInfo;