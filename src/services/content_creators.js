import db from "./../db";

const { creatorsArray } = db;
export const get = id => {
  if (id) return creatorsArray.find(tag => tag.id == id);
  return creatorsArray;
};
export const post = tag => {
  creatorsArray.push(tag);
};

export const put = (id, tag) => {
  creatorsArray[id] = tag;
};
const deleteCreator = id => {
  creatorsArray.splice(id, 1);
};

export default {
  get,
  post,
  put,
  deleteCreator
};
