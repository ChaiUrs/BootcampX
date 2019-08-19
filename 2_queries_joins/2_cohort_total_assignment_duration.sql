
SELECT sum(assignments_submissions.duration) as total_duration
FROM assignments_submissions
JOIN students ON students.id = student_id
JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name = 'FEB12';
