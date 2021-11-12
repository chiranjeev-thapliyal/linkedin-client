export const toCapitalize = (str) => {
  if (!str) return '';
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
};

export const checkProfileImage = (url) => {
  if (!url || url.length <= 0)
    return 'https://static-exp1.licdn.com/sc/h/1c5u578iilxfi4m4dvc4q810q';
  else return url;
};

export const checkCoverImage = (url) => {
  if (!url || url.length <= 0) {
    return 'https://media-exp1.licdn.com/dms/image/C4E16AQGX4j2u1oNlYg/profile-displaybackgroundimage-shrink_200_800/0/1633087595695?e=1642032000&v=beta&t=t5-afyk_K4B7PrvgGqpdhVgTDU8w8L1UZlMq4LuVULc';
  } else return url;
};
