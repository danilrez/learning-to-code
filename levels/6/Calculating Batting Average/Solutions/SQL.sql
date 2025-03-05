SELECT
  player_name,
  games,
  ROUND(hits::numeric / at_bats, 3)::text batting_average
FROM yankees
WHERE at_bats >= 100 ORDER BY 3 DESC