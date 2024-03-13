
import IconPlayCircle from '@/components/icon/icon-play-circle';
import IconX from '@/components/icon/icon-x';
import Link from "next/link";
import Image from "next/image";




interface VideoCardProps {
    key:any
    url: string;
    alt:string;
    data:string,
    title:string,
    content:string,
    author:string,
    avatar:string,
    slug:string,
    tags:[]
}

const VideoCardComponent = ({key,url,alt,data,title,content,author,avatar,slug,tags}:VideoCardProps) => {

    return (

            <>
                        <div
                            key={key}
                            className="space-y-5 rounded-md border border-white-light bg-white p-5 shadow-[0px_0px_2px_0px_rgba(145,158,171,0.20),0px_12px_24px_-4px_rgba(145,158,171,0.12)] dark:border-[#1B2E4B] dark:bg-black"
                        >
                            <Link href={`/video/detail/${slug}`}>
                                <div className="group relative h-[340px] overflow-hidden rounded-md">
                                    <Image src={url} alt={alt} fill className="h-full w-full cursor-pointer object-cover" />

                                    <button
                                        type="button"
                                        className="absolute left-1/2 top-1/2 grid h-[62px] w-[62px] -translate-x-1/2 -translate-y-1/2 place-content-center rounded-full text-white duration-300 group-hover:scale-110"
                                    >
                                        <IconPlayCircle className="h-[62px] w-[62px]" fill={true} />
                                    </button>
                                    <div className="absolute bottom-0 left-0 w-full bg-white/30 px-5 py-[22px] text-center text-xl text-white backdrop-blur-[5px]">{title}</div>
                                </div>
                            </Link>
                        </div>

            </>

    );
};

export default VideoCardComponent;
