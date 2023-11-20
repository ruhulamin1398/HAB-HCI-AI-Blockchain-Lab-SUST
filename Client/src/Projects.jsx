import Breadcrumb from "./Componenets/Breadcrumb";

const Projects = () => {
  const imageUrl =
    "https://carleton.ca/healthequity/wp-content/uploads/research-team-header-1600w-1.jpg";
  const subPages = [];

  return (
    <>
      <Breadcrumb title="Projects" subPages={subPages} imageUrl={imageUrl} />
    </>
  );
};

export default Projects;
