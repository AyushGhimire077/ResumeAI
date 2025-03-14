import React, { useContext, useEffect, useState } from "react";
import { ResumeContext } from "../resumeContext/resumeContext.jsx";
import html2pdf from "html2pdf.js";
import '../customResume/custom1.css';

const ResumeGenerator = () => {
  const { isLoading: loading, resume, resumeInfo } = useContext(ResumeContext);
  const [userInfo, setUserInfo] = useState("");

  useEffect(() => {
    console.log(resume); 
  }, [resume]);

  const handleChange = (e) => {
    setUserInfo(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    resumeInfo(userInfo);
  };

const generatedPDF = () => {
  const element = document.querySelector(".resume-page");
  const customWidth = 20;
  const customHeight = 20;
  
  element.style.gap = "6px";

  const options = {
    margin: 0.5,
    filename: "resume.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 3 },
    jsPDF: { unit: "cm", orientation: "portrait", format: [customWidth, customHeight] },
  };
  html2pdf().from(element).set(options).save();
};


  return (
    <div className="container">
      {/* Input Form */}
      <div className="form-container">
        <h2>Your resume information</h2>
        <form onSubmit={handleSubmit}>
          <textarea
            value={userInfo}
            onChange={handleChange}
            placeholder="Johna Bruh, 2 years of expercience (Eduation,Projects,Certifications)....."
            rows="6"
            cols="50"
          />
          <br />
          <button type="submit" disabled={loading} className="generate-button">
            {loading ? "Generating Resume..." : "Generate Resume"}
          </button>
        </form>
      </div>


      {/* Display Resume */}
      {resume && (
        <div className="resume-container">
          <div className="resume-page">
            {/* Profile Section */}
            <div className="upper-info">
              <h2>{resume.name}</h2>
              <div className="upper-more-info">
                <div className="upper-left-info">
                  {resume.email && (
                    <p>
                      <span>
                        {resume.email}, +977 {resume.phone}
                      </span>
                    </p>
                  )}
                  <div>{resume.location && <p>{resume.location}</p>}</div>
                </div>
                <div className="upper-right-info">
                  {resume.links?.linkedin && (
                    <p>
                      <a
                        href={resume.links.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        LinkedIn
                      </a>
                    </p>
                  )}
                  {resume.links?.github && (
                    <p>
                      <a
                        href={resume.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub
                      </a>
                    </p>
                  )}
                  {resume.links?.portfolio && (
                    <p>
                      <a
                        href={resume.links.portfolio}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Portfolio
                      </a>
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Summary */}
            {resume.summary && (
              <div className="summary">
                <h3>Summary</h3>
                <p>{resume.summary}</p>
              </div>
            )}

            {/* Technical Skills */}
            {resume.technicalSkills && (
              <div className="technical-skills">
                <h3>Technical Skills</h3>
                <div className="skills-divider">
                  {resume.technicalSkills.Frontend?.length > 0 && (
                    <div className="tech">
                      <h4>Frontend:</h4>
                      <p>
                        {resume.technicalSkills.Frontend.map((skill, index) => (
                          <span key={index}>{skill},</span>
                        ))}
                      </p>
                    </div>
                  )}
                  {resume.technicalSkills.Backend?.length > 0 && (
                    <div className="tech">
                      <h4>Backend:</h4>
                      <p>
                        {resume.technicalSkills.Backend.map((skill, index) => (
                          <span key={index}>{skill},</span>
                        ))}
                      </p>
                    </div>
                  )}
                  {resume.technicalSkills.Database?.length > 0 && (
                    <div className="tech">
                      <h4>Database:</h4>
                      <p>
                        {resume.technicalSkills.Database.map((skill, index) => (
                          <span key={index}>{skill},</span>
                        ))}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Professional Experience */}
            {resume.professionalExperience?.length > 0 && (
              <div className="professional-experience">
                <h3>Professional Experience</h3>
                {resume.professionalExperience.map((exp, index) => (
                  <div key={index} className="experience">
                    <h4>
                      {exp.title} at {exp.company}
                    </h4>
                    <p>
                      {exp.dates}  {exp.location}
                    </p>
                    {exp.responsibilities?.length > 0 && (
                      <span>
                        {exp.responsibilities.map((resp, index) => (
                          <li key={index}>{resp}</li>
                        ))}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Education */}
            {resume.education?.length > 0 && (
              <div className="education">
                <h3>Education</h3>
                {resume.education.length > 1 ? (
                  <p>Graduated from {resume.education[0].institution}</p>
                ) : (
                  <p>Graduated from {resume.education[0].institution}</p>
                )}
                {resume.education.map((edu, index) => (
                  <div key={index}>
                    <h4>
                      {edu.degree} - {edu.institution}
                    </h4>
                  </div>
                ))}
              </div>
            )}

            {/* Certifications */}
            {resume.certifications?.length > 0 && (
              <div className="certifications">
                <h3>Certifications</h3>
                {resume.certifications.map((cert, index) => (
                  <div key={index}>
                    <h4>
                      {cert.name} - {cert.organization}
                    </h4>
                    <p>
                      Issued: {cert.dateIssued} | Expiration:{" "}
                      {cert.expirationDate}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Projects */}
            {resume.projects?.length > 0 && (
              <div className="projects">
                <h3>Projects</h3>
                {resume.projects.map((project, index) => (
                  <div key={index}>
                    <h4>{project.name}</h4>
                    <p>{project.description}</p>
                    <p>
                      <span>Technologies: </span>
                      {project.technologies?.join(", ")}
                    </p>
                    {project.links?.github && (
                      <p>
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          GitHub
                        </a>{" "}
                      </p>
                    )}
                    {project.links?.live && (
                      <p>
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Live Demo
                        </a>
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Languages */}
            {resume.languages?.length > 0 && (
              <div className="languages">
                <h3>Languages</h3>
                {resume.languages.map((lang, index) => (
                  <div key={index}>
                    <p>
                      {lang.language} - {lang.proficiency}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Volunteer Experience */}
            {resume.volunteerExperience?.length > 0 && (
              <div className="volunteer-experience">
                <h3>Volunteer Experience</h3>
                {resume.volunteerExperience.map((vol, index) => (
                  <div key={index}>
                    <h4>
                      {vol.role} at {vol.organization}
                    </h4>
                    <p>{vol.dates}</p>
                    {vol.description && <p>{vol.description}</p>}
                  </div>
                ))}
              </div>
            )}

            {/* Awards */}
            {resume.awards?.length > 0 && (
              <div className="awards">
                <h3>Awards</h3>
                {resume.awards.map((award, index) => (
                  <div key={index}>
                    <h4>
                      {award.award} - {award.organization}
                    </h4>
                    <p>{award.date}</p>
                    {award.description && <p>{award.description}</p>}
                  </div>
                ))}
              </div>
            )}

            {/* portfolio */}
            {resume.protfolio && (
              <div className="portfolio">
                <h3>Portfolio</h3>
                <p>{resume.protfolio}</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* dummy resume */}
      {!resume && (
        <div className="resume-container">
          <div className="resume-page">
            {/* Profile Section */}
            <div className="upper-info">
              <h2>Ayush</h2>
              <div className="upper-more-info">
                <div className="upper-left-info">
                  <p>
                    <span>ayush.dev@gmail.com, +977 9876543210</span>
                  </p>
                  <div>
                    <p>Kathmandu, Nepal</p>
                  </div>
                </div>
                <div className="upper-right-info">
                  <p>
                    <a
                      href="https://linkedin.com/in/ayush"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                    </a>
                  </p>
                  <p>
                    <a
                      href="https://github.com/ayushdev"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  </p>
                  <p>
                    <a
                      href="https://ayush.dev"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Portfolio
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="summary">
              <h3>Summary</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem consectetur
                distinctio aut, pariatur perferendis mollitia corporis fuga, explicabo rerum fugit
                repellat! Neque corrupti ea voluptas laborum voluptates perspiciatis iure eligendi.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit libero nisi facilis
                voluptate in repudiandae repellendus consectetur veniam facere? Voluptatum molestiae
                rem sequi dolores neque, est hic voluptas incidunt dolorum.
              </p>
            </div>

            {/* Technical Skills */}
            <div className="technical-skills">
              <h3>Technical Skills</h3>
              <div className="skills-divider">
                <div className="tech">
                  <h4>Frontend:</h4>
                  <p>
                    React.js, Redux, Tailwind CSS, Framer Motion, React Query,
                    Axios
                  </p>
                </div>
                <div className="tech">
                  <h4>Backend:</h4>
                  <p>Node.js, Express.js, Socket.io, JWT, Bcrypt.js, Cors</p>
                </div>
                <div className="tech">
                  <h4>Database:</h4>
                  <p>MongoDB, Mongoose</p>
                </div>
                <div className="tech">
                  <h4>Utilities & Tools:</h4>
                  <p>Lodash, Dotenv, ESLint & Prettier, Jest / Mocha & Chai</p>
                </div>
              </div>
            </div>

            {/* Professional Experience */}
            <div className="professional-experience">
              <h3>Professional Experience</h3>
              <div className="experience">
                <h4>Freelance Web Developer</h4>
                <p>2023 - Present | Remote</p>
                <ul>
                  <li>
                    Developed full-stack web applications for various clients.
                  </li>
                  <li>
                    Implemented secure authentication and real-time features.
                  </li>
                  <li>
                    Optimized web applications for performance and scalability.
                  </li>
                </ul>
              </div>
            </div>

            {/* Projects */}
            <div className="projects">
              <h3>Projects</h3>
              <div>
                <h4>MernChat-LiveChat</h4>
                <p>
                  A real-time chat application for strangers with
                  authentication, typing indicators, and image upload.
                </p>
                <p>Technologies: MERN Stack, Socket.io, Cloudinary</p>
                <p>
                  <a
                    href="https://github.com/ayushdev/mernchat"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </p>
              </div>
              <div>
                <h4>E-Commerce Admin Panel</h4>
                <p>
                  A feature-rich admin panel for managing products, orders, and
                  users with full CRUD functionality.
                </p>
                <p>Technologies: React.js, Node.js, Express.js, MongoDB</p>
                <p>
                  <a
                    href="https://github.com/ayushdev/ecommerce-admin"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </p>
              </div>
            </div>

            {/* Education */}
            <div className="education">
              <h3>Education</h3>
              <div>
                <h4>Bachelor of Computer Science</h4>
                <p>XYZ University, 2023</p>
              </div>
            </div>

            {/* Certifications */}
            <div className="certifications">
              <h3>Certifications</h3>
              <div>
                <h4>Full-Stack Web Development</h4>
                <p>Issued by ABC Institute, 2023</p>
              </div>
            </div>

            {/* Languages */}
            <div className="languages">
              <h3>Languages</h3>
              <p>English - Fluent</p>
              <p>Nepali - Native</p>
            </div>
          </div>
        </div>
      )}

      {resume && (
        <button className="download-btn" onClick={generatedPDF}>
          Download Resume
        </button>
      )}
    </div>
  );
};

export default ResumeGenerator;
