# Making a changelog

### Link:

> www.codewars.com/kata/5eaecb855179590011d2c020

### Details:

Your job is working with documents: creating, modifying, and deleting them. It is a very important task, so you must also keep a changelog of performed operations. Updating it manually every time is very tedious, so you decided to automate the job.

You have to do something, so that all the changes done on the `documents` table are reflected in the `documents_changelog` table:

1. On insert copy the new data into the `new_data` column
1. On update copy the previous data into the `old_data` and the new data into the `new_data` columns
1. On delete copy the old data into the `old_data` column
1. If the operation has no new/old data to work with, the respective column should store `NULL`

#### Tables

| Table | Column | Type |
|---------------------+-------------+------|
| documents | id | int |
| | data | text |
|---------------------+-------------+------|
| documents_changelog | id | int |
| | document_id | int |
| | old_data | text |
| | new_data | text |

### Solutions:

[SQL](https://github.com/CrappyCodeMaker/CODEWARS/blob/main/7%20kyu/Evens%20and%20Odds/Solution/JS.js)
