import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ToDoApi = createApi({
  reducerPath: "todoapi",
  baseQuery: fetchBaseQuery({ 
    baseUrl: "http://localhost:3001",
    //refetchOnFocus: true,
    //refetchOnReconnect: true,
    //refetchOnMountOrArgChange: true
   }),
  tagTypes:['Todos'],
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => ({
        url: "/todos",
      }),
      transformResponse:res=>res.sort((a,b)=>b.id - a.id),
      providesTags:['Todos']
    }),
    addTodos: builder.mutation({
      query: (todo) => ({
        url: "/todos",
        method: "POST",
        body: todo,
      }),
      invalidatesTags:['Todos']
    }),
    updateTodos: builder.mutation({
      query: (todo) => ({
        url: `/todos/${todo.id}`,
        method: "PUT",
        body: todo,
      }),
      invalidatesTags:['Todos']
    }),
    deleteTodos: builder.mutation({
      query: ({ id }) => ({
        url: `todos/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags:['Todos']
    }),
  }),
});

export const {
  useGetTodosQuery,
  useAddTodosMutation,
  useUpdateTodosMutation,
  useDeleteTodosMutation,
} = ToDoApi;
