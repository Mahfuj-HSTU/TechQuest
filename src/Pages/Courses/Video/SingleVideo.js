import React from 'react';

const SingleVideo = ( { video } ) => {
    const { video_url } = video;
    return (
        <div>
            <iframe
                title="YouTube Video"
                width="560"
                height="315"
                src={ video_url }
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </div>
    );
};

export default SingleVideo;
