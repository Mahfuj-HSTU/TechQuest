import React from "react";
import { ServerLink } from "../../../Hooks/useServerLink";

const AddVideo = ({id}) => {
    // console.log(id);
  return (
    <div>
      <form
        action={`${ServerLink}/upload/video`}
        method="post"
        encType="multipart/form-data"
      >
        <input type="file" name="video" className="input" />
        <input type="submit" value="submit" className="btn" />
      </form>
      <div>
        <video preload="auto" width="320" height="240" controls>
          <source src={`${ServerLink}/video/${id}`} />
          ;Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default AddVideo;
