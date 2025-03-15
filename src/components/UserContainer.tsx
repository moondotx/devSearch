import { useState } from "react";
import UserCard from "./UserCard";
import SearchBar from "./SearchBar";

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

const UserContainer = () => {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);

  const searchUser = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim()) {
      setError("Username cannot be empty");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error("User not found");
      }
      const data = await response.json();
      setUser(data);
    } catch (error) {
      setError((error as Error).message);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex w-full px-2 flex-col items-center justify-center   space-y-6">
      <SearchBar
        username={username}
        setUsername={setUsername}
        searchUser={searchUser}
        isLoading={loading}
        error={error}
      />
      {user && <UserCard user={user} />}
    </div>
  );
};

export default UserContainer;
