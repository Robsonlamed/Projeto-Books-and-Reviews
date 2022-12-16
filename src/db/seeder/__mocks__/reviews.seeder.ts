import { faker } from '@faker-js/faker'

export const reviewsFactory = () => {
  return [
    {
      title: faker.lorem.words(2),
      textReview: [faker.lorem.paragraph()],
      updateDate: [new Date()],
      score: 3,
    },
  ];
};
