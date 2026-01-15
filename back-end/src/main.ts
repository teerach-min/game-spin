import { NestFactory } from '@nestjs/core';
import { VersioningType, ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { validationExceptionFactory } from './common/errors/factories/validation-exception.factory';
import { PrismaService } from './core/prisma/services/prisma.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: false,
  });

  app.setGlobalPrefix('api');
  app.enableVersioning({
    type: VersioningType.URI,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      exceptionFactory: validationExceptionFactory,
    }),
  );

  // Test database connection
  try {
    const prismaService = app.get(PrismaService);
    console.log('🔄 Testing database connection...');
    await prismaService.$connect();
    console.log('✅ Database connection successful!');
    
    // Test query to verify connection
    const result = await prismaService.$queryRaw`SELECT 1 as test`;
    console.log('✅ Database query test successful!', result);
  } catch (error) {
    console.error('❌ Database connection failed:', error);
    console.error('DATABASE_URL:', process.env.DATABASE_URL ? 'Set' : 'Not set');
    throw error;
  }

  await app.listen(process.env.PORT || 8000);

  console.log(
    `=========== Server is running on port ${process.env.PORT || 8000} ============`,
  );
}
bootstrap();
