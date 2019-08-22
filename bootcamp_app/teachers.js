
const { Pool } = require('pg');

const pool = new Pool ({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const cohortName = process.argv[2];
const limit = process.argv[3] || 5;
// Store all potentially malicious values in an array.
const values = ['%' + cohortName + '%'];

pool.connect((err) => {
  if (err) throw err;
  console.log('connected to database');

pool.query(`
SELECT distinct teachers.name AS teacher, cohorts.name AS cohort
FROM assistance_requests
JOIN teachers ON teachers.id = teacher_id
JOIN students ON students.id = student_id
JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name LIKE $1
ORDER BY teacher;
`, values)
.then(res => {
  res.rows.forEach(user => {
    console.log(`${user.cohort} has a teacher ${user.teacher}`);
  });
})
.catch(err => console.error('query error', err.stack));

});

