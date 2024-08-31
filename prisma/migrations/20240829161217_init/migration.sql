-- AlterTable
ALTER TABLE "Unit" ALTER COLUMN "lastMaintenanceDate" DROP NOT NULL,
ALTER COLUMN "lastMaintenanceMileage" DROP NOT NULL,
ALTER COLUMN "fuelLevel" DROP NOT NULL;
