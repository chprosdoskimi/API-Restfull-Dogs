import multer from 'multer';
import Photo from '../models/Photo';

import multerconfig from '../config/multer';

const upload = multer(multerconfig).single('photo');

class PhotoController {
  async index(req, res) {
    try {
      const photos = await Photo.findAll({
        attributes: ['id', 'name', 'weight', 'age', 'views', 'user_id', 'url'],
      });
      return res.status(200).json(photos);
    } catch (e) {
      return res.status(400).json(e);
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      console.log(id);
      const photo = await Photo.findByPk(id);

      const updateViews = photo.views + 1;
      photo.update({ views: updateViews });

      return res.status(200).json(photo);
    } catch (e) {
      return res.status(400).json({ errors: ['Photo does not exists'] });
    }
  }

  store(req, res) {
    return upload(req, res, async (error) => {
      if (error) {
        return res.status(400).json({
          errors: [error.code],
        });
      }

      try {
        const { originalname, filename } = req.file;
        // eslint-disable object-curly-newline
        const { name, weight, age } = req.body;

        const photo = await Photo.create({
          originalname,
          filename,
          user_id: req.userId,
          name,
          weight,
          age,
          views: 0,
        });

        return res.status(200).json(photo);
      } catch (e) {
        console.log(e);
        return res.status(400).json({ errors: ['User does not exists'] });
      }
    });
  }

  async delete(req, res) {
    try {
      const photo = await Photo.findByPk(req.params.id);

      if (!photo) {
        return res.status(400).json({ errors: ['Photo does not exists.'] });
      }

      if (req.userId !== photo.user_id) {
        console.log(req.userId, photo.user_id);
        return res.status(400).json({
          errors: ['You do not have permission to delete this photo.'],
        });
      }
      await photo.destroy();

      return res.json('Photo deleted');
    } catch (e) {
      return res
        .status(400)
        .json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async update(req, res) {
    try {
      const photo = await Photo.findByPk(req.params.id);

      if (!photo) {
        return res.status(400).json({ errors: ['Photo does not exists'] });
      }
      if (photo.user_id !== req.userId) {
        return res.status(401).json({
          errors: ['You do not have permission to update this Photo.'],
        });
      }
      const newData = await photo.update(req.body);

      return res.status(201).json(newData);
    } catch (e) {
      return res
        .status(400)
        .json({ errors: e.errors.map((err) => err.message) });
    }
  }
}

export default new PhotoController();
