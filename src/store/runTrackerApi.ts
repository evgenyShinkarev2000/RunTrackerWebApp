import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const runTrackerApi = createApi({
  baseQuery: fetchBaseQuery({
    // baseUrl: "http://localhost:5222/",
    baseUrl: `http://${window.location.hostname}:5222/`,
  }),
  endpoints: (builder) => ({
    getRunCoverById: builder.query<any, number>({
      query: (id) => `RunCover/GetById/${id}`,
    }),
  }),
});