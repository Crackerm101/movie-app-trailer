import "./App.css";
import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HeaderHomepage from "./Pages/Header";

const Navbar = lazy(() => import("./Components/Navbar/Navbar"));
const CategoryPage = lazy(() => import("./Pages/CategoryPage"));
const Price = lazy(() => import("./Pages/Price"));
const Footer = lazy(() => import("./Components/Footer/Footer"));
const Contact = lazy(() => import("./Pages/Contact"));

const Movie = lazy(() => import("./Pages/Movie"));

const MovieRow = lazy(() => import("./Components/Allmovies/MovieRow"));
const TVshows = lazy(() => import("./Pages/TVshows"));

function App() {
    return (
        <Router>
            <Suspense
                fallback={
                    <div className="Loader_con">
                        <span className="loader"></span>
                    </div>
                }
            >
                <Navbar />
                <Routes>
                    <Route path="/">
                        <Route index element={<HeaderHomepage />} />
                        <Route index element={<MovieRow />} />
                        <Route
                            exact
                            path="CategoryPage"
                            element={<CategoryPage />}
                        />
                        <Route exact path="movie/:id" element={<Movie />} />
                        <Route exact path="TVshows" element={<TVshows />} />
                        <Route exact path="Price" element={<Price />} />
                        <Route exact path="Contact" element={<Contact />} />
                    </Route>
                </Routes>
                <Footer />
            </Suspense>
        </Router>
    );
}

export default App;
