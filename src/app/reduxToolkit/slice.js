"use client";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { base_url } from "@/server";

const baseUrl = base_url();

// --- LOGIN THUNK ---
export const loginUser = createAsyncThunk(
    "auth/loginUser",
    async (loginData, { rejectWithValue }) => {
        try {
            const res = await axios.post(`${baseUrl}user/login`, loginData);
            return res.data; // expected { user, token }
        } catch (error) {
            return rejectWithValue(error.response?.data || "Login failed");
        }
    }
);

// --- FETCH PROFILE THUNK ---
export const fetchUseCard = createAsyncThunk(
    "auth/fetchUseCard",
    async (_, { getState, rejectWithValue }) => {
        try {
            const { token } = getState().auth;
            const res = await axios.get(`${baseUrl}card/user`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            return res.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || "Failed to fetch profile");
        }
    }
);

// --- SLICE ---
const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        token: null,
        data: null, // raw login data
        loading: false,
        error: null,
    },
    reducers: {
        logout: (state) => {
            state.user = null;
            state.token = null;
            state.data = null;
        },
    },
    extraReducers: (builder) => {
        builder
            // Login cases
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
                state.user = action.payload.user;
                state.token = action.payload.token;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            // Fetch Profile cases
            .addCase(fetchUseCard.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUseCard.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload; // update user profile
            })
            .addCase(fetchUseCard.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
