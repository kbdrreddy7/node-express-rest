import db from "./../db";

var { contentsArray } = db;
const get = id => {
  if (id) return contentsArray.find(tag => tag.id == id);
  return contentsArray;
};
const post = tag => {
  if (!tag.id) tag.id = generateId();
  contentsArray.push(tag);
  return tag.id;
};

export const put = (id, tag) => {
  let old = contentsArray.find(t => t.id === parseInt(id));
  let index = contentsArray.indexOf(old);
  contentsArray[index] = tag;
  return tag;
};
const deleteContent = id => {
  contentsArray = contentsArray.filter(tag => tag.id !== parseInt(id));
};
const deleteContents = idsArray => {
  contentsArray = contentsArray.filter(tag => !idsArray.includes(tag.id + ""));
};

export const generateId = () => {
  return contentsArray[contentsArray.length - 1].id + 1;
};

export default {
  get,
  post,
  put,
  deleteContent,
  deleteContents
};
