import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const userSlice = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/moments/user" }),
    endpoints: (builder) => ({
        addUserData: builder.mutation({
            query: (user) => ({
                url: '/',
                method: 'POST',
                body: user,
                headers: { 'Content-type': 'application/json; charset=UTF-8' }
            })
        }),
        authoriseUserData: builder.mutation({
            query: (user) => ({
                url: '/login',
                method: 'POST',
                body: user,
                headers: { 'Content-type': 'application/json; charset=UTF-8' }
            })
        }),
    }),
});

export const {
    useAddUserDataMutation,
    useAuthoriseUserDataMutation
} = userSlice