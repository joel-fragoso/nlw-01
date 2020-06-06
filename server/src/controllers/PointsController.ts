import { Request, Response } from 'express';
import knex from '../database/connection';

class PointsController {
  async index(req: Request, res: Response) {
    const { city, uf, items } = req.query;

    const parsedItems = String(items)
      .split(',')
      .map(item => Number(item.trim()));

    const points = await knex('points')
      .join('points_items', 'points.id', '=', 'points_items.point_id')
      .whereIn('points_items.item_id', parsedItems)
      .where('city', String(city))
      .where('uf', String(uf))
      .distinct()
      .select('points.*');

    const serialiazedPoints = points.map(point => {
      return {
        ...point,
        image_url: `http://192.168.1.26:3333/uploads/${point.image}`
      };
    });

    return res.json(serialiazedPoints);
  }

  async show(req: Request, res: Response) {
    const { id } = req.params;

    const point = await knex('points').where('id', id).first();

    if (!point) {
      return res.status(400).json({ message: 'Point not found!'});
    }

    const serialiazedPoint = {
      ...point,
      image_url: `http://192.168.1.26:3333/uploads/${point.image}`
    };

    const items = await knex('items')
      .join('points_items', 'items.id', '=', 'points_items.item_id')
      .where('points_items.point_id', id)
      .select('title');

    return res.json({ point: serialiazedPoint , items });
  }

  async store(req: Request, res: Response) {
    const {
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf,
      items
    } = req.body;
  
    const trx = await knex.transaction();

    const point = {
      image: req.file.filename,
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf
    };
  
    const insertedIds = await trx('points').insert(point);
  
    const point_id = insertedIds[0];
  
    const pointsItems = items
      .split(',')
      .map((item: string) => Number(item.trim()))
      .map((item_id: Number) =>{
        return {
          point_id,
          item_id
        };
    });
  
    await trx('points_items').insert(pointsItems);

    await trx.commit();
  
    return res.json({
      id: point_id,
      ...point
    });
  }
}

export default PointsController;
