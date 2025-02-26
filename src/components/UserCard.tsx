import formatDate from "../utils/formatDate";
import Stat from "./Stat";
import InfoItem from "./InfoItem";
import twitterIcon from "../assets/icon-twitter.svg";
import websiteIcon from "../assets/icon-website.svg";
import locationIcon from "../assets/icon-location.svg";
import companyIcon from "../assets/icon-company.svg";

interface User {
  avatar_url: string;
  name: string | null;
  login: string;
  created_at: string;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
  location: string | null;
  twitter_username: string | null;
  blog: string | null;
  company: string | null;
}

interface UserCardProps {
  user: User;
}

const UserCard = ({ user }: UserCardProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-2xl mt-6">
      {/* Avatar & User Info */}
      <div className="flex flex-col sm:flex-row gap-6">
        {/* Avatar (Left Side) */}
        <div className="flex-shrink-0">
          <img
            src={user.avatar_url}
            alt={user.name || user.login}
            className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border border-gray-300 dark:border-gray-600"
          />
        </div>

        {/* User Details */}
        <div className="flex flex-col flex-grow">
          <div className="flex flex-col sm:flex-row sm:justify-between items-start">
            <div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                {user.name || user.login}
              </h2>
              <p className="text-blue-500">@{user.login}</p>
            </div>
            <p className="text-gray-500 dark:text-gray-400">
              Joined {formatDate(user.created_at)}
            </p>
          </div>

          {/* Bio */}
          <p className="text-gray-700 dark:text-gray-300 mt-4">
            {user.bio || "This profile has no bio"}
          </p>

          {/* Stats */}
          <div className="bg-gray-100 dark:bg-gray-700 p-4 mt-4 rounded-lg flex justify-between text-center">
            <Stat label="Repos" value={user.public_repos} />
            <Stat label="Followers" value={user.followers} />
            <Stat label="Following" value={user.following} />
          </div>

          {/* Additional Info */}
          <div className="grid sm:grid-cols-2 gap-4 mt-4">
            <InfoItem
              icon={locationIcon}
              text={user.location || "Not Available"}
              available={!!user.location}
            />
            <InfoItem
              icon={twitterIcon}
              text={
                user.twitter_username
                  ? `@${user.twitter_username}`
                  : "Not Available"
              }
              available={!!user.twitter_username}
              link={
                user.twitter_username
                  ? `https://twitter.com/${user.twitter_username}`
                  : undefined
              }
            />
            <InfoItem
              icon={websiteIcon}
              text={user.blog || "Not Available"}
              link={user.blog || undefined}
              available={!!user.blog}
            />
            <InfoItem
              icon={companyIcon}
              text={user.company || "Not Available"}
              available={!!user.company}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
