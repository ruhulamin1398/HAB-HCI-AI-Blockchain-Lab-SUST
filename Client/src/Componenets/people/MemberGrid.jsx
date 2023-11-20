import React from 'react';
import { Link } from 'react-router-dom';
 

 

function MemberGrid({members}) {

  const randomImageNumber = () => {
    return Math.floor(Math.random() 
            * (500 - 0 + 1)) + 0;
};







    const elements = members.map((member)=> (
        <div className="w-full px-4 sm:w-1/2 lg:w-1/4">
        <div className="wow fadeInUp mb-10  border py-4 " data-wow-delay=".1s">
          <div
            className="h-170px] relative z-10 mx-auto mb-6 w-[170px] rounded-full"
          >
      <img
      src={`https://randomuser.me/portraits/men/33.jpg`}
      alt="image"
      className="w-full rounded-full"
    />
            <span className="absolute top-0 left-0 z-[-1]">
              <svg
                width="71"
                height="82"
                viewBox="0 0 71 82"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="1.29337"
                  cy="80.7066"
                  r="1.29337"
                  transform="rotate(-90 1.29337 80.7066)"
                  fill="#3056D3"
                />
                <circle
                  cx="12.6747"
                  cy="80.7066"
                  r="1.29337"
                  transform="rotate(-90 12.6747 80.7066)"
                  fill="#3056D3"
                />
                <circle
                  cx="24.0575"
                  cy="80.7066"
                  r="1.29337"
                  transform="rotate(-90 24.0575 80.7066)"
                  fill="#3056D3"
                />
                <circle
                  cx="35.4379"
                  cy="80.7066"
                  r="1.29337"
                  transform="rotate(-90 35.4379 80.7066)"
                  fill="#3056D3"
                />
                <circle
                  cx="46.8197"
                  cy="80.7066"
                  r="1.29337"
                  transform="rotate(-90 46.8197 80.7066)"
                  fill="#3056D3"
                />
                <circle
                  cx="68.807"
                  cy="80.7066"
                  r="1.29337"
                  transform="rotate(-90 68.807 80.7066)"
                  fill="#3056D3"
                />
                <circle
                  cx="57.9443"
                  cy="80.7066"
                  r="1.29337"
                  transform="rotate(-90 57.9443 80.7066)"
                  fill="#3056D3"
                />
                <circle
                  cx="1.29337"
                  cy="69.3249"
                  r="1.29337"
                  transform="rotate(-90 1.29337 69.3249)"
                  fill="#3056D3"
                />
                <circle
                  cx="12.6747"
                  cy="69.3249"
                  r="1.29337"
                  transform="rotate(-90 12.6747 69.3249)"
                  fill="#3056D3"
                />
                <circle
                  cx="24.0575"
                  cy="69.3249"
                  r="1.29337"
                  transform="rotate(-90 24.0575 69.3249)"
                  fill="#3056D3"
                />
                <circle
                  cx="35.4379"
                  cy="69.3249"
                  r="1.29337"
                  transform="rotate(-90 35.4379 69.3249)"
                  fill="#3056D3"
                />
                <circle
                  cx="46.8197"
                  cy="69.325"
                  r="1.29337"
                  transform="rotate(-90 46.8197 69.325)"
                  fill="#3056D3"
                />
                <circle
                  cx="68.807"
                  cy="69.325"
                  r="1.29337"
                  transform="rotate(-90 68.807 69.325)"
                  fill="#3056D3"
                />
                <circle
                  cx="57.9433"
                  cy="69.325"
                  r="1.29337"
                  transform="rotate(-90 57.9433 69.325)"
                  fill="#3056D3"
                />
                <circle
                  cx="1.29337"
                  cy="57.9433"
                  r="1.29337"
                  transform="rotate(-90 1.29337 57.9433)"
                  fill="#3056D3"
                />
                <circle
                  cx="1.29337"
                  cy="24.0568"
                  r="1.29337"
                  transform="rotate(-90 1.29337 24.0568)"
                  fill="#3056D3"
                />
                <circle
                  cx="12.6747"
                  cy="57.9433"
                  r="1.29337"
                  transform="rotate(-90 12.6747 57.9433)"
                  fill="#3056D3"
                />
                <circle
                  cx="12.6747"
                  cy="24.0568"
                  r="1.29337"
                  transform="rotate(-90 12.6747 24.0568)"
                  fill="#3056D3"
                />
                <circle
                  cx="24.0575"
                  cy="57.9433"
                  r="1.29337"
                  transform="rotate(-90 24.0575 57.9433)"
                  fill="#3056D3"
                />
                <circle
                  cx="24.0575"
                  cy="24.0568"
                  r="1.29337"
                  transform="rotate(-90 24.0575 24.0568)"
                  fill="#3056D3"
                />
                <circle
                  cx="35.4379"
                  cy="57.9433"
                  r="1.29337"
                  transform="rotate(-90 35.4379 57.9433)"
                  fill="#3056D3"
                />
                <circle
                  cx="35.4379"
                  cy="24.0568"
                  r="1.29337"
                  transform="rotate(-90 35.4379 24.0568)"
                  fill="#3056D3"
                />
                <circle
                  cx="46.8197"
                  cy="57.9431"
                  r="1.29337"
                  transform="rotate(-90 46.8197 57.9431)"
                  fill="#3056D3"
                />
                <circle
                  cx="46.8197"
                  cy="24.0567"
                  r="1.29337"
                  transform="rotate(-90 46.8197 24.0567)"
                  fill="#3056D3"
                />
                <circle
                  cx="68.807"
                  cy="57.9431"
                  r="1.29337"
                  transform="rotate(-90 68.807 57.9431)"
                  fill="#3056D3"
                />
                <circle
                  cx="68.807"
                  cy="24.0567"
                  r="1.29337"
                  transform="rotate(-90 68.807 24.0567)"
                  fill="#3056D3"
                />
                <circle
                  cx="57.9433"
                  cy="57.9431"
                  r="1.29337"
                  transform="rotate(-90 57.9433 57.9431)"
                  fill="#3056D3"
                />
                <circle
                  cx="57.9443"
                  cy="24.0567"
                  r="1.29337"
                  transform="rotate(-90 57.9443 24.0567)"
                  fill="#3056D3"
                />
                <circle
                  cx="1.29337"
                  cy="46.5615"
                  r="1.29337"
                  transform="rotate(-90 1.29337 46.5615)"
                  fill="#3056D3"
                />
                <circle
                  cx="1.29337"
                  cy="12.6751"
                  r="1.29337"
                  transform="rotate(-90 1.29337 12.6751)"
                  fill="#3056D3"
                />
                <circle
                  cx="12.6747"
                  cy="46.5615"
                  r="1.29337"
                  transform="rotate(-90 12.6747 46.5615)"
                  fill="#3056D3"
                />
                <circle
                  cx="12.6747"
                  cy="12.6751"
                  r="1.29337"
                  transform="rotate(-90 12.6747 12.6751)"
                  fill="#3056D3"
                />
                <circle
                  cx="24.0575"
                  cy="46.5615"
                  r="1.29337"
                  transform="rotate(-90 24.0575 46.5615)"
                  fill="#3056D3"
                />
                <circle
                  cx="24.0575"
                  cy="12.6751"
                  r="1.29337"
                  transform="rotate(-90 24.0575 12.6751)"
                  fill="#3056D3"
                />
                <circle
                  cx="35.4379"
                  cy="46.5615"
                  r="1.29337"
                  transform="rotate(-90 35.4379 46.5615)"
                  fill="#3056D3"
                />
                <circle
                  cx="35.4379"
                  cy="12.6751"
                  r="1.29337"
                  transform="rotate(-90 35.4379 12.6751)"
                  fill="#3056D3"
                />
                <circle
                  cx="46.8197"
                  cy="46.5615"
                  r="1.29337"
                  transform="rotate(-90 46.8197 46.5615)"
                  fill="#3056D3"
                />
                <circle
                  cx="46.8197"
                  cy="12.6751"
                  r="1.29337"
                  transform="rotate(-90 46.8197 12.6751)"
                  fill="#3056D3"
                />
                <circle
                  cx="68.807"
                  cy="46.5615"
                  r="1.29337"
                  transform="rotate(-90 68.807 46.5615)"
                  fill="#3056D3"
                />
                <circle
                  cx="68.807"
                  cy="12.6751"
                  r="1.29337"
                  transform="rotate(-90 68.807 12.6751)"
                  fill="#3056D3"
                />
                <circle
                  cx="57.9433"
                  cy="46.5615"
                  r="1.29337"
                  transform="rotate(-90 57.9433 46.5615)"
                  fill="#3056D3"
                />
                <circle
                  cx="57.9443"
                  cy="12.6751"
                  r="1.29337"
                  transform="rotate(-90 57.9443 12.6751)"
                  fill="#3056D3"
                />
                <circle
                  cx="1.29337"
                  cy="35.1798"
                  r="1.29337"
                  transform="rotate(-90 1.29337 35.1798)"
                  fill="#3056D3"
                />
                <circle
                  cx="1.29337"
                  cy="1.2933"
                  r="1.29337"
                  transform="rotate(-90 1.29337 1.2933)"
                  fill="#3056D3"
                />
                <circle
                  cx="12.6747"
                  cy="35.1798"
                  r="1.29337"
                  transform="rotate(-90 12.6747 35.1798)"
                  fill="#3056D3"
                />
                <circle
                  cx="12.6747"
                  cy="1.2933"
                  r="1.29337"
                  transform="rotate(-90 12.6747 1.2933)"
                  fill="#3056D3"
                />
                <circle
                  cx="24.0575"
                  cy="35.1798"
                  r="1.29337"
                  transform="rotate(-90 24.0575 35.1798)"
                  fill="#3056D3"
                />
                <circle
                  cx="24.0575"
                  cy="1.29336"
                  r="1.29337"
                  transform="rotate(-90 24.0575 1.29336)"
                  fill="#3056D3"
                />
                <circle
                  cx="35.4379"
                  cy="35.1798"
                  r="1.29337"
                  transform="rotate(-90 35.4379 35.1798)"
                  fill="#3056D3"
                />
                <circle
                  cx="35.4379"
                  cy="1.29336"
                  r="1.29337"
                  transform="rotate(-90 35.4379 1.29336)"
                  fill="#3056D3"
                />
                <circle
                  cx="46.8197"
                  cy="35.18"
                  r="1.29337"
                  transform="rotate(-90 46.8197 35.18)"
                  fill="#3056D3"
                />
                <circle
                  cx="46.8197"
                  cy="1.29354"
                  r="1.29337"
                  transform="rotate(-90 46.8197 1.29354)"
                  fill="#3056D3"
                />
                <circle
                  cx="68.807"
                  cy="35.18"
                  r="1.29337"
                  transform="rotate(-90 68.807 35.18)"
                  fill="#3056D3"
                />
                <circle
                  cx="68.807"
                  cy="1.29354"
                  r="1.29337"
                  transform="rotate(-90 68.807 1.29354)"
                  fill="#3056D3"
                />
                <circle
                  cx="57.9443"
                  cy="35.18"
                  r="1.29337"
                  transform="rotate(-90 57.9443 35.18)"
                  fill="#3056D3"
                />
                <circle
                  cx="57.9443"
                  cy="1.29354"
                  r="1.29337"
                  transform="rotate(-90 57.9443 1.29354)"
                  fill="#3056D3"
                />
              </svg>
            </span>
            <span className="absolute right-0 bottom-0">
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.5 21.5L0.505701 21.5C0.767606 10.023 10.023 0.767604 21.5 0.505697L21.5 21.5Z"
                  stroke="#13C296"
                />
              </svg>
            </span>
          </div>
          <div className="text-center">
            <h4 className="mb-2 text-lg font-medium text-dark">
             {member.name}
            </h4>
            <p className="mb-5 text-sm font-medium text-white bg-[#002145] w-[100px] p-1 mx-auto">

              <Link to={`/people/${member.name}`}>    Profile </Link>
            
            </p>
            <div className="flex items-center justify-center">
              <a
                href="javascript:void(0)"
                className="mx-2 flex h-8 w-8 items-center justify-center text-[#002145] hover:text-primary"
              >
                <svg
                  width="10"
                  height="18"
                  viewBox="0 0 10 18"
                  className="fill-current"
                >
                  <path
                    d="M9.29878 7.2H7.74898H7.19548V6.61935V4.81936V4.23871H7.74898H8.91133C9.21575 4.23871 9.46483 4.00645 9.46483 3.65806V0.580645C9.46483 0.26129 9.24343 0 8.91133 0H6.89106C4.70474 0 3.18262 1.62581 3.18262 4.03548V6.56129V7.14194H2.62912H0.747223C0.359774 7.14194 0 7.46129 0 7.92581V10.0161C0 10.4226 0.304424 10.8 0.747223 10.8H2.57377H3.12727V11.3806V17.2161C3.12727 17.6226 3.43169 18 3.87449 18H6.47593C6.64198 18 6.78036 17.9129 6.89106 17.7968C7.00176 17.6806 7.08478 17.4774 7.08478 17.3032V11.4097V10.829H7.66596H8.91133C9.2711 10.829 9.54785 10.5968 9.6032 10.2484V10.2194V10.1903L9.99065 8.1871C10.0183 7.98387 9.99065 7.75161 9.8246 7.51935C9.76925 7.37419 9.52018 7.22903 9.29878 7.2Z"
                  />
                </svg>
              </a>
              <a
                href="javascript:void(0)"
                className="mx-2 flex h-8 w-8 items-center justify-center text-[#002145] hover:text-primary"
              >
                <svg
                  width="18"
                  height="14"
                  viewBox="0 0 18 14"
                  className="fill-current"
                >
                  <path
                    d="M15.9968 2.41096L17.1 1.09589C17.4194 0.739726 17.5065 0.465753 17.5355 0.328767C16.6645 0.821918 15.8516 0.986301 15.329 0.986301H15.1258L15.0097 0.876712C14.3129 0.30137 13.4419 0 12.5129 0C10.4806 0 8.88387 1.58904 8.88387 3.42466C8.88387 3.53425 8.88387 3.69863 8.9129 3.80822L9 4.35616L8.39032 4.32877C4.67419 4.21918 1.62581 1.20548 1.13226 0.684932C0.319355 2.05479 0.783871 3.36986 1.27742 4.19178L2.26452 5.72603L0.696774 4.90411C0.725806 6.05479 1.19032 6.9589 2.09032 7.61644L2.87419 8.16438L2.09032 8.46575C2.58387 9.86301 3.6871 10.4384 4.5 10.6575L5.57419 10.9315L4.55806 11.589C2.93226 12.6849 0.9 12.6027 0 12.5205C1.82903 13.726 4.00645 14 5.51613 14C6.64839 14 7.49032 13.8904 7.69355 13.8082C15.8226 12 16.2 5.15068 16.2 3.78082V3.58904L16.3742 3.47945C17.3613 2.60274 17.7677 2.13699 18 1.86301C17.9129 1.89041 17.7968 1.94521 17.6806 1.9726L15.9968 2.41096Z"
                  />
                </svg>
              </a>
              <a
                href="javascript:void(0)"
                className="mx-2 flex h-8 w-8 items-center justify-center text-[#002145] hover:text-primary"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  className="fill-current"
                >
                  <path
                    d="M8.90245 12.1939C10.7363 12.1939 12.2229 10.7073 12.2229 8.87352C12.2229 7.0397 10.7363 5.5531 8.90245 5.5531C7.06863 5.5531 5.58203 7.0397 5.58203 8.87352C5.58203 10.7073 7.06863 12.1939 8.90245 12.1939Z"
                  />
                  <path
                    d="M12.5088 0H5.23824C2.34719 0 0 2.34719 0 5.23824V12.4516C0 15.3999 2.34719 17.7471 5.23824 17.7471H12.4516C15.3999 17.7471 17.7471 15.3999 17.7471 12.5088V5.23824C17.7471 2.34719 15.3999 0 12.5088 0ZM8.90215 13.2244C6.46909 13.2244 4.55126 11.2493 4.55126 8.87353C4.55126 6.49771 6.49771 4.52264 8.90215 4.52264C11.278 4.52264 13.2244 6.49771 13.2244 8.87353C13.2244 11.2493 11.3066 13.2244 8.90215 13.2244ZM14.9133 4.92338C14.627 5.23824 14.1976 5.40999 13.711 5.40999C13.2817 5.40999 12.8523 5.23824 12.5088 4.92338C12.1939 4.60851 12.0222 4.20777 12.0222 3.72116C12.0222 3.23454 12.1939 2.86243 12.5088 2.51894C12.8237 2.17545 13.2244 2.0037 13.711 2.0037C14.1404 2.0037 14.5984 2.17545 14.9133 2.49031C15.1995 2.86243 15.3999 3.29179 15.3999 3.74978C15.3712 4.20777 15.1995 4.60851 14.9133 4.92338Z"
                  />
                  <path
                    d="M13.7397 3.03418C13.3676 3.03418 13.0527 3.34905 13.0527 3.72116C13.0527 4.09328 13.3676 4.40815 13.7397 4.40815C14.1118 4.40815 14.4267 4.09328 14.4267 3.72116C14.4267 3.34905 14.1405 3.03418 13.7397 3.03418Z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div> 
    ))
 
    return (
        <>
    {elements}
        </>
    );
}

export default MemberGrid;