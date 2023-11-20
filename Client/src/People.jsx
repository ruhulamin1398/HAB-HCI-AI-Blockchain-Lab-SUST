import { useSelector } from "react-redux";
import Breadcrumb from "./Componenets/Breadcrumb";
import MemberGrid from "./Componenets/people/MemberGrid";
const People = () => {
  const imageUrl =
    "https://carleton.ca/healthequity/wp-content/uploads/research-team-header-1600w-1.jpg";
  const subPages = [];

  const peopleList = useSelector((state) => state.people.peoples);
  console.log(peopleList.director.members);
  const directors = peopleList.director;
  directors.members.map((member) => {
    console.log(member);
  });

  const peopleKeys = Object.keys(peopleList);
  console.log(peopleKeys);

  return (
    <>
      <Breadcrumb title="People" subPages={subPages} imageUrl={imageUrl} />

      <section id="team" className="pt-20 pb-10 lg:pt-[50px] lg:pb-20">
        {peopleKeys.map((key, value) => (
          <div className="container">
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4">
                <div className="mx-auto mb-[60px] max-w-[620px] text-center">
                  <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[42px]">
                    {peopleList[key].title}
                  </h2>
                  <p className="text-lg leading-relaxed text-body-color sm:text-xl sm:leading-relaxed">
                    There are many variations of passages of Lorem Ipsum
                    available but the majority have suffered alteration in some
                    form.
                  </p>
                </div>
              </div>
            </div>

            <div className="-mx-4 flex flex-wrap justify-center">
              <MemberGrid members={peopleList[key].members} />
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default People;
