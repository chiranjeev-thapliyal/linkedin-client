export const toCapitalize = (str) => {
  if (!str) return "";
  return str[0].toUpperCase() + str.slice(1);
};

export const checkProfileImage = (url) => {
  if (!url || url.length <= 0)
    return "https://static-exp1.licdn.com/sc/h/1c5u578iilxfi4m4dvc4q810q";
  else return url;
};
