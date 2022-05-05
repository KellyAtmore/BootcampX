const { Pool } = require('pg');

const pool = new Pool({
  user: 'kellyatmore',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

// Store all user terminal input into variables
const cohortName = process.argv[2];
const values = [`${cohortName}`];

const queryString = `
SELECT DISTINCT teachers.name AS teacher, cohorts.name AS cohort
FROM teachers
JOIN assistance_requests ON teachers.id = teacher_id
JOIN students ON students.id = student_id
JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name = $1
ORDER BY teacher; 
`;

// SQL QUERY
pool.query(queryString, values)
  .then(res => {
    res.rows.forEach(row => {
      console.log(`${row.cohort}: ${row.teacher}`);
    });
  });




