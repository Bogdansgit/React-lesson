import React from "react";
import { Routes, Route } from 'react-router-dom';

import Layout from "../layouts/layout";
import PrivateLayout from "../layouts/PrivateLayout";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import NoMatch from "../pages/NoMatch";
import Post from "../pages/Post";
import Posts from "../pages/Posts";
import Tasks from "../pages/Tasks";

function Router() {
	return (
		<Routes>
			<Route element={<Layout />}>
				<Route element={<PrivateLayout />}>
					<Route path="/dashboard" element={<Dashboard />} />
					<Route path="/dashboard/tasks" element={<Tasks />} />
					<Route path="/dashboard/posts" element={<Posts />} />
				</Route>
					<Route index element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/post/:id" element={<Post />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/*" element={<NoMatch />} />
			</Route >
		</Routes>
	)
}

export default Router;