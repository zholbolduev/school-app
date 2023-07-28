import { IComments } from "./types";

export const getComments = async (): Promise<IComments[]> => {
    return [
      {
        id: "1",
        body: "Захватывающий курс для начинающих программистов! Изучите основы разработки вместе с нами.",
        username: "Edil",
        userId: "1",
        parentId: null,
        createdAt: "2023-07-16T23:00:33.010+02:00",
      },
      {
        id: "2",
        body: "Курс был очень интересным и познавательным! Я научился многому новому и уже применяю полученные знания в своих проектах.",
        username: "Unknown",
        userId: "2",
        parentId: null,
        createdAt: "2023-07-16T23:00:33.010+02:00",
      },
      {
        id: "3",
        body: "Большое спасибо за ваш отзыв! Мы рады, что вам понравился курс, и надеемся, что он помог вам освоить новые навыки разработки.",
        username: "Makers",
        userId: "2",
        parentId: "1",
        createdAt: "2023-07-16T23:00:33.010+02:00",
      },
      {
        id: "4",
        body: "Мы рады, что вам понравился курс и что вы уже можете применять полученные знания на практике. Желаем вам успехов в дальнейшем обучении и разработке!",
        username: "Makers",
        userId: "2",
        parentId: "2",
        createdAt: "2023-07-16T23:00:33.010+02:00",
      },
    ];
  };
  
  export const createComment = async (text: string, parentId = null) => {
    return {
      id: Math.random().toString(36).substr(2, 9),
      body: text,
      parentId,
      userId: "1",
      username: "Edil",
      createdAt: new Date().toISOString(),
    };
  };
  
  export const updateComment = async (text: string) => {
    return { text };
  };
  
  export const deleteComment = async () => {
    return {};
  };