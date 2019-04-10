class tag {
  constructor(id, name, created_at, updated_at) {
    this.id = id;
    this.name = name;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}

var tagsArray = [];

for (let i = 0; i < 15; i++) {
  tagsArray.push(new tag(i, `tag_${i}`, new Date()));
}

export default {
  tag,
  tagsArray
};
