import { useContext, useEffect, useState } from "react";
import ArticleCarousel from "./ArticleCarousel";
import { getArticles } from "../utils/ncnews-api";
import { useSearchParams } from "react-router";
import { NavSettings } from "../contexts/NavSettings";
import ArticleSortMenu from "./ArticleSortMenu";
import {
  CalendarSlash,
  ChatCircleSlash,
  ChatCircleText,
  ClockUser,
  Star,
} from "@phosphor-icons/react";

function ArticleExplorer() {
  const [articles, setArticles] = useState([]);
  const [articlesLoading, setArticlesLoading] = useState(true);
  const [swiper, setSwiper] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const { setNavSettings, navSettings } = useContext(NavSettings);
  const display = searchParams.get("display");
  const topic = searchParams.get("topic");
  

  let sortQuery = searchParams.get("sort");
  if (!sortQuery) {
    sortQuery = "newest";
  }

  const [sorts, setSorts] = useState([
    {
      name: "Newest",
      sort_by: "created_at",
      order: "DESC",
      icon: <ClockUser weight="fill" color="currentColor" />,
      active: false,
      query: "newest",
    },
    {
      name: "Most Commented",
      sort_by: "comment_count",
      order: "DESC",
      icon: <ChatCircleText weight="fill" color="currentColor" />,
      active: false,
      query: "mostcomments",
    },
    {
      name: "Most Liked",
      sort_by: "votes",
      order: "Desc",
      icon: <Star weight="fill" color="currentColor" />,
      active: false,
      query: "mostliked",
    },
    {
      name: "Oldest",
      sort_by: "created_at",
      order: "Asc",
      icon: <ClockUser weight="fill" color="currentColor" />,
      active: false,
      query: "oldest",
    },
    {
      name: "Least Commented",
      sort_by: "comment_count",
      order: "ASC",
      icon: <ChatCircleSlash weight="regular" color="currentColor" />,
      active: false,
      query: "leastcomments",
    },
    {
      name: "Least Liked",
      sort_by: "votes",
      order: "Asc",
      icon: <Star weight="regular" color="currentColor" />,
      active: false,
      query: "leastliked",
    },
  ])

  useEffect(()=>{
      setSorts((sorts)=>{
        const newSorts = [...sorts]
        for(const sort of newSorts) {
          if(sort.query === sortQuery) {
            sort.active = true
          }else{
            sort.active = false
          }
        }

        return newSorts

      })


  }, [searchParams])

  useEffect(() => {
    setNavSettings((settings) => {
      const newSettings = { ...settings };
      newSettings.currentPage = "Home";
      return newSettings;
    });

    setArticlesLoading(true);
    const activeSort = sorts.find((thisSort) => {
      return thisSort.query === sortQuery;
    });
    let sort_by, order;
    if (activeSort) {
      sort_by = activeSort.sort_by;
      order = activeSort.order;
    }
    getArticles(99, topic, sort_by, order)
      .then((res) => {
        setArticles(res.articles);
        setArticlesLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setArticlesLoading(false);
      });
  }, [topic, sortQuery, display]);

  useEffect(() => {
    if ((swiper, !articlesLoading)) {
      if (display) {
        if (display === "first") {

          swiper.slideTo(0);
        } else {
          articles.forEach(({ article_id }, index) => {
            if (article_id === +display) {
              if (index > 1) {
     

                swiper.slideTo(index);
              }
            }
          });
        }
      }
    }
  }, [searchParams, swiper, articlesLoading]);

  const loading = articlesLoading ? <p>loading...</p> : null;

  return (
    <>
      {loading}
      <div className="absolute flex flex-col items-center justify-center fixed w-1/2 h-1/13  z-40 top-8 md:top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2  md:-translate-y-0">
        <p className="text-white font-black text-5xl [text-shadow:_0px_0px_5px_rgba(0,0,0,0.5)]">
          #{topic ? topic : "all"}
        </p>
      </div>
      <section className="flex h-full w-full" aria-label="Articles">
        <ArticleCarousel articles={articles} setSwiper={setSwiper} />
        <ArticleSortMenu
          visible={navSettings.sortMenuActive}
          sorts={sorts}
        ></ArticleSortMenu>
      </section>
    </>
  );
}

export default ArticleExplorer;
