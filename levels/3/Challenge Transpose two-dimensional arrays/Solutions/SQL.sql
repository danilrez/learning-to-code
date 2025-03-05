SELECT ARRAY (
              SELECT ARRAY (
                            SELECT matrix[x][y]
                            FROM (SELECT generate_subscripts(matrix, 1) AS x) AS rows
                           )
              FROM (SELECT generate_subscripts(matrix, 2) AS y) AS columns
             ) as matrix
FROM public.matrices;