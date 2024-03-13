import React from 'react';
import VideoCardComponent from "@/components/pages/viedeoCard";
import IconCaretsDown from "@/components/icon/icon-carets-down";
import IconCaretDown from "@/components/icon/icon-caret-down";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: '视频',
};

const PageComponent = () => {
    return (
      <>
          <div className="w-full  pt-5">
              <VideoCardComponent/>
          </div>
          <div className="max-w-full my-10">
              <div className="flex w-full flex-col justify-center">
              <ul className="inline-flex items-center space-x-1 rtl:space-x-reverse m-auto mb-4">
                  <li>
                      <button
                          type="button"
                          className="flex justify-center font-semibold p-2 rounded-full transition bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
                      >
                          <IconCaretsDown className="rotate-90 rtl:-rotate-90"/>
                      </button>
                  </li>
                  <li>
                      <button
                          type="button"
                          className="flex justify-center font-semibold p-2 rounded-full transition bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
                      >
                          <IconCaretDown className="h-5 w-5 rotate-90 rtl:-rotate-90"/>
                      </button>
                  </li>
                  <li>
                      <button
                          type="button"
                          className="flex justify-center font-semibold px-3.5 py-2 rounded-full transition bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
                      >
                          1
                      </button>
                  </li>
                  <li>
                      <button type="button" className="flex justify-center font-semibold px-3.5 py-2 rounded-full transition bg-primary text-white dark:text-white-light dark:bg-primary">
                          2
                      </button>
                  </li>
                  <li>
                      <button
                          type="button"
                          className="flex justify-center font-semibold px-3.5 py-2 rounded-full transition bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
                      >
                          3
                      </button>
                  </li>
                  <li>
                      <button
                          type="button"
                          className="flex justify-center font-semibold p-2 rounded-full transition bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
                      >
                          <IconCaretDown className="h-5 w-5 -rotate-90 rtl:rotate-90"/>
                      </button>
                  </li>
                  <li>
                      <button
                          type="button"
                          className="flex justify-center font-semibold p-2 rounded-full transition bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
                      >
                          <IconCaretsDown className="-rotate-90 rtl:rotate-90"/>
                      </button>
                  </li>
              </ul>
              </div>
          </div>
      </>

    );
};

export default PageComponent;
