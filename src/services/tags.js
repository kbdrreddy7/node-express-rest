import db from "./../db";

var { tagsArray } = db;
export const get = id => {
  if (id) return tagsArray.find(tag => tag.id == id);
  return tagsArray;
};
export const post = tag => {
  if (!tag.id) tag.id = generateId();
  tagsArray.push(tag);
  return tag.id;
};

export const put = (id, tag) => {
  let old = tagsArray.find(t => t.id === parseInt(id));
  let index = tagsArray.indexOf(old);
  console.log(" index ", index, " old ", old, " new ", tag);
  tagsArray[index] = tag;
  return tag;
};
const deleteTag = id => {
  tagsArray = tagsArray.filter(tag => tag.id !== id);
};
const deleteTags = idsArray => {
  tagsArray = tagsArray.filter(tag => !idsArray.includes(tag.id + ""));
};

export const generateId = () => {
  return tagsArray[tagsArray.length - 1].id + 1;
};

export default {
  get,
  post,
  put,
  deleteTag,
  deleteTags
};
