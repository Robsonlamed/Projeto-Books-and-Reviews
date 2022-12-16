import { faker } from '@faker-js/faker'

export const bookFactory = (id: any) => {
    return {
      title: faker.lorem.words(3),
      releaseDate: new Date(),
      language: ['portugues', 'ingles'],
      status: true,
      reviewId: id,
      author: faker.name.fullName()
    }
  }
