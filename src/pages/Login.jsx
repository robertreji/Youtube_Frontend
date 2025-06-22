import LoginForm from "../components/auth/Login/loginForm";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";
export default function Login(){

     const images = [
    "https://cdn.pixabay.com/photo/2020/11/01/03/08/youtube-5702765_640.jpg",
    "https://i.pinimg.com/736x/8c/c2/43/8cc243ff4b976ff10f924b2a54bc226c.jpg",
    "https://i.pinimg.com/564x/3b/af/22/3baf2230d5b5d371cd72f915c19a45e9.jpg",
    "https://storage.ws.pho.to/s2/5B5D74B8-FCA1-11E8-B275-02B2D358B880_m.jpg",
    "https://cdn.pixabay.com/photo/2020/11/01/03/08/youtube-5702765_640.jpg",
    "https://i.pinimg.com/736x/8c/c2/43/8cc243ff4b976ff10f924b2a54bc226c.jpg",
    "https://i.pinimg.com/564x/3b/af/22/3baf2230d5b5d371cd72f915c19a45e9.jpg",
    "https://storage.ws.pho.to/s2/5B5D74B8-FCA1-11E8-B275-02B2D358B880_m.jpg","https://cdn.pixabay.com/photo/2020/11/01/03/08/youtube-5702765_640.jpg",
    "https://i.pinimg.com/736x/8c/c2/43/8cc243ff4b976ff10f924b2a54bc226c.jpg",
    "https://i.pinimg.com/564x/3b/af/22/3baf2230d5b5d371cd72f915c19a45e9.jpg",
    "https://storage.ws.pho.to/s2/5B5D74B8-FCA1-11E8-B275-02B2D358B880_m.jpg","https://cdn.pixabay.com/photo/2020/11/01/03/08/youtube-5702765_640.jpg",
    "https://i.pinimg.com/736x/8c/c2/43/8cc243ff4b976ff10f924b2a54bc226c.jpg",
    "https://i.pinimg.com/564x/3b/af/22/3baf2230d5b5d371cd72f915c19a45e9.jpg",
    "https://storage.ws.pho.to/s2/5B5D74B8-FCA1-11E8-B275-02B2D358B880_m.jpg","https://cdn.pixabay.com/photo/2020/11/01/03/08/youtube-5702765_640.jpg",
    "https://i.pinimg.com/736x/8c/c2/43/8cc243ff4b976ff10f924b2a54bc226c.jpg",
    "https://i.pinimg.com/564x/3b/af/22/3baf2230d5b5d371cd72f915c19a45e9.jpg",
    "https://storage.ws.pho.to/s2/5B5D74B8-FCA1-11E8-B275-02B2D358B880_m.jpg","https://cdn.pixabay.com/photo/2020/11/01/03/08/youtube-5702765_640.jpg",
    "https://i.pinimg.com/736x/8c/c2/43/8cc243ff4b976ff10f924b2a54bc226c.jpg",
    "https://i.pinimg.com/564x/3b/af/22/3baf2230d5b5d371cd72f915c19a45e9.jpg",
    "https://storage.ws.pho.to/s2/5B5D74B8-FCA1-11E8-B275-02B2D358B880_m.jpg","https://cdn.pixabay.com/photo/2020/11/01/03/08/youtube-5702765_640.jpg",
    "https://i.pinimg.com/736x/8c/c2/43/8cc243ff4b976ff10f924b2a54bc226c.jpg",
    "https://i.pinimg.com/564x/3b/af/22/3baf2230d5b5d371cd72f915c19a45e9.jpg",
    "https://storage.ws.pho.to/s2/5B5D74B8-FCA1-11E8-B275-02B2D358B880_m.jpg","https://cdn.pixabay.com/photo/2020/11/01/03/08/youtube-5702765_640.jpg",
    "https://i.pinimg.com/736x/8c/c2/43/8cc243ff4b976ff10f924b2a54bc226c.jpg",
    "https://i.pinimg.com/564x/3b/af/22/3baf2230d5b5d371cd72f915c19a45e9.jpg",
    "https://storage.ws.pho.to/s2/5B5D74B8-FCA1-11E8-B275-02B2D358B880_m.jpg","https://cdn.pixabay.com/photo/2020/11/01/03/08/youtube-5702765_640.jpg",
    "https://i.pinimg.com/736x/8c/c2/43/8cc243ff4b976ff10f924b2a54bc226c.jpg",
    "https://i.pinimg.com/564x/3b/af/22/3baf2230d5b5d371cd72f915c19a45e9.jpg",
    "https://storage.ws.pho.to/s2/5B5D74B8-FCA1-11E8-B275-02B2D358B880_m.jpg","https://cdn.pixabay.com/photo/2020/11/01/03/08/youtube-5702765_640.jpg",
    "https://i.pinimg.com/736x/8c/c2/43/8cc243ff4b976ff10f924b2a54bc226c.jpg",
    "https://i.pinimg.com/564x/3b/af/22/3baf2230d5b5d371cd72f915c19a45e9.jpg",
    "https://storage.ws.pho.to/s2/5B5D74B8-FCA1-11E8-B275-02B2D358B880_m.jpg",
  ];

    return(
        <>
      <div className="w-full flex  h-full">
          <div className="h-full w-1/2 flex justify-center items-center">
                <LoginForm/>
          </div>
          <div className="w-[50%] h-screen   bg-gray-950/50   ring-neutral-700/10 dark:bg-neutral-800">
                <ThreeDMarquee  images={images} />
          </div>
      </div>
        </>
    )
}




