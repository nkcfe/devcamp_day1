import { cache } from 'react';

import prisma from '@/db';

export const getProducts = cache(async () => {
  const products = await prisma.product.findMany({
    select: {
      id: true,
      name: true,
      price: true,
      image: true,
    },
  });

  if (!products) return null;

  return products;
});

export const getProduct = cache(async (id: string) => {
  const product = await prisma.product.findUnique({
    where: {
      id: id,
    },
  });

  if (!product) return null;

  return product;
});
