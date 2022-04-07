import { createContext } from "react";

export const PostsListContext= createContext({
    PostsList:[],
    setPostsList:()=>{}
});

const {Provider, Consumer}=PostsListContext;

export const PostsListProvider=Provider;
export const PostsListConsumer=Consumer;