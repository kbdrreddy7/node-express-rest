export class content {
  constructor(
    id,
    content_creator_id,
    content_type,
    name,
    summary,
    image_name,
    source_url,
    duration_in_seconds,
    premium,
    tags,
    wisdom_categories,
    created_at,
    updated_at
  ) {
    this.id = id;
    this.content_creator_id = content_creator_id;
    this.content_type = content_type;
    this.name = name;
    this.summary = summary;
    this.image_name = image_name;
    this.source_url = source_url;
    this.duration_in_seconds = duration_in_seconds;
    this.premium = premium;
    this.tags = tags;
    this.wisdom_categories = wisdom_categories;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}

var contentArray = [];

for (let i = 0; i < 5; i++) {
  contentArray.push(
    new content(
      i,
      i,
      "ARTICLE",
      `content_${i}`,
      `summary_${i}`,
      `image_name_${i}`,
      `source_url_${i}`,
      10000,
      false,
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      new Date()
    )
  );
}

export default {
  content,
  contentArray
};
