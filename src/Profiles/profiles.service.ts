import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Profiles } from './entities/Profiles.entity';
import { CreateProfilesDto } from './dto/CreateProfilesDto';

@Injectable()
export class ProfilesService {
  Profiles: Profiles[] = [];

  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.profiles.findMany();
  }

  findOne(id: number): Promise<Profiles> {
    return this.prisma.profiles.findUnique({ where: { id } });
  }

  create(createProfilesDto: CreateProfilesDto) {
    const profiles: Profiles = { ...createProfilesDto };
    return this.prisma.profiles.create({
      data: profiles,
    });
  }
}
