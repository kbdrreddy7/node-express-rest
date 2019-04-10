export class wisdom_categorie {
  constructor(id, name, status, created_at, updated_at) {
    this.id = id;
    this.name = name;
    this.status = status;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}

var wisdomArray = [];

for (let i = 0; i < 15; i++) {
  wisdomArray.push(
    new wisdom_categorie(
      i,
      `wisdom_categories_${i}`,
      "NOT_APPROVED",
      new Date()
    )
  );
}

export default {
  wisdom_categorie,
  wisdomArray
};
