import userPost1 from "../assets/images/users/meowed.svg";
import imgPost1 from "../assets/images/posts/gato-telefone.svg";
import userLiked1 from "../assets/images/users/respondeai.svg";
import userPost2 from "../assets/images/users/barked.svg";
import imgPost2 from "../assets/images/posts/dog.svg";
import userLiked2 from "../assets/images/users/adorable_animals.svg";

export const postData = [
  {
    userName: "meowed",
    userImage: userPost1,
    userPost: imgPost1,
    pictureLiked: userLiked1,
    whoLiked: "respondeai",
    numberOfLikes: 99.159,
    postCaption: "#Connected",
    numberOfComments: 3.245,
    comments: [
      { userName: "barked", comment: "Difícil não dar uma espiadinha" },
      { userName: "adorable_animals", comment: "Perfect picture!" },
    ],
  },
  {
    userName: "barked",
    userImage: userPost2,
    userPost: imgPost2,
    pictureLiked: userLiked2,
    whoLiked: "adorable_animals",
    numberOfLikes: 44.831,
    postCaption: "Soninnho gostoso",
    numberOfComments: 3.245,
    comments: [
      { userName: "meowed", comment: "Que coisa mais fofa!!" },
      { userName: "adorable_animals", comment: "Sooo cute!" },
    ],
  },
];
