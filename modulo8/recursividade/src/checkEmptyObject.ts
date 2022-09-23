function isEmpty(value: any): boolean {
    return (
      value === undefined ||
      value === null ||
      value === 0 ||
      value === "" ||
      (Array.isArray(value) && value.length === 0) ||
      (typeof value === "object" &&
        (Object.values(value!).length === 0 || checkEmptyObject(value)))
    );
  }

  export function checkEmptyObject(obj: any): boolean {
    // exemplo:
    // const obj = {
    //   name: "nome",
    //   id: "Id",
    //   number: 5
    //   }

    const values = Object.values(obj);
    // exemplo array values
    // ["nome", "id", 5]
    for (let value of values) {
      if (isEmpty(value)) {
        return true;
      }
    }
    return false;
  }