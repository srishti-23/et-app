import React from "react";
import { useForm } from "react-hook-form";
import { LuSearch } from "react-icons/lu";
import { useLocation, useNavigate } from "react-router-dom";

// SearchBar component
const SearchBar = () => {
    // Getting current location
    const { pathname } = useLocation();
    const navigate = useNavigate();

    const { register, handleSubmit, reset } = useForm();

    // Function to handle form submission
    const onSubmit = (data) => {
        // Switch statement to handle different pathnames
        switch (pathname) {
            case "/":
                navigate(`/all/search/${encodeURIComponent(data.searchQuery)}`);
                break;
            case "/movie":
                navigate(`/movie/search/${encodeURIComponent(data.searchQuery)}`);
                break;
            case "/tv":
                navigate(`/tv/search/${encodeURIComponent(data.searchQuery)}`);
                break;
            default:
                navigate(`/all/search/${encodeURIComponent(data.searchQuery)}`);
        }
        // Reset form after submission
        reset();
    };

    return (
        // Search form container with styling
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full ml-2 mt-4 h-14 bg-[#161D2F] z-50 flex gap-3 justify-center items-center font-light text-HeadingXS lg:justify-evenly lg:text-HeadingM px-2 lg:py-5 lg:gap-0 rounded-lg"
        >
            {/* Search icon */}
            <LuSearch className="text-xl text-white lg:text-3xl " />

            {/* Search input */}
            <input
                type="search"
                name="searchQuery"
                id="search"
                {...register("searchQuery")}
                placeholder={
                    pathname.includes("movie")
                        ? "Search for movies..."
                        : pathname.includes("tv")
                            ? "Search for TV series..."
                            : pathname.includes("bookmarks")
                                ? "Search for bookmarked media..."
                                : "Search for movies and TV series..."
                }
                className="w-[95%] text-2xl bg-[#161D2F] text-gray-500 h-fit caret-darkRed focus:outline-none border-b-2 border-transparent focus:border-waikawaGrey lg:w-[94%] placeholder-text-wrap"
            />
        </form>
    );
};

export default SearchBar;
