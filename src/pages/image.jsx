import React from 'react';
import job from '../asset/image/example/job.jpg'
import shop from '../asset/image/example/shop.jpg'
const ImageTest = () => {
    return (
        <div>
            <div className="col-6"><img src={job} alt="" /></div>
            <div className="col-6"><img src={shop} alt="" /></div>
        </div>
    );
}

export default ImageTest;
