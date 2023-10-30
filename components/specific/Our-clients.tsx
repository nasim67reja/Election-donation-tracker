import React from "react";
import SectionLayout from "../common/SectionLayout";
import SectionHeader from "../common/SectionHeader";
import CandidateProfile from "../common/Profile";

const Clients = () => {
  return (
    <SectionLayout bg="">
      <SectionHeader
        heading="Empowering Leaders, Transforming Communities"
        text="Discover the impactful campaigns and dedicated leaders who have chosen our platform to make a positive difference in their communities"
      />
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8">
        <CandidateProfile />
        <CandidateProfile />

        <CandidateProfile />
      </div>
    </SectionLayout>
  );
};

export default Clients;
