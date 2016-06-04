/*
This file centralizes all our custom component overrides. 
*/

import CustomLogo from "./components/CustomLogo.jsx";
import CustomNewsletter from "./components/CustomNewsletter.jsx";
import CustomPostsItem from "./components/CustomPostsItem.jsx";
import CustomHeader from "./components/CustomHeader.jsx";

// Telescope.components.Logo = CustomLogo;
Telescope.components.Newsletter = CustomNewsletter;
Telescope.components.PostsItem = CustomPostsItem;
// Telescope.components.Header = CustomHeader;