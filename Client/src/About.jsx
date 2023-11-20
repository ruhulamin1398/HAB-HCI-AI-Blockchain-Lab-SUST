import Breadcrumb from "./Componenets/Breadcrumb";

function About() {
  const imageUrl =
    "https://carleton.ca/healthequity/wp-content/uploads/research-team-header-1600w-1.jpg";

  const subPages = [
    // {
    //   title: 'hi',
    //   link: '/hi2'
    // }
    // ,   {
    //   title: 'hih',
    //   link: '/hi2'
    // },
    // {
    //   title: 'hahha',
    //   link: '/hi2'
    // }
  ];

  return (
    <>
      <Breadcrumb title="About" subPages={subPages} imageUrl={imageUrl} />
    </>
  );
}

export default About;
