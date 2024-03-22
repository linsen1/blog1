import React from 'react';

const RightInfoComponent = () => {
    return (
      <>

          <div className="flex  justify-start w-full py-4 my-2">
              <h1 className="text-[16px] dark:text-white-light">公众号</h1>
          </div>


          <div className="my-2">
              <img
                  className="w-24 h-24 rounded-full overflow-hidden object-cover ring-2 ring-gray-500 dark:ring-white-dark"
                  src="/assets/images/logo.png"
                  alt="img"/>
          </div>
          <div>
              <h1 className="text-2xl dark:text-white-light">前端达人</h1>
          </div>

          <div className="p-4 leading-6">
                        <span
                            className="dark:text-white-light">专注分享当下最实用的前端技术。关注前端达人，与达人一起学习进步！</span>
          </div>

          <div className="py-4">
              <img src="/assets/images/qrcode.jpg"
                   className="w-28 h-28 ring-gray-500 ring-2 rounded-md overflow-hidden dark:ring-white-dark object-cover"/>
          </div>

          <div className="flex  justify-start w-full py-4">
              <h1 className="text-[16px] dark:text-white-light">其他媒体</h1>
          </div>

          <div className="flex flex-col justify-start w-full gap-2">
              <div className="text-[14px] dark:text-white-dark">头条号：前端达人</div>
              <div className="text-[14px] dark:text-white-dark">抖音号：前端达人</div>
              <div className="text-[14px] dark:text-white-dark">小红书：前端达人</div>
              <div className="text-[14px] dark:text-white-dark">百家号：前端达人</div>
              <div className="text-[14px] dark:text-white-dark">视频号：前端达人</div>
              <div className="text-[14px] dark:text-white-dark">bilibili：前端达人</div>
          </div>



      </>
    );
};

export default RightInfoComponent;
