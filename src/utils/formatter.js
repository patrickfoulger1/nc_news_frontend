export const getDate = (createdAt) => {
  return new Date(createdAt).toUTCString().slice(0, 16);
};
