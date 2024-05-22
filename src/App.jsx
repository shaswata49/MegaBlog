import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import authService from "./appwrite/auth";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { login, logout } from "./store/authSlice";
import { Outlet } from "react-router-dom";
import appwriteService from "./appwrite/config";
import { setPosts as allPosts } from "./store/postSlice";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await authService.getCurrentUser();
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }

        const postsResponse = await appwriteService.getPosts([]);
        if (postsResponse && postsResponse.documents) {
          dispatch(allPosts(postsResponse.documents));
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle error, e.g., set an error state or show a message to the user
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [dispatch]);

  return !loading ? (
    <div className="min-h-screen flex-wrap content-between bg-customBlue">
      <div className="w-full block">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;
