import React from 'react';
import Link from "next/link";

const QuestionPartComponent = () => {
    return (
        <div>
            <div className="border border-gray-500/20 rounded-md shadow-[rgb(31_45_61_/_10%)_0px_2px_10px_1px] dark:shadow-[0_2px_11px_0_rgb(6_8_24_/_39%)] p-6 pt-12 mt-8 relative">
                <div className="bg-primary absolute text-white-light ltr:left-6 rtl:right-6 -top-8 w-16 h-16 rounded-md flex items-center justify-center mb-5 mx-auto">
                    <span className="text-2xl">JS</span>
                </div>
                <Link href={`/question/detail/`}>
                    <h5 className="text-dark text-lg font-semibold mb-3.5 dark:text-white-light">如何向 Vue JS Templates 添加全局变量</h5>
                </Link>
                <Link href={`/question/detail/`}>
                    <p className="text-white-dark text-[15px]  mb-3.5 line-clamp-3">在 Vue 3 templates 模板中我们无法访问 window 对象上的变量。但是，您可以在 Vue 应用程序上设置 config.globalProperties 属性来注册任何模板都可以访问的全局变量和方法。如下段示例代码</p>
                </Link>
                <Link href={`/question/detail/`}>
                    <button type="button" className="text-primary font-semibold hover:underline group">
                        查看
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default QuestionPartComponent;
