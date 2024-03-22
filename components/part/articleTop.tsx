import React from 'react';

const ArticleTopComponent = () => {
    return (
        <>
            <div className="w-full flex gap-2 bg-white shadow-[4px_6px_10px_-3px_#bfc9d4] rounded border border-white-light dark:border-[#1b2e4b] dark:bg-[#191e3a] dark:shadow-none">
                <div className="mb-5 w-2/5 h-full overflow-hidden">
                    <img className="rounded-tl h-full rounded-bl object-cover" src="assets/images/carousel1.jpeg" alt="" />
                </div>
                <div className="w-3/5 flex flex-col justify-center gap-2 py-4 px-4">
                    <a href="#" className="mb-3 text-[#3b3f5c]  block text-[20px] font-medium tracking-tight text-gray-800 dark:text-white-light">如何使用正则表达式验证邮箱</a>
                    <p className="font-normal text-white-dark text-sm dark:text-white-light line-clamp-3">
                        要使用正则表达式验证电子邮件，您可以将 match 函数与以下两个正则表达式之一结合使用。如果给定的输入字符串中有一个有效的电子邮件地址，match() 函数将返回一个真值。
                    </p>
                </div>
            </div>
        </>
    );
};

export default ArticleTopComponent;
