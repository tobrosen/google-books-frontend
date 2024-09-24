type SubHeadingProps = {
  text: string;
};

const SubHeading = ({ text }: SubHeadingProps) => {
  return <h4>{text}</h4>;
};

export default SubHeading;
