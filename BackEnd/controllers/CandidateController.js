const pool = require('../database/Db');
const {AgeFromDateString } = require('age-calculator');

const insertCandidateData = async (req, res) => {
  try {
    const candidateData = req.body;

    const {
      "Candidate Name:": candidateName,
      "Birth date:": birthDate,
      "Gender:": gender,
      "State ": state,
      "Education:": education,
      "University:": university,
      "Total Experience in Years": totalExperience,
      "Technology": technology,
      "Email ID": email,
      "Personal Contact Number": contactNumber,
      "End Client": endClient,
      "Interview Round 1st 2nd  3rd  or Final round": interview_round,
      "Job Title in JD": jobTitle,
      "Data and Time of Interview (Mention time zone)": interviewDateTime,
      "Duration": duration,
      "subject_line":task
    } = candidateData;

    // Convert gender name to lowercase

    const lowerCaseGender = gender.toLowerCase();

    // Fetch gender_id and state_id from the gender and state tables
    const genderQuery = "SELECT gender_id FROM gender WHERE gender_name = $1";
    const genderResult = await pool.query(genderQuery, [lowerCaseGender]);
    const genderID = genderResult.rows[0]?.gender_id;

    const stateQuery = "SELECT state_id FROM state WHERE state_name = $1 OR acronym = $1";
    const stateResult = await pool.query(stateQuery, [state]);
    const stateID = stateResult.rows[0]?.state_id;

   const age = new AgeFromDateString (birthDate).age;

    // Insert into candidates table
    const insertCandidatesQuery = `
      INSERT INTO candidates (
        candidate_name,
        candidate_phone,
        candidate_email,
        gender_id,
        age,
        education,
        university,
        technology,
        total_experience_year,
        state_id
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
      RETURNING candidate_id;
    `;

    const insertCandidatesValues = [
      candidateName,
      contactNumber,
      email,
      genderID,
      age,
      education,
      university,
      technology,
      totalExperience,
      stateID,
    ];
     
    
    const candidateResult = await pool.query(insertCandidatesQuery, insertCandidatesValues);
    const candidateID = candidateResult.rows[0]?.candidate_id;

    const checkCompanyQuery = "SELECT company_id FROM companies WHERE company_name = $1";
    const checkCompanyResult = await pool.query(checkCompanyQuery, [endClient]);
  
    
    let companyID;
    if (checkCompanyResult.rows.length > 0) {
      // Company already exists, get its ID
     companyID = checkCompanyResult.rows[0].company_id;
    } else {
      // Insert into companies table
      const insertCompaniesQuery = `
        INSERT INTO companies (company_name)
        VALUES ($1)
        RETURNING company_id;
      `;

      const insertCompaniesValues = [endClient];

      const insertCompanyResult = await pool.query(insertCompaniesQuery, insertCompaniesValues);
      companyID = insertCompanyResult.rows[0]?.company_id;
    }

    const taskTypeQuery = "SELECT task_type_id FROM task_type WHERE task_type_name = $1";
    const taskTypeResult = await pool.query(taskTypeQuery, [task]);
    const taskTypeID = taskTypeResult.rows[0]?.task_type_id;

    const insertMainTableQuery = `
    INSERT INTO main (candidate_id, company_id, task_type_id, job_title, interview_round, date_time_timezone, duration_in_hours)
    VALUES ($1, $2, $3, $4, $5, $6, $7);
    `;

    const insertMainTableValues = [candidateID, companyID , taskTypeID, jobTitle, interview_round, interviewDateTime, duration];
    await pool.query(insertMainTableQuery, insertMainTableValues);

    res.status(200).json({
      success: true,
      message: "Candidate data inserted successfully.",
    });
  } catch (error) {
    console.error("Error inserting candidate data:", error);
    res.status(500).json({
      success: false,
      error: "Internal Server Error",
    });
  }
};


const getCandidates = async (req, res) => {
  try {
    const query = `
      SELECT
        c.candidate_id,
        c.candidate_name,
        c.candidate_phone,
        c.candidate_email,
        g.gender_name, -- Use gender_name from the joined table
        c.age,
        c.education,
        c.university,
        c.technology,
        c.total_experience_year,
        s.state_name -- Use state_name from the joined table
      FROM candidates c
      LEFT JOIN gender g ON c.gender_id = g.gender_id
      LEFT JOIN state s ON c.state_id = s.state_id;
    `;

    const result = await pool.query(query);

    res.status(200).json({
      success: true,
      data: result.rows,
    });
  } catch (error) {
    console.error('Error fetching candidates:', error);
    res.status(500).json({
      success: false,
      error: 'Internal Server Error',
    });
  }
};

const getMainDetails = async (req, res) => {
  try {
    const query = `
      SELECT
        m.main_id,
        c.candidate_name,
        co.company_name,
        m.job_title,
        m.interview_round,
        m.date_time_timezone,
        m.duration_in_hours,
        tt.task_type_name,
        u.user_name,
        a.acknowledge_name
      FROM main m
      LEFT JOIN candidates c ON m.candidate_id = c.candidate_id
      LEFT JOIN companies co ON m.company_id = co.company_id
      LEFT JOIN task_type tt ON m.task_type_id = tt.task_type_id
      LEFT JOIN users u ON m.user_id = u.user_id
      LEFT JOIN task_acknowledgement a ON m.acknowledge_id = a.acknowledge_id;
    `;

    const result = await pool.query(query);

    res.status(200).json({
      success: true,
      data: result.rows,
    });
  } catch (error) {
    console.error('Error fetching main details:', error);
    res.status(500).json({
      success: false,
      error: 'Internal Server Error',
    });
  }
};


module.exports = {
  insertCandidateData,
  getCandidates,
  getMainDetails
};