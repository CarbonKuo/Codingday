/*
 LeetCode 196. Delete Duplicate Emails
 Please write a DELETE statement and DO NOT write a SELECT statement.
 Write your PL/SQL query statement below
--  */
--  /* Oracle */
 Delete from Person where id not in (select min(id) id from Person GROUP BY email having count(email) > 1 )
 and id not in (select min(id) id from Person GROUP BY email having count(email) = 1)

--  /* MySQL */
DELETE p1 FROM Person p1,
    Person p2
WHERE
    p1.Email = p2.Email AND p1.Id > p2.Id
