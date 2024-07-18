// React Icons
import { FaGraduationCap } from "react-icons/fa6";
import { IoTerminalSharp } from "react-icons/io5";
import { GiTechnoHeart } from "react-icons/gi";

import TimelineItem from "./TimelineItem";
import SkillItem from "./SkillItem";

const Resume = () => {
  return (
    <section>
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      {/* Education Section */}
      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaGraduationCap />
          </div>
          <h3 className="h3">Education</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            heading="University of Moratuwa, Sri Lanka"
            subheading="BSc. in Engineering"
            date="2021-2025"
            description="Studying for a BSc. in Engineering, majoring in Computer Science. Set to graduate in 2026."
            bullets={[
              "Relevant Coursework: Data Structures and Algorithms (C++), Database Management Systems (MySQL)",
            ]}
          />
          <TimelineItem
            heading="Sri Lankan International School, Riyadh, Saudi Arabia"
            subheading="Pearson Edexcel International Advanced Level (A-Levels)"
            date="2020-2021"
            description=""
            bullets={["Maths: A*", "Physics: A*", "Chemistry: A*"]}
          />
          <TimelineItem
            heading="Sri Lankan International School, Riyadh, Saudi Arabia"
            subheading="Pearson Edexcel International General Certificate of Secondary Education (O-Levels)"
            date="2017-2020"
            description=""
            bullets={["4 A*s, 4 As and 2 Bs"]}
          />
        </ol>
      </div>

      {/* Projects Section */}
      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <IoTerminalSharp />
          </div>
          <h3 className="h3">Projects</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            heading="Smart POS System"
            subheading="React.ts, Node.ts, PostgreSQL, Docker, Axios"
            date="July 2024-August 2024"
            description=""
            bullets={[
              "Semester 5 Software Engineering Project",
              "Created a fully functional POS System for a multi-store chain",
              "Dockerized the app and deployed it without any complications",
              "Used a microservice architecture, where each service runs in its own Docker container",
            ]}
          />
          <TimelineItem
            heading="Vidly"
            subheading="React.js, Node.js, MongoDB, Bootstrap, Heroku, Axios"
            date="Jan 2024-Feb 2024"
            description=""
            bullets={[
              "Created a sample website with Register and Login functionalities to fetch and display movies from a MongoDB JSON document database",
              "Used Axios to make HTTP requests from Node.js",
              "Successfully deployed the web app using Heroku",
            ]}
          />
          <TimelineItem
            heading="Supply Chain Management System"
            subheading="React.js, Node.js, MySQL, Bootstrap"
            date="Dec 2024-Jan 2024"
            description=""
            bullets={[
              "Project done for Database Management Systems module",
              "Normalized the database to reduce redundancies",
              "Optimized queries and DB to lower response time by implementing in such a way that requires less JOIN operations",
            ]}
          />
          <TimelineItem
            heading="YouTube Clone"
            subheading="HTML, CSS, JavaScript"
            date="Oct 2023-Dec 2023"
            description=""
            bullets={[
              "Developed a clone of YouTube.com to improve fluency in HTML, CSS and Javascript",
            ]}
          />
        </ol>
      </div>

      {/* Technical Skills Section */}
      <div className="skill">
        <div className="title-wrapper">
          <div className="icon-box">
            <GiTechnoHeart />
          </div>
          <h3 className="h3">Technical Skills</h3>
        </div>
        <ul className="skills-list content-card">
          <SkillItem title="Web Design" value={70} />
          <SkillItem title="Docker" value={60} />
          <SkillItem title="Git" value={65} />
          <SkillItem title="React" value={80} />
          <SkillItem title="TypeScript" value={75} />
          <SkillItem title="JavaScript" value={80} />
          <SkillItem title="Node" value={77} />
          <SkillItem title="MongoDB" value={80} />
          <SkillItem title="SQL Databases" value={90} />
          <SkillItem title="Python" value={70} />
          <SkillItem title="C++" value={90} />
        </ul>
      </div>
    </section>
  );
};

export default Resume;
