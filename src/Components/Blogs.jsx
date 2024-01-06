import { useRef } from "react";
import Profile from "../assets/img/2.jpg";
import Catfish from "../markdown/img/catfish.png";
import Pheasant from "../markdown/img/adult.png";
import Hare from "../markdown/img/hare.webp";
import { Link } from "react-router-dom";

const Blogs = () => {
  const readMoreBtn = useRef();
  const disableBtn = () => {
    readMoreBtn.current.classList.add("btn-disabled");
  };

  return (
    <div className="h-full" id="blogs">
      {/* <!-- Card Blog --> */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* <!-- Title --> */}
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-teal-400 to-teal-950">
            Blogs
          </h2>
          <p className="mt-1 text-gray-600 dark:text-gray-400">
            Research, findings, articles of veterinarian subject and profession
            are encapsulated in the following section of the page.
          </p>
        </div>
        {/* <!-- End Title --> */}

        {/* <!-- Grid --> */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* <!-- Card --> */}
          <Link
            className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4] dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            to="/blogs/1"
          >
            <div className="aspect-w-16 aspect-h-11">
              <img
                className="w-full object-cover rounded-xl"
                src={Catfish}
                alt="Image Description"
              />
            </div>
            <div className="my-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:group-hover:text-white">
                African Catfish: Is it a Real Threat in Nepal?
              </h3>
              <p className="mt-5 text-gray-600 dark:text-gray-400">
                This article discussed about the presence of african catfish in
                Nepal&apos;s ecosystem and if it is a threat to the local
                species.
              </p>
            </div>
            <div className="mt-auto flex items-center gap-x-3">
              <img
                className="w-8 h-8 rounded-full"
                src={Profile}
                alt="Image Description"
              />
              <div>
                <h5 className="text-sm text-gray-800 dark:text-gray-200">
                  By Achyut Acharya
                </h5>
              </div>
            </div>
          </Link>
          {/* <!-- End Card --> */}

          {/* <!-- Card --> */}
          <Link
            className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4] dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            to="/blogs/2"
          >
            <div className="aspect-w-16 aspect-h-11">
              <img
                className="w-full object-cover rounded-xl"
                src={Pheasant}
                alt="Image Description"
              />
            </div>
            <div className="my-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:group-hover:text-white">
                Pheasant Farming: An Overview and Condition in Nepal
              </h3>
              <p className="mt-5 text-gray-600 dark:text-gray-400">
                Discussion about Pheasant nurturing, growth and production
              </p>
            </div>
            <div className="mt-auto flex items-center gap-x-3">
              <img
                className="w-8 h-8 rounded-full"
                src={Profile}
                alt="Image Description"
              />
              <div>
                <h5 className="text-sm text-gray-800 dark:text-gray-200">
                  By Achyut Acharya
                </h5>
              </div>
            </div>
          </Link>
          {/* <!-- End Card --> */}

          {/* <!-- Card --> */}
          <a
            className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4] dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            href="#"
          >
            <div className="aspect-w-16 aspect-h-11">
              <img
                className="w-full object-cover rounded-xl"
                src={Hare}
                alt="Image Description"
              />
            </div>
            <div className="my-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:group-hover:text-white">
                Scope of Veternarian in Nepal
              </h3>
              <p className="mt-5 text-gray-600 dark:text-gray-400">
                How is the career path of a successful veterinarian in Nepal,
                from primary sources. And advices on how to begin the career
                initially for a better outcome.
              </p>
            </div>
            <div className="mt-auto flex items-center gap-x-3">
              <img
                className="w-8 h-8 rounded-full"
                src={Profile}
                alt="Image Description"
              />
              <div>
                <h5 className="text-sm text-gray-800 dark:text-gray-200">
                  By Achyut Acharya
                </h5>
              </div>
            </div>
          </a>
          {/* <!-- End Card --> */}
        </div>
        {/* <!-- End Grid --> */}

        {/* <!-- Card --> */}
        <div
          className="flex justify-center items-center mt-4"
          onClick={() => {}}
        >
          <button
            className="btn dark:btn-neutral"
            ref={readMoreBtn}
            onClick={disableBtn}
          >
            See More
          </button>
        </div>
        {/* <!-- End Card --> */}
      </div>
      {/* <!-- End Card Blog --> */}
    </div>
  );
};

export default Blogs;
