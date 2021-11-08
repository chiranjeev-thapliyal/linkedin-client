import { NetworkSuggestionItem2 } from "./NetworkSuggestionItem2";

const suggestData2 = [
  {
    id: 1,
    bgImg:
      "https://img.freepik.com/free-vector/green-sand-paper_53876-86281.jpg?size=626&ext=jpg",
    avatar:
      "https://media-exp1.licdn.com/dms/image/C4E0BAQGECC5LEEu8qA/company-logo_200_200/0/1632751057259?e=1643846400&v=beta&t=yZ6-NK8I4ucZsdcpQCB5JSnrYNtGywwsyjXVseYR-U4",
    name: "HP",
    common: "4,849,371 followers",
  },
  {
    id: 2,
    bgImg:
      "https://image.shutterstock.com/image-vector/light-blue-white-background-260nw-1387003745.jpg",
    avatar:
      "https://media-exp1.licdn.com/dms/image/C560BAQEzTNiX80mhTw/company-logo_200_200/0/1623851579762?e=1643846400&v=beta&t=Vc7s-vZDaN65zhtF7PtdSiDXhityroqIlPPNbeaF3zA",
    name: "Meesho",
    common: "257, 770 followers",
  },
  {
    id: 3,
    bgImg:
      "https://img.freepik.com/free-vector/pink-oil-painted-canvas-background_53876-93727.jpg?size=626&ext=jpg",
    avatar:
      "https://media-exp1.licdn.com/dms/image/C4D0BAQFiYnR1Mbtxdg/company-logo_200_200/0/1538169321193?e=1643846400&v=beta&t=RGdBh97QFgg5SExWlnc-xoGN4OTR4vR7y5gUTIJL2xM",
    name: "Uber",
    common: "2,045,872 followers",
  },
  {
    id: 4,
    bgImg:
      "https://image.shutterstock.com/image-vector/light-blue-white-background-260nw-1387003745.jpg",
    avatar:
      "https://media-exp1.licdn.com/dms/image/C560BAQF6H8gAs-JyFg/company-logo_200_200/0/1627543110554?e=1643846400&v=beta&t=CDzI5LBcuPELcthMlFzqTQA8r6uuY7pN1YNMY37lVi4",
    name: "Flipkart",
    common: "2,349,926 followers",
  },
  {
    id: 5,
    bgImg:
      "https://img.freepik.com/free-vector/pink-oil-painted-canvas-background_53876-93727.jpg?size=626&ext=jpg",
    avatar:
      "https://media-exp1.licdn.com/dms/image/C4D0BAQGZKGGJ75S72g/company-logo_200_200/0/1629754938156?e=1643846400&v=beta&t=k-MJXmy6tCuEE154jH8wO_fcMFICjRSbUCGQBcVwQg0",
    name: "LinkedIn",
    common: "19,303,209 followers",
  },
  {
    id: 6,
    bgImg:
      "https://image.shutterstock.com/image-vector/light-blue-white-background-260nw-1387003745.jpg",
    avatar:
      "https://media-exp1.licdn.com/dms/image/C4E0BAQHjvfNL_2AXIw/company-logo_200_200/0/1628018657141?e=1643846400&v=beta&t=QXYCPpT9gY7DvuDVghuMTdbM2gTdeLT4iNyXVlK_T5o",
    name: "Accenture",
    common: "13,052387",
  },
  {
    id: 7,
    bgImg:
      "https://thumbs.dreamstime.com/b/grey-textured-plain-background-wallpaper-grey-textured-plain-background-wallpaper-design-use-text-image-137515233.jpg",
    avatar:
      "https://media-exp1.licdn.com/dms/image/C560BAQGrV5i4K9YdhQ/company-logo_200_200/0/1621582241755?e=1643846400&v=beta&t=pDHiU7otqsYIPYMsXFN1bEcOebjneM8QJbfT5jo8VgY",
    name: "Facebook",
    common: "138,027 followers",
  },
  {
    id: 8,
    bgImg:
      "https://image.shutterstock.com/image-vector/light-blue-white-background-260nw-1387003745.jpg",
    avatar:
      "https://media-exp1.licdn.com/dms/image/C4E0BAQEF0x_q7m5JjQ/company-logo_200_200/0/1599932632971?e=1643846400&v=beta&t=H9FmDGrzQRgK9PrIaTeouua5Vk3b02n2iVN46j4wRmc",
    name: "GeeksforGeeks",
    common: "688,193 followers",
  },
];

export const NetworkSuggestion2 = ({heading1}) => {
  return (
    <div className="NetSuggestion1">
      <div className="NetSugHeading1">
        <p>{heading1}</p>
        <p>See all</p>
      </div>
      <div className="NetSuggestionsAll">
        {suggestData2.map((e, i) => {
          return (
            <div key={e.id} className="NetworkSuggestions">
              <NetworkSuggestionItem2 {...e} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
