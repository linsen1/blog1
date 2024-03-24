import ContentAnimation from '@/components/layouts/content-animation';
import Footer from '@/components/layouts/footer';
import Header from '@/components/layouts/header';
import MainContainer from '@/components/layouts/main-container';
import Overlay from '@/components/layouts/overlay';
import ScrollToTop from '@/components/layouts/scroll-to-top';
import Sidebar from '@/components/layouts/sidebar';
import Portals from '@/components/portals';
import FootLink from "@/components/layouts/footLink";

export default async function DefaultLayout({ children }: { children: React.ReactNode }) {
   /* const user = await currentUser();

    if(user){
        const existingUser = await getUserByEmail(user?.emailAddresses[0]?.emailAddress);
        if (existingUser.length === 0) {
            const newUserResult = await createUser({
                name: user?.username || '',
                email: user?.emailAddresses[0]?.emailAddress,
                platform_id:user?.id
            });
        }
        console.log(user);
    }*/

    return (
        <>
            {/* BEGIN MAIN CONTAINER */}
            <div className="relative">
                <Overlay />
                <ScrollToTop />

                {/* BEGIN APP SETTING LAUNCHER */}
                {/*<Setting />*/}
                {/* END APP SETTING LAUNCHER */}

                <MainContainer>
                    {/* BEGIN SIDEBAR */}
                    <Sidebar />
                    {/* END SIDEBAR */}
                    <div className="main-content flex min-h-screen flex-col">
                        {/* BEGIN TOP NAVBAR */}
                        <Header />
                        {/* END TOP NAVBAR */}

                        {/* BEGIN CONTENT AREA */}
                        <ContentAnimation>{children}</ContentAnimation>
                        {/* END CONTENT AREA */}

                        {/* BEGIN FOOTER */}
                        <FootLink/>
                        <Footer />
                        {/* END FOOTER */}
                        <Portals />
                    </div>
                </MainContainer>
            </div>
        </>
    );
}
