# Challenge: Two actors who cast together the most

### Details:

Given the the schema presented below find two actors who cast together the most and list titles of only those movies they were casting together. Order the result set alphabetically by the movie title.

#### Table film_actor

| Column   | Type     | Modifiers |
| -------- | -------- | --------- |
| actor_id | smallint | not null  |
| film_id  | smallint | not null  |
| ...      |          |           |

#### Table actor

| Column     | Type                  | Modifiers |
| ---------- | --------------------- | --------- |
| actor_id   | integer               | not null  |
| first_name | character varying(45) | not null  |
| last_name  | character varying(45) | not null  |
| ...        |                       |           |

#### Table film

| Column  | Type                   | Modifiers |
| ------- | ---------------------- | --------- |
| film_id | integer                | not null  |
| title   | character varying(255) | not null  |
| ...     |                        |           |

#### The desired output:

| first_actor | second_actor | title               |
| ----------- | ------------ | ------------------- |
| John Doe    | Jane Doe     | The Best Movie Ever |
| ...         |              |                     |

- `first_actor` - Full name _(First name + Last name separated by a space)_
- `second_actor` - Full name _(First name + Last name separated by a space)_
- `title` - Movie title

**_Note:_** _`actor_id` of the first_actor should be lower then `actor_id` of the second_actor_

### Solutions:

[<img src="https://github.com/CrappyCodeMaker/Training-How-to-Code/blob/master/images/logo/sql.svg" height="24px" alt="SQL">](https://github.com/CrappyCodeMaker/Training-How-to-Code/blob/master/levels/4/Two%20actors%20who%20cast%20together%20the%20most/Solutions/SQL.sql)
