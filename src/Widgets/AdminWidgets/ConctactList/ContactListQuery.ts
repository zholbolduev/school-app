import {
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

export const contactListApi = createApi({
  reducerPath: "contactListApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "",
  }),
  endpoints: (builder) => ({
    getContactList: builder.query({
      query: () => ({
        url: "",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetContactListQuery } = contactListApi;
