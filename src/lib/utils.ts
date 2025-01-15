export const isMobile = () => {
  if (typeof window === "undefined") return false;
  const width = window.innerWidth;
  return width <= 1024;
};

export const cn = (...classes: string[]) => {

  return classes.filter(Boolean).join(' ');

};
