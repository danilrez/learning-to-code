select date_trunc('month', created_at)::date as date,
       count(*) as count,
       round(((100.0 / (lag(count(*)) over (order by date_trunc('month', created_at)::date asc))) * count(*)) -100, 1) || '%' as percent_growth
from posts
group by date
order by date