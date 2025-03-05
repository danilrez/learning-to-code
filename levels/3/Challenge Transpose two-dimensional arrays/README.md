# Challenge: Transpose two-dimensional arrays

### Details:

Given a table with a following schema

#### Table "public.matrices"

| Column | Type   | Modifiers |
| ------ | ------ | --------- |
| matrix | text[] | not null  |

which holds a set of two-dimensional text arrays i.e.

#### matrix

```
 {{1,2,3},{4,5,6}}
 {{a,b,c},{d,e,f}}
```

_(2 rows)_

your goal is to wite a SELECT statement or a CTE that returns array data in a transposed form

#### matrix

```
 {{1,4},{2,5},{3,6}}
 {{a,d},{b,e},{c,f}}
```

_(2 rows)_

You can't use / create user definded functions and resort to procedural PL/pgSQL.

### Solutions:

[<img src="https://github.com/CrappyCodeMaker/Training-How-to-Code/blob/master/images/logo/sql.svg" height="24px" alt="SQL">](https://github.com/CrappyCodeMaker/Training-How-to-Code/blob/master/levels/3/Challenge%20Transpose%20two-dimensional%20arrays/Solutions/SQL.sql)
