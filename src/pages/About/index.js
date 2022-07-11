import React from "react";
import "./index.css";

export default function About() {
  const blogList = [
    { name: "🕹️ Dev Community", link: "https://dev.to/anuradha9712" },
    { name: "🧰 Hashnode", link: "https://anuradha.hashnode.dev/" },
    { name: "🎯 daily.dev", link: "https://app.daily.dev/anuradha" },
  ];

  const skills = [
    { label: "Web:", options: "HTML, CSS, Bootstrap, Javascript" },
    { label: "Libraries:", options: "React, Redux" },
    { label: "Testing:", options: "Jest, React Testing Library, Cypress" },
    { label: "Frameworks:", options: "Gatsby, Express" },
    { label: "Version Control:", options: "Git" },
    { label: "Backend:", options: "Node JS, MongoDB, MySQL" },
    {
      label: "Others:",
      options: "TypeScript, Storybook, Salesforce Lightning",
    },
    { label: "Tech Stack:", options: "MERN STACK" },
  ];

  return (
    <>
      <section id="about" className="style-module--Section">
        <div className="style-module--ContentWrapper">
          <h3 className="style-module--Heading">About Me</h3>
          <p>
            Hello! My name is Anuradha Aggarwal. I'm from New Delhi. I have
            completed my <strong>Masters in Computer Science</strong> from
            University of Delhi in year 2020 and now working as a{" "}
            <strong>Software Engineer</strong> from the last{" "}
            <strong>2 years</strong>.
          </p>
          <p>
            I like to explore new technologies, problem-solving, build projects
            👩‍💻, and have a keen interest in web development & writing blogs ✍.
          </p>
          <p>Here are a few technologies I've been working with:</p>

          <ul>
            {skills.map((item, key) => {
              return (
                <li key={key}>
                  <p>
                    <strong>{item.label}</strong> {item.options}
                  </p>
                </li>
              );
            })}
          </ul>

          <p>
            I often write blogs to share my knowledge with developer community.
          </p>
          <div className="style-module--OuterBlogWrapper">
            {blogList.map((blog, key) => {
              return (
                <a
                  key={key}
                  target="_blank"
                  href={blog.link}
                  aria-label={blog.name}
                  className="style-module-Links"
                  rel="nofollow noopener noreferrer"
                >
                  <div className="style-module--BlogContainer">{blog.name}</div>
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
