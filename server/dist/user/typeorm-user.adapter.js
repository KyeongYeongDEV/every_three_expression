"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeOrmUserAdapter = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./user.entity");
let TypeOrmUserAdapter = class TypeOrmUserAdapter {
    userRepository;
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    findUserInfoByEmail(email) {
        return this.userRepository.createQueryBuilder('user')
            .where('user.email = :email', { email })
            .getOne();
    }
    findUserByEmail(email) {
        return this.userRepository.createQueryBuilder('user')
            .where('user.email = :email', { email })
            .getOne();
    }
    findUserByUid(u_id) {
        return this.userRepository.createQueryBuilder('user')
            .select([
            'user.u_id',
            'user.email',
        ])
            .where('user.u_id = :u_id', { u_id })
            .getOne();
    }
    saveUser(user) {
        return this.userRepository.save(user);
    }
};
exports.TypeOrmUserAdapter = TypeOrmUserAdapter;
exports.TypeOrmUserAdapter = TypeOrmUserAdapter = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.UserEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TypeOrmUserAdapter);
//# sourceMappingURL=typeorm-user.adapter.js.map