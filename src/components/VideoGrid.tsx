import { VideoCard } from "./VideoCard"
const Videos = [{
    title : "How to learn coding in 30 days | 30 days plan | Code with me",
    image : "srinivas.jpg",
    thumbimage : "thumb.jpg",
    author : "Praveen Kumar",
    views : "100k",
    timestamp : "3 days ago"
},{
    title : "How to learn singing in 30 days | 30 days plan | Code with me",
    image : "srinivas.jpg",
    thumbimage : "thumb.jpg",
    author : "Praveen Kumar",
    views : "100k",
    timestamp : "3 days ago"
},{
    title : "How to learn playing chess in 30 days | 30 days plan | Code with me",
    image : "srinivas.jpg",
    thumbimage : "thumb.jpg",
    author : "Praveen Kumar",
    views : "100k",
    timestamp : "3 days ago"
},{
    title : "How to learn Cricket in 30 days | 30 days plan | Code with me",
    image : "srinivas.jpg",
    thumbimage : "thumb.jpg",
    author : "Praveen Kumar",
    views : "100k",
    timestamp : "3 days ago"
},{
    title : "How to learn coding in 30 days | 30 days plan | Code with me",
    image : "srinivas.jpg",
    thumbimage : "thumb.jpg",
    author : "Praveen Kumar",
    views : "100k",
    timestamp : "3 days ago"
},{
    title : "How to learn singing in 30 days | 30 days plan | Code with me",
    image : "srinivas.jpg",
    thumbimage : "thumb.jpg",
    author : "Praveen Kumar",
    views : "100k",
    timestamp : "3 days ago"
},{
    title : "How to learn playing chess in 30 days | 30 days plan | Code with me",
    image : "srinivas.jpg",
    thumbimage : "thumb.jpg",
    author : "Praveen Kumar",
    views : "100k",
    timestamp : "3 days ago"
},{
    title : "How to learn Cricket in 30 days | 30 days plan | Code with me",
    image : "srinivas.jpg",
    thumbimage : "thumb.jpg",
    author : "Praveen Kumar",
    views : "100k",
    timestamp : "3 days ago"
}
]

export const VideoGrid = () =>{
    return <div className="grid grid-cols-1
     md:grid-cols-2 
     lg:grid-cols-4">
        {Videos.map(video => <div>
            <VideoCard
                title = {video.title}
                image = {video.image}
                thumbimage = {video.thumbimage}
                author = {video.author}
                views = {video.author}
                timestamp = {video.timestamp}
            >
            </VideoCard>
        </div>)}
    </div>
}