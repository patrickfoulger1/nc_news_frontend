import axios from "axios";

const ncNews = axios.create({
  baseURL: "https://nc-news-ttql.onrender.com/api",
});

export const getArticles = async (limit, topic, sort_by, order) => {
  try {
    const response = await ncNews.get("/articles", {
      params: { limit, topic, sort_by, order },
    });

    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getArticleById = async (id) => {
  try {
    const response = await ncNews.get(`/articles/${id}`);

    return response.data.article;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getArticleComments = async (id, limit, p) => {
  try {
    const response = await ncNews.get(`/articles/${id}/comments`, {
      params: { limit, p },
    });
    return response.data.comments;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const patchUpvote = async (inc_votes, id) => {
  try {
    const response = await ncNews.patch(`/articles/${id}`, {
      inc_votes,
    });

    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const postComment = async (username, body, id) => {
  try {
    const response = await ncNews.post(`/articles/${id}/comments`, {
      username,
      body,
    });

    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const deleteComment = async (id) => {
  try {
    await ncNews.delete(`/comments/${id}`);
  } catch (error) {
    return Promise.reject(error);
  }
};
