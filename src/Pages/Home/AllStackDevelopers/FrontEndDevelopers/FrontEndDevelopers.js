import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import DeveloperCard from "../DeveloperCard/DeveloperCard";

const FrontEndDevelopers = () => {
  const { data: developers = [] } = useQuery({
    queryKey: ["developers"],
    queryFn: async () => {
      const res = await fetch("data/frontendDevelopers.json");
      const data = res.json();
      return data;
    },
  });

  return (
    <>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 mt-20 ">
        {developers?.map((developer) => (
          <DeveloperCard
            key={developer._id}
            developer={developer}
          ></DeveloperCard>
        ))}
      </div>
    </>
  );
};

export default FrontEndDevelopers;
