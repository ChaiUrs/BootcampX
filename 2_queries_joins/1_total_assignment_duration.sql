
SELECT sum(assignments_submissions.duration) as total_duration
FROM assignments_submissions
JOIN students ON students.id = student_id
WHERE students.name = 'Ibrahim Schimmel';
