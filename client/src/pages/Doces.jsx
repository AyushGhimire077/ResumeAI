import React from "react";

const DocsPage = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 text-gray-100 ">
      <h1 className="text-4xl font-bold text-center text-cyan-700 mb-8">
        Resume Generator - Documentation
      </h1>

      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold text-cyan-700">
            How to Use the Resume Generator
          </h2>
          <p className="text-lg">
            Welcome to the Resume Generator! Our tool helps you create a
            professional resume in few seconds. To get started, simply follow the
            steps below to generate a resume that will stand out to employers.
          </p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Click the "Create Resume" button on the homepage.</li>
            <li>Provide the information required to generate your resume.</li>
            <li>Download your resume in PDF format.</li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-cyan-700">
            Things you should add to Generate a Great Resume
          </h2>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">1. Personal Information</h3>
            <p>Provide the following personal details:</p>
            <ul className="list-disc pl-6">
              <li>Full Name</li>
              <li>Email Address</li>
              <li>Phone Number</li>
              <li>LinkedIn Profile (Optional)</li>
              <li>Portfolio/Website (Optional)</li>
            </ul>
            <p className="text-sm text-gray-500">
              Tip: Make sure your contact information is accurate and up to
              date.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">
              2. Career Objective or Summary
            </h3>
            <p>
              Write a brief career summary or objective that showcases your
              skills and aspirations.
            </p>
            <p className="text-sm text-gray-500">
              Tip: Keep it concise and tailored to the job you're applying for.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">3. Work Experience</h3>
            <p>Provide details of your past job roles, including:</p>
            <ul className="list-disc pl-6">
              <li>Company Name</li>
              <li>Job Title</li>
              <li>Duration (Start & End Dates)</li>
              <li>Responsibilities and Achievements</li>
            </ul>
            <p className="text-sm text-gray-500">
              Tip: Focus on quantifiable accomplishments and key
              responsibilities.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">4. Education</h3>
            <p>Provide your educational background, including:</p>
            <ul className="list-disc pl-6">
              <li>School/University Name</li>
              <li>Degree</li>
              <li>Graduation Year</li>
              <li>Relevant Coursework (Optional)</li>
            </ul>
            <p className="text-sm text-gray-500">
              Tip: If you have more work experience, prioritize that over
              education.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">5. Skills</h3>
            <p>
              List both hard and soft skills that are relevant to the role
              you're applying for.
            </p>
            <ul className="list-disc pl-6">
              <li>
                Technical Skills (e.g., programming languages, frameworks)
              </li>
              <li>
                Soft Skills (e.g., communication, teamwork, problem-solving)
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">
              6. Certifications and Awards (Optional)
            </h3>
            <p>
              Include any certifications, awards, or honors you've received that
              are relevant to the job.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">7. Projects (Optional)</h3>
            <p>List relevant projects you've worked on, along with:</p>
            <ul className="list-disc pl-6">
              <li>Project Title</li>
              <li>Project Description</li>
              <li>Link to the project (e.g., GitHub repository)</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">
              8. Additional Sections (Optional)
            </h3>
            <p>You can include extra sections such as:</p>
            <ul className="list-disc pl-6">
              <li>Languages</li>
              <li>Volunteer Experience</li>
              <li>Hobbies and Interests</li>
            </ul>
            <p className="text-sm text-gray-500">
              Tip: Only include these sections if they're relevant to the
              position or company culture.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-cyan-700">
            Resume Templates
          </h2>
          <p>
            Choose from a variety of professionally designed templates tailored
            to different industries.
          </p>
          <p className="text-sm text-gray-500">
            Tip: Select a template that aligns with the role you're applying
            for. For creative roles, use a dynamic template; for corporate
            roles, stick to a clean, traditional style.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-cyan-700">
            Preview and Download
          </h2>
          <p>
            After completing the form, you'll have the option to preview your
            resume and download it as a PDF or Word document.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-cyan-700">FAQs</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Q:</strong> What if I don't have all the required
              information? <br /> <strong>A:</strong> You can save your progress
              and come back later.
            </li>
            <li>
              <strong>Q:</strong> Can I edit my resume after downloading it?{" "}
              <br /> <strong>A:</strong> Yes! You can edit it in Microsoft Word
              or Google Docs.
            </li>
            <li>
              <strong>Q:</strong> Are my data and resume secure? <br />{" "}
              <strong>A:</strong> Yes, your information is stored securely and
              not shared with third parties.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-cyan-700">Contact Us</h2>
          <p>If you need assistance, feel free to reach out to us:</p>
          <ul>
            <li>
              Email:{" "}
              <a
                href="mailto:support@resumegenerator.com"
                className="text-cyan-700"
              >
                ayushghimire077@gmail.com
              </a>
            </li>
            <li>
              Phone: <span className="text-cyan-700">+977 9810534413</span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default DocsPage;
