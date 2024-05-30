const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  // queries here
  // Read data
  //   const allCustomers = await prisma.customer.findMany();
  // Write data
  //   await prisma.address.create({
  //     data: {
  //       address: "47 MySakila Drive",
  //       customers: {
  //         create: { first_name: "David", last_name: "Goggins" },
  //       },
  //     },
  //   });
  //   const allAddresses = await prisma.address.findMany({
  //     include: {
  //       customers: true,
  //     },
  //   });
  //   console.dir(allAddresses, { depth: null });

  // update data
  const customer = await prisma.customer.update({
    where: { customer_id: 1 },
    data: { last_name: "Beckham" },
  });

  console.log(customer);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
