export const getBlogs = async () => {
  try {
    const res = await fetch(`http://localhost:8000/api/blogs`, {
      next: { revalidate: 0 },
    });
    const data = await res.json();
    // console.log(data);
    return data.blogs;
  } catch (err) {
    console.log(err);
  }
};

export const getBlogSlug = async (slug: string) => {
  try {
    const res = await fetch(`http://localhost:8000/api/blogs/${slug}`, {
      next: { revalidate: 0 },
    });
    const data = await res.json();
    // console.log(data)
    return data.blog;
  } catch (err) {
    console.log(err);
  }
};

export const getBlogRecom = async (slug: string) => {
  try {
    const res = await fetch(
      `http://localhost:8000/api/blogs?limit=3&neslug=${slug}`,
      { next: { revalidate: 0 } }
    );
    const data = await res.json();
    return data.blogs;
  } catch (err) {
    console.log(err);
  }
};

export const getDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
};
