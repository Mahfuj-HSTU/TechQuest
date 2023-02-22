import React, { useState } from "react";
import { ServerLink } from "../../../Hooks/useServerLink";
import PlayVideo from "../Video/PlayVideo";

const AddVideo = ({id}) => {
    // console.log(id);
    const [video, setVideo] = useState();

    const handleAddVideo = e =>{
        e.preventDefault();
        const form = e.target;
        // const video = form.files;
        const formData = new FormData();
        formData.append("video",video[0]);
        console.log(formData);
    }
    // console.log(video[0]);
  return (
    <div>
      <form
      onSubmit={handleAddVideo}
        // action={`${ServerLink}/upload/video`}
        // method="post"
        // encType="multipart/form-data"
      >
        <input type="file" name="video" className="input" onChange={e=>setVideo(e.target.files)} />
        <input type="submit" value="submit" className="btn" />
      </form>
      <div>
        <video preload="auto" width="320" height="240" controls>
          <source src="https://res.cloudinary.com/dwuwfjxt2/video/upload/v1676460163/samples/cld-sample-video.mp4" />
          ;Your browser does not support the video tag.
        </video>
      </div>
      {/* <VideoPlayer/> */}
    </div>
  );
};

export default AddVideo;
