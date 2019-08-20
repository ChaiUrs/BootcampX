
SELECT students.name, avg(assignment_submissions.duration) AS average_assignment_duration
FROM assignment_submissions
JOIN students ON students.id = student_id
WHERE end_date IS NULL
GROUP BY students.name 
ORDER BY average_assignment_duration DESC;
