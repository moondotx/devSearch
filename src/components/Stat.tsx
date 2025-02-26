interface StatProps {
  label: string;
  value: number;
}

const Stat = ({ label, value }: StatProps) => {
  return (
    <div className="text-center">
      <p className="text-lg font-semibold text-gray-900 dark:text-white">
        {value}
      </p>
      <p className="text-gray-600 dark:text-gray-400">{label}</p>
    </div>
  );
};

export default Stat;
