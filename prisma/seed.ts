
import { PrismaClient, Role } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const seller = await prisma.user.upsert({
    where: {
      email: "seller@example.com"
    },
    update: {},
    create: {
      name: "Demo Seller",
      email: "seller@example.com",
      role: Role.SELLER
    }
  });

  await prisma.user.upsert({
    where: {
      email: "buyer@example.com"
    },
    update: {},
    create: {
      name: "Demo Buyer",
      email: "buyer@example.com",
      role: Role.BUYER
    }
  });

  await prisma.service.create({
    data: {
      title: "Telegram Channel Promotion",
      description:
        "Demo marketplace service for testing buyer and seller workflows.",
      category: "Marketing",
      price: 25,
      sellerId: seller.id
    }
  });

  console.log("Database seeded successfully.");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
