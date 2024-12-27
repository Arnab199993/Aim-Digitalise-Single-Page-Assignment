const Card = (props: any) => {
  const { children, ...rest } = props;
  return (
    <div
      {...rest}
      className="rounded-2xl xl:w-[70%] lg:w-[70%] md:w-[70%] sm:w-[70%] 2xl:w-[70%] m-4"
      style={{
        boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.5)",
      }}
    >
      {children}
    </div>
  );
};

export default Card;
