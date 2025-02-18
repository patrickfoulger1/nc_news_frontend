import axios from "axios";

const ncNews = axios.create({
  baseURL: "https://nc-news-ttql.onrender.com/api",
});

export const getArticles = async (limit, sort_by, topic) => {
  try {
    const response = await ncNews.get("/articles", {
      params: { limit, sort_by, topic },
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getArticleById = async (id) => {
  try {
    const response = await ncNews.get(`/articles/${id}`);

    return response.data.article;
  } catch (error) {}
};

export const getArticleComments = async (id, limit, p) => {
  try {
    const response = await ncNews.get(`/articles/${id}/comments`, {
      params: { limit, p },
    });
    return response.data.comments;
  } catch (error) {
    console.log(error);
  }
};
