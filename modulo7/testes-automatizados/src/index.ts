
Viewed
@@ -0,0 +1,21 @@

export const isEven = (n: number): any => { 
   return n % 2 === 0;
}

export const myAsyncFunc = async ():Promise<string> => {
   return "response";
};

export const login = async (password: string): Promise<any> => {

   if (password !== "senha correta"){
      throw new Error("A senha está incorreta")
   }

   return {
      id: 1,
      name: "teste"
   }

} 