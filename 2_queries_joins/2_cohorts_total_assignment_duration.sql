SELECT sum(assignment_submissions.duration) as total_duration
FROM assignment_submissions 
JOIN students ON students.id = student_id
JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name = 'FEB12';



SELECT students.name as student, count(assignment_submissions.*) as total_submissions
FROM assignment_submissions
WHERE students.end_date = NULL
JOIN students ON students.id = student_id
GROUP BY students.name;