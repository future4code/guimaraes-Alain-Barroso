type Person = {
    name: string, 
    age: number,
    favoriteColor: ArcoIris
}

enum ArcoIris {
    YELLOW = "Yellow",
    BLUE = "Blue",
    GREEN = "Green",
}

const firstPerson: Person = {
    name: "Pool",
    age: 35 ,
    favoriteColor: ArcoIris.YELLOW
}

const secPerson: Person = {
    name: "Anne",
    age: 30 ,
    favoriteColor: ArcoIris.BLUE
}

 console.log(firstPerson,secPerson)