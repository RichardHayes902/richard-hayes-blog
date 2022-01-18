-- CreateTable
CREATE TABLE "Contact" (
    "id" SERIAL NOT NULL,
    "message" TEXT NOT NULL,
    "email" TEXT,
    "sent" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Contact_pkey" PRIMARY KEY ("id")
);
