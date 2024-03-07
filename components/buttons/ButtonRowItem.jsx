import Link from "next/link";

const ButtonRowItem = ({ label, active }) => {
  if (!label) {
    return null;
  }
  return (
    <Link
      href={`?tab=${label.toLowerCase()}`}
      className={`text-base capitalize flex-shrink-0 py-[14.5px] ${
        active
          ? "text-primary font-semibold border-b-[3px] border-highlight"
          : "text-token"
      }`}
    >
      {label}
    </Link>
  );
};

export default ButtonRowItem;
