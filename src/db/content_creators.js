export class content_creator {
  constructor(id, name, created_at, updated_at) {
    this.id = id;
    this.name = name;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}

var contentCreatorsArray = [];

for (let i = 0; i < 50; i++) {
  contentCreatorsArray.push(new content_creator(i, `user_${i}`, new Date()));
}

export default {
  content_creator,
  contentCreatorsArray
};
