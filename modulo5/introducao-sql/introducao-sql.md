# Ex 01
**a) ID é uma string no banco do tipo VARCHAR. Sendo um atributo único ou chave primária;**
**b) 'SHOW DATABASE' imprime os bancos criados e 'SHOW TABLES' as tabelas criadas;**
**c) O comando ESCRIBE mostra todas as colunas e suas caracteríscas.**

# Ex 02
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1.200000,
  "1963-08-23", 
  "male"
);
Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'
**Duplicidade na entrada '002'**



Error Code: 1136. Column count doesn't match value count at row 1
**O programa recebe apenas três valores e foram passados mais valores que o limite**

INSERT INTO Actor
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);




Error Code: 1364. Field 'name' doesn't have a default value
**O campo 'name' não possui um valor padrão/default - não pode estar vazio**

INSERT INTO Actor (id,name, salary, birth_date, gender)
VALUES(
  "004",
  "Alain",
  400000,
  "1949-04-18", 
  "male"
);



Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1
**A data não foi preenchida com aspas, tendo a entrada incorreta.**
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);


INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006",   
  "Cláudia Rodrigues",
  300000,
  "1970-06-07", 
  "female"
);

# Ex 03
SELECT * from Actor WHERE gender = "female";

SELECT salary from Actor WHERE name = "Tony Ramos";

SELECT * from Actor WHERE gender = "invalid";
**O programa não retornou pois não existe atores com o gênero informado.**

SELECT id, name,salary from Actor WHERE salary < 500000;

**Nome da coluna incorreto**
SELECT id, name from Actor WHERE id = "002";

# Ex 04

UPDATE Actor SET gender="female",salary=1200000 WHERE id = "002";
DELETE FROM Actor WHERE id="004";
