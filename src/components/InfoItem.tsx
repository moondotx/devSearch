const InfoItem = ({
  icon,
  text,
  link,
  available = true,
}: {
  icon: string;
  text: string;
  link?: string;
  available?: boolean;
}) => (
  <div className={`flex items-center gap-2 ${!available && "opacity-50"}`}>
    {/* Use the local icon as an image */}
    <img src={icon} alt="icon" className="w-5 h-5" />
    {link ? (
      <a
        href={link.startsWith("http") ? link : `https://${link}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-body hover:underline truncate"
      >
        {text || "Not Available"}
      </a>
    ) : (
      <span className="text-body truncate">
        {text === null || text === undefined || text === ""
          ? "Not Available"
          : text}
      </span>
    )}
  </div>
);

export default InfoItem;
