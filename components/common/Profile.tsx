import Link from "next/link";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

const CandidateProfile = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="text-center">
        {/* Candidate Photo */}
        <img
          src="https://images.unsplash.com/photo-1474176857210-7287d38d27c6?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Candidate Photo"
          className="rounded-full w-[15rem] h-[15rem] mx-auto mb-4"
        />

        {/* Candidate Information */}
        <h2 className="text-2xl font-bold text-gray-800 mb-2">John Doe</h2>
        <p className="text-gray-600">Political Affiliation</p>
      </div>

      {/* Bio */}
      <div className="mt-4">
        <h4 className="heading-four font-bold  mb-2">Bio</h4>
        <p className="text-small">
          John Doe is a seasoned politician with a background in...
        </p>
      </div>

      {/* Campaign Platform */}
      <div className="mt-4">
        <h4 className="heading-four font-bold  mb-2">Campaign Platform</h4>
        <p className="text-small">
          John Doe's campaign focuses on addressing key issues such as...
          {/* Add relevant campaign platform information */}
        </p>
      </div>

      {/* Campaign Goals */}
      {/* <div className="mt-4">
        <h3 className="text-lg font-bold text-gray-800 mb-2">Campaign Goals</h3>
        <p className="text-gray-600">
          John Doe aims to achieve...
        </p>
      </div> */}

      {/* Achievements and Contributions */}
      {/* <div className="mt-4">
        <h3 className="text-lg font-bold text-gray-800 mb-2">
          Achievements and Contributions
        </h3>
        <p className="text-gray-600">John Doe has a track record of...</p>
      </div> */}

      {/* Campaign Message */}
      {/* <div className="mt-4">
        <h3 className="text-lg font-bold text-gray-800 mb-2">
          Campaign Message
        </h3>
        <p className="text-gray-600">
          John Doe's campaign message is encapsulated in the slogan...
      
        </p>
      </div> */}

      {/* Support and Endorsements */}
      {/* <div className="mt-4">
        <h3 className="text-lg font-bold text-gray-800 mb-2">
          Support and Endorsements
        </h3>
        <p className="text-gray-600">
          John Doe is endorsed by...
        </p>
      </div> */}

      {/* Social Media Links */}
      <div className="mt-4">
        <h3 className="text-lg font-bold text-gray-800 mb-2"></h3>
        <div className="flex justify-center gap-4 items-center">
          <Link href={"#"}>
            <BsFacebook className=" w-[1.8rem]  h-auto  hover:text-[#3b5998] " />
          </Link>
          <Link href={"#"}>
            <AiFillTwitterCircle className="w-[2.2rem] h-auto hover:text-[#00aced] hover:fill-blue-500   " />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CandidateProfile;
