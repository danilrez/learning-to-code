WITH top_pair AS
 (SELECT a1.actor_id AS id1, a2.actor_id AS id2
		FROM film_actor a1
	    INNER JOIN film_actor a2 ON a1.film_id = a2.film_id
	 WHERE a1.actor_id <> a2.actor_id
	 GROUP BY a1.actor_id, a2.actor_id
	 ORDER BY COUNT(a1.film_id) DESC LIMIT 1)

SELECT (SELECT first_name || ' ' || last_name FROM actor WHERE actor_id = tp.id1) AS first_actor,
			 (SELECT first_name || ' ' || last_name FROM actor WHERE actor_id = tp.id2) AS second_actor,
			 f.title AS title
FROM top_pair tp
  INNER JOIN film_actor fa1 ON tp.id1 = fa1.actor_id
  INNER JOIN film_actor fa2 ON tp.id2 = fa2.actor_id
  INNER JOIN film f ON fa1.film_id = f.film_id AND fa2.film_id = f.film_id