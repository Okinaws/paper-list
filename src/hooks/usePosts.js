import { useMemo } from "react";

export const useSortedPosts = (posts, sort) => {
    const sortedPosts = useMemo(() => {
        if (sort === "title") {
          return [...posts].sort((a, b) => `${a[sort]}`.localeCompare(b[sort]));
       }
       else if (sort === "id") {
         return [...posts].sort((a, b) => a - b);
       }
       return posts
      }, [sort, posts]);

      return sortedPosts;
}

export const usePosts = (posts, sort, query) => {
    const sortedPosts = useSortedPosts(posts, sort);
    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLocaleLowerCase().includes(query.toLocaleLowerCase()))
      }, [query, sortedPosts]);

    return sortedAndSearchedPosts;
}