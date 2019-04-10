import db from "./../db";

var { wisdomArray } = db;
const get = id => {
  if (id) return wisdomArray.find(tag => tag.id == id);
  return wisdomArray;
};
const post = tag => {
  if (!tag.id) tag.id = generateId();
  wisdomArray.push(tag);
  return tag.id;
};

export const put = (id, tag) => {
  let old = wisdomArray.find(t => t.id === parseInt(id));
  let index = wisdomArray.indexOf(old);
  wisdomArray[index] = tag;
  return tag;
};
const deleteWisdom = id => {
  wisdomArray = wisdomArray.filter(tag => tag.id !== parseInt(id));
};

const deleteWisdoms = idsArray => {
  wisdomArray = wisdomArray.filter(tag => !idsArray.includes(tag.id + ""));
};

export const generateId = () => {
  return wisdomArray[wisdomArray.length - 1].id + 1;
};

export default {
  get,
  post,
  put,
  deleteWisdom,
  deleteWisdoms
};
