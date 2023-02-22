import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Profiles } from './entities/Profiles.entity';
import { CreateProfilesDto } from './dto/CreateProfilesDto';

@Injectable()
export class ProfilesService {
  Profiles: Profiles[] = [];

  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.profiles.findMany({
      include: {
        gameFavorites: {
          include: {
            game: {
              include: {
                genres: {
                  include: {
                    genre: { select: { name: true } },
                  },
                },
              },
            },
          },
        },
        user: {
          select: {
            name: true,
            email: true,
          },
        },
      },
    });
  }

  findOne(id: number) {
    return this.prisma.profiles.findFirst({
      where: { id },
      include: {
        user: {
          select: {
            name: true,
            email: true,
          },
        },
      },
    });
  }

  async create(createProfilesDto: CreateProfilesDto) {
    let result;
    try {
      const profiles: Profiles = { ...createProfilesDto };
      result = await this.prisma.profiles.create({
        data: profiles,
      });
    } catch (e) {
      if (e.code === 'P2003') {
        //P2003 = pkKey not exist
        throw new NotFoundException({
          error: 'UserNotfound',
          code: 404,
          type: 'BadRequest',
        });
      } else {
        console.log('---------------------------------------------');
        console.log(Object.keys(e));
        console.log(e.code);
        console.log('---------------------------------------------');
        throw e;
      }
    }
    return result;
  }
}
