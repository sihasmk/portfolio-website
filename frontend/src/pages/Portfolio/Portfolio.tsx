import axios from "axios";
import { useEffect, useState } from "react";
import { FaRegEye } from "react-icons/fa6";

enum Categories {
  All = "All",
  WebAppDevelopment = "Web App Development",
  MobileAppDevelopment = "Mobile App Development",
  WebDesign = "Web Design",
}

interface IProjectFromDb {
  _id: string;
  title: string;
  category: string;
  technologies: string[];
  thumbnailUrl: string;
  imageUrlList: string[];
}

const projectURL = "http://localhost:3000/projects";

const Portfolio = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [projects, setProjects] = useState<IProjectFromDb[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<IProjectFromDb[]>(
    []
  );
  const [selectedCategory, setSelectedCategory] = useState<Categories>(
    Categories.All
  );

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const projectsResponse = await axios.get(projectURL);
        setProjects(projectsResponse.data);
        setFilteredProjects(projectsResponse.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const handleFilterClick = (category: Categories) => {
    if (selectedCategory === category) {
      return;
    }
    setSelectedCategory(category);

    if (category === Categories.All) {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(
        (project) => project.category === category
      );
      setFilteredProjects(filtered);
    }
  };

  return (
    <section>
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      {/* Filter buttons */}
      <ul className="filter-list">
        {Object.values(Categories).map((category) => (
          <li key={category} className="filter-item">
            <button
              className={selectedCategory === category ? "active" : ""}
              data-filter-btn
              onClick={() => handleFilterClick(category)}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>

      {/* Show project data */}
      <section>
        <ul className="project-list">
          {filteredProjects.map((project) => (
            <li
              key={project._id}
              className="project-item active"
              data-filter-item
              data-category={project.category}
            >
              <a href="">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <FaRegEye />
                  </div>
                  <img src={project.thumbnailUrl} alt="" />
                </figure>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-category">{project.category}</p>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
};

export default Portfolio;
