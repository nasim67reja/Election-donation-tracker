import Link from "next/link";
import { AiFillTwitterCircle, AiOutlineTwitter } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";

const CandidateProfile = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="flex items-center gap-8">
        <img
          src="https://randomuser.me/api/portraits/men/34.jpg"
          alt="Candidate Photo"
          className="rounded-full w-[45%] h-auto  mb-4"
        />

        <div>
          <h4 className="heading-four mb-4">John Doe</h4>
          <p className="text-small mb-4">Political Affiliation</p>
          <div className="flex  gap-3 items-center">
            <Link href={"#"} className="border rounded-full p-1">
              <BiLogoFacebook className=" w-[1.8rem]  h-auto  hover:text-[#3b5998] " />
            </Link>
            <Link href={"#"} className="border rounded-full p-1">
              <AiOutlineTwitter className="w-[1.8rem] h-auto hover:text-[#00aced] hover:fill-blue-500   " />
            </Link>
          </div>
        </div>
      </div>

      {/* Bio */}
      <div className="mt-6">
        <h4 className="heading-four  mb-2">Bio</h4>
        <p className="text-small !leading-[20px]">
          John Doe is a seasoned politician with a background in...
        </p>
      </div>

      {/* Campaign Platform */}
      <div className="mt-8">
        <h4 className="heading-four  mb-2">Campaign Platform</h4>
        <p className="text-small  !leading-[20px]">
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
    </div>
  );
};

export default CandidateProfile;
