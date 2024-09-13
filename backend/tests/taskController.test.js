const request = require('supertest');
const app = require('../app');
const mongoose = require('mongoose');

describe('Task Controller', () => {
  beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  it('should create a new task', async () => {
    const res = await request(app)
      .post('/api/tasks')
      .send({
        userId: '123',
        title: 'Complete Homework',
        description: 'Finish math and science homework',
        dueDate: '2024-09-15',
        priority: 'high',
      });

    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('_id');
  });

  it('should get all tasks', async () => {
    const res = await request(app).get('/api/tasks');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
  });

  it('should update a task', async () => {
    const task = await request(app)
      .post('/api/tasks')
      .send({
        userId: '123',
        title: 'Complete Homework',
        dueDate: '2024-09-15',
      });

    const res = await request(app)
      .put(`/api/tasks/${task.body._id}`)
      .send({
        title: 'Update Homework Title',
      });

    expect(res.statusCode).toEqual(200);
    expect(res.body.title).toBe('Update Homework Title');
  });

  it('should delete a task', async () => {
    const task = await request(app)
      .post('/api/tasks')
      .send({
        userId: '123',
        title: 'Complete Homework',
        dueDate: '2024-09-15',
      });

    const res = await request(app).delete(`/api/tasks/${task.body._id}`);
    expect(res.statusCode).toEqual(204);
  });
});
