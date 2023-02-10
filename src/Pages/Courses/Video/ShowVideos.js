import { useQuery } from "@tanstack/react-query";
import React from "react";
import SingleVideo from "./SingleVideo";

const ShowVideos = () => {
    const { data: videos = [] } = useQuery( {
        queryKey: [ "videos" ],
        queryFn: () =>
            fetch( 'http://localhost:5000/videos' ).then( ( res ) => res.json() ),
    } );
    // console.log( videos )


    return (
        <div>
            {
                videos.map( video => <SingleVideo key={ video.key } video={ video }></SingleVideo> )
            }
        </div>
    );
};

export default ShowVideos;
