import React from 'react';
import {Metadata} from "next";


export const metadata: Metadata = {
    title: '程序人生',
};
const PageComponent = () => {
    return (
        <>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-3  pt-5">
                <div
                    className="space-y-5 rounded-md border border-white-light bg-white p-5 shadow-[0px_0px_2px_0px_rgba(145,158,171,0.20),0px_12px_24px_-4px_rgba(145,158,171,0.12)] dark:border-[#1B2E4B] dark:bg-black">
                    <div className="max-h-56 overflow-hidden rounded-md">
                        <img src="/assets/images/knowledge/image-1.jpg" alt="..." className="w-full object-cover"/>
                    </div>
                    <h5 className="text-xl dark:text-white">工作与生活如何平衡</h5>
                    <div className="flex">
                        <div className="me-4 overflow-hidden rounded-full bg-white-dark">
                            <img src="/assets/images/logo.png" className="h-12 w-12 object-cover" alt="profile1"/>
                        </div>
                        <div className="flex-1">
                            <h4 className="mb-1.5 font-semibold dark:text-white">前端达人</h4>
                            <p>{new Date().toLocaleString()}</p>
                        </div>
                    </div>
                </div>
                <div
                    className="space-y-5 rounded-md border border-white-light bg-white p-5 shadow-[0px_0px_2px_0px_rgba(145,158,171,0.20),0px_12px_24px_-4px_rgba(145,158,171,0.12)] dark:border-[#1B2E4B] dark:bg-black">
                    <div className="max-h-56 overflow-hidden rounded-md">
                        <img src="/assets/images/knowledge/image-1.jpg" alt="..." className="w-full object-cover"/>
                    </div>
                    <h5 className="text-xl dark:text-white">工作与生活如何平衡</h5>
                    <div className="flex">
                        <div className="me-4 overflow-hidden rounded-full bg-white-dark">
                            <img src="/assets/images/logo.png" className="h-12 w-12 object-cover" alt="profile1"/>
                        </div>
                        <div className="flex-1">
                            <h4 className="mb-1.5 font-semibold dark:text-white">前端达人</h4>
                            <p>{new Date().toLocaleString()}</p>
                        </div>
                    </div>
                </div>
                <div
                    className="space-y-5 rounded-md border border-white-light bg-white p-5 shadow-[0px_0px_2px_0px_rgba(145,158,171,0.20),0px_12px_24px_-4px_rgba(145,158,171,0.12)] dark:border-[#1B2E4B] dark:bg-black">
                    <div className="max-h-56 overflow-hidden rounded-md">
                        <img src="/assets/images/knowledge/image-1.jpg" alt="..." className="w-full object-cover"/>
                    </div>
                    <h5 className="text-xl dark:text-white">工作与生活如何平衡</h5>
                    <div className="flex">
                        <div className="me-4 overflow-hidden rounded-full bg-white-dark">
                            <img src="/assets/images/logo.png" className="h-12 w-12 object-cover" alt="profile1"/>
                        </div>
                        <div className="flex-1">
                            <h4 className="mb-1.5 font-semibold dark:text-white">前端达人</h4>
                            <p>{new Date().toLocaleString()}</p>
                        </div>
                    </div>
                </div>


            </div>
        </>
    );
};

export default PageComponent;
