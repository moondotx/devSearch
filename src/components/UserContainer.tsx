import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";
import SearchBar from "./SearchBar";

const UserContainer = () => {
  interface User {
    login: string;
    id: number;
    avatar_url: string;
    html_url: string;
    name: string;
    created_at: string;
    bio: string;
    public_repos: number;
    followers: number;
    following: number;
    location: string;
    email: string | null;
    blog: string;
    twitter_username: string | null;
    company: string | null;
  }

  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchUserData = async (username: string) => {
    setLoading(true);
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserData("octocat"); // Default user
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <SearchBar onSearch={fetchUserData} />
      {loading ? (
        <div>Loading...</div>
      ) : user ? (
        <UserCard user={user} />
      ) : (
        <div>No user data</div>
      )}
    </div>
  );
};

export default UserContainer;
