import React from "react";

const SectionTitle = ({ title }) => {
  return (
    <>
      <div className="container md:pt-11">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="md:ml-10 mb-[60px] max-w-[620px] text-left ">
              {/* <span className="mb-2 block text-lg font-semibold text-primary">
          Our Team
        </span> */}
              <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[42px]">
                {title}
              </h2>
              <hr className="w-50 border-[#002145] bg-[#002145]" />
              <p className="text-lg leading-relaxed text-body-color sm:text-xl sm:leading-relaxed"></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionTitle;
