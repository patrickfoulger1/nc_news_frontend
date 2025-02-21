import { Star, ChatCircleText } from "@phosphor-icons/react";
import { Link, useNavigate, useSearchParams } from "react-router";
import { getDate } from "../utils/formatter";
import { useContext, useState } from "react";
import { NavSettings } from "../contexts/NavSettings";

function ArticleCard({
  article: {
    article_id,
    article_img_url,
    title,
    created_at,
    votes,
    comment_count,
    topic,
  },
}) {
  const { setNavSettings } = useContext(NavSettings);
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();
  const sort = searchParams.get("sort");
  const sortQuery = sort ? `&sort=${sort}` : "";

  return (
    <figure
    onClick={()=>{console.log("hello")}}
      className={`w-full h-full`}
     
    >
      <img
        className="object-cover h-full w-full contrast-100"
        src={article_img_url}
        alt={title}
      />
      <figcaption  className="absolute relative bottom-1/2 lg:bottom-[calc(10%+7rem)] left-1/2  justify-center items-center flex w-[calc(100%-1rem)] h-[calc(70%-4rem)] max-h-45 -translate-x-1/2 -translate-y-1/2 justify-between rounded-xl border border-white bg-white/90 py-4 px-3 shadow-lg shadow-black/5 ">
        <div className="">
          <h5 className="text-l md:text-l font-medium text-slate-800 text-center min-h-10 xl-text-lg">{title}</h5>
          <p className="mt-2 text-slate-600 text-sm  text-center">{getDate(created_at)}</p>
          <div className="flex flex-rows items-center justify-center ">
        
         
            <Star
              className="text-2xl mr-1"
              weight="fill"
              color="#FB2C36"
            ></Star>
            <p className="text-xs mr-3 text-center xl:text-xl">{votes} likes </p>
            <ChatCircleText
              className="text-xl mr-1"
              weight="fill"
              color="#FB2C36"
            ></ChatCircleText>
            <p className="text-xs xl:text-xl text-center"> {comment_count} comments </p>
            <Link
            to={{
              pathname: `/`,
              search: `?topic=${topic}&display=first${sortQuery}`,
            }}
          >
            <button className="m-4 inline-block cursor-pointer bg-black rounded-sm p-1 text-white w-inherit hover:bg-white hover:text-black">
              #{topic}
            </button>
          </Link>
          <p className="inline-block cursor-pointer bg-red-500 rounded-sm p-1 text-white p-2 text-center w-inherit hover:bg-white hover:text-black">
            <a
              onClick={() => {
                navigate(`/${article_id}`);
                setNavSettings((settings) => {
                  const newSettings = { ...settings };
                  newSettings.lastArticleIdClicked = article_id;
                  return newSettings;
                });
              }}
            >
              Read
            </a>
          </p>
          
          </div>
            
         
          
        </div>
       
        
        
      </figcaption>
      
     
    
    </figure>
  );
}

export default ArticleCard;
