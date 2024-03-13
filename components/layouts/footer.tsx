const Footer = () => {
    return (
        <>
            <div className="flex justify-center ">
                <div className="p-6 pt-0 mt-auto text-center dark:text-white-dark ltr:sm:text-left rtl:sm:text-right">© {new Date().getFullYear()}. 前端达人版权所有 </div>
                <div className="p-6 pt-0 mt-auto text-center dark:text-white-dark ltr:sm:text-left rtl:sm:text-right">京ICP备16033841号-5</div>
            </div>
        </>

    );
};

export default Footer;
