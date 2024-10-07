import classes from './scrollBtn.module.css';
const Img = () => (
  <svg
    width="10"
    height="10"
    viewBox="0 0 10 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.46967 8.46967C0.176777 8.76256 0.176777 9.23744 0.46967 9.53033C0.762563 9.82322 1.23744 9.82322 1.53033 9.53033L0.46967 8.46967ZM9.75 1C9.75 0.585786 9.41421 0.25 9 0.25H2.25C1.83579 0.25 1.5 0.585786 1.5 1C1.5 1.41421 1.83579 1.75 2.25 1.75H8.25V7.75C8.25 8.16421 8.58579 8.5 9 8.5C9.41421 8.5 9.75 8.16421 9.75 7.75V1ZM1.53033 9.53033L9.53033 1.53033L8.46967 0.46967L0.46967 8.46967L1.53033 9.53033Z"
      fill="white"
    />
  </svg>
);

type scrollBtnProps = { onScrollFunc: () => void };
export const ScrollBtn = ({ onScrollFunc }: scrollBtnProps) => {
  return (
    <a className={classes.scrollBtn} onClick={onScrollFunc}>
      Наверх
      <Img />
    </a>
  );
};
