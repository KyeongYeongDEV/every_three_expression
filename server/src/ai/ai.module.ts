import { Module } from "@nestjs/common";
import { AiController } from "./ai.controller";
import { AiService } from "./ai.service";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { ExpressionEntity } from "../expression/domain/expression.entity";
import { QdrantService } from "./qdrant/qdrant.service";
import { QdrantRepository } from "./qdrant/qdrant.repository";

@Module({
  imports : [
    ConfigModule, 
    TypeOrmModule.forFeature([ExpressionEntity]),
  ],
  controllers : [AiController],
  providers : [AiService, QdrantService, QdrantRepository],
})
export class AIModule{};