import formatDate from "../utils/formatDate";
import Stat from "./Stat";
import InfoItem from "./InfoItem";
import websiteIcon from "../assets/icon-website.svg";
import twitterIcon from "../assets/icon-twitter.svg";
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
    <div className=" p-6 rounded-lg shadow-md w-full max-w-2xl mt-6 bg-white dark:bg-[#2B3442]">
      {/* Profile Header */}
      <div className="flex items-center justify-between gap-6">
        <div className="flex flex-row  lg:items-start gap-5 md:gap-10 sm:gap-8">
          {/* Avatar */}
          <div>
            <img
              src={user.avatar_url}
              alt={user.name || user.login}
              className="w-[70px] h-[70px] sm:w-[117px] sm:h-[117px] rounded-full lg:mx-[20px]"
            />
          </div>

          {/* Name and Joined Date */}
          <div className="flex flex-col lg:w-[480px]  lg:items-start lg:flex-row lg:justify-between sm:items-start  gap-2 lg-gap-0">
            <div>
              <h2 className={` text-[14px] md:text-[26px] font-bold `}>
                {user.name || user.login}
              </h2>
              <p className="text-primary">@{user.login}</p>
            </div>
            <p className="text-gray-500 dark:text-gray-300 pb-20 text-[16px]">
              Joined {formatDate(user.created_at)}
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between gap-6">
        <div className="space-y-4">
          <p className="text-body">{user.bio || "This profile has no bio"}</p>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-gray-100 dark:bg-gray-800 p-4 mt-4 rounded-lg flex justify-between text-center gap-4">
        <Stat label="Repos" value={user.public_repos} />
        <Stat label="Followers" value={user.followers} />
        <Stat label="Following" value={user.following} />
      </div>

      {/* Additional Info */}
      <div className="grid sm:grid-cols-2 gap-4 mt-7">
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
          link={
            user.blog
              ? user.blog.startsWith("http")
                ? user.blog
                : `https://${user.blog}`
              : undefined
          }
          available={!!user.blog}
        />

        <InfoItem
          icon={companyIcon}
          text={user.company || "Not Available"}
          available={!!user.company}
        />
      </div>
    </div>
  );
};

export default UserCard;
