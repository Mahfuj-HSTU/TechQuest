import React from "react";

const PlayVideo = ({ url }) => {
  return (
    <div className="my-10">
      <video preload="auto" width="720" height="540" controls>
        <source src="https://res.cloudinary.com/dwuwfjxt2/video/upload/v1676460159/samples/sea-turtle.mp4" />
        ;Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default PlayVideo;
