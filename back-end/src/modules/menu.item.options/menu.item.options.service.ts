import { Injectable } from '@nestjs/common';
import { CreateMenuItemOptionDto } from './dto/create-menu.item.option.dto';
import { UpdateMenuItemOptionDto } from './dto/update-menu.item.option.dto';

@Injectable()
export class MenuItemOptionsService {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  create(createMenuItemOptionDto: CreateMenuItemOptionDto) {
    return 'This action adds a new menuItemOption';
  }

  findAll() {
    return `This action returns all menuItemOptions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} menuItemOption`;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  update(id: number, updateMenuItemOptionDto: UpdateMenuItemOptionDto) {
    return `This action updates a #${id} menuItemOption`;
  }

  remove(id: number) {
    return `This action removes a #${id} menuItemOption`;
  }
}
