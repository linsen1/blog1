import React from 'react';

const LiftStyleComponent = () => {
    return (
        <>
            <div className="space-y-5 rounded-md border border-white-light bg-white p-5 shadow-[0px_0px_2px_0px_rgba(145,158,171,0.20),0px_12px_24px_-4px_rgba(145,158,171,0.12)] dark:border-[#1B2E4B] dark:bg-black">
                <div className="max-h-56 overflow-hidden rounded-md">
                    <img src="/assets/images/knowledge/image-1.jpg" alt="..." className="w-full object-cover" />
                </div>
                <h5 className="text-xl dark:text-white">Excessive sugar is harmful</h5>
                <div className="flex">
                    <div className="me-4 overflow-hidden rounded-full bg-white-dark">
                        <img src="/assets/images/logo.png" className="h-12 w-12 object-cover" alt="profile1" />
                    </div>
                    <div className="flex-1">
                        <h4 className="mb-1.5 font-semibold dark:text-white">Alma Clark</h4>
                        <p>06 May</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LiftStyleComponent;
