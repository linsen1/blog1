import Image from "next/image";



const FootLink = () => {
    return (
        <div className="w-full  p-6 h-214 dark:text-white-dark grid grid-cols-1 gap-6 sm:grid-cols-2 sm:justify-items-center  lg:grid-cols-4">
            <div className=" grid grid-cols-1 h-auto">
                <h5 className="mb-3 text-lg font-semibold dark:text-white-light">前端达人</h5>
                <p className="leading-normal text-[14px] dark:text-white-light">
                    专注分享当下最实用的前端技术。关注前端达人，与达人一起学习进步！
                </p>
            </div>
            <div className=" grid grid-cols-1 h-auto">
                <h5 className="mb-3 text-lg font-semibold dark:text-white-light">友情链接</h5>
                <p className="lead text-[16px]  mb-2 dark:text-white-light">
                    swiftui.cc
                </p>
                <p className="lead text-[16px] mb-2  dark:text-white-light">
                    react.wiki
                </p>
                <p className="lead text-[16px]   mb-2 dark:text-white-light">
                    vuejs.wiki
                </p>
            </div>
            <div className="grid grid-cols-1 h-auto">
                <h5 className="mb-3 text-lg font-semibold dark:text-white-light">关于本站</h5>
                <p className="lead text-[14px]   mb-2 dark:text-white-light">
                    站点介绍
                </p>
                <p className="lead text-[14px]   mb-2 dark:text-white-light">
                    商务合作
                </p>
                <p className="lead text-[14px]   mb-2 dark:text-white-light">
                    网站地图
                </p>
            </div>
            <div className=" grid grid-cols-1 h-auto">
                <h5 className="mb-3 text-lg font-semibold dark:text-white-light">公众号</h5>
                <div>
                    <Image src='/assets/images/qrcode.jpg' alt='前端达人公众号二维码' width={100} height={100} >
                    </Image>
                </div>
                <p className="lead text-[14px]   m-2 dark:text-white-light">
                    关注「前端达人」<br/>获取更多优质内容
                </p>
            </div>
        </div>
    );
};

export default FootLink;
