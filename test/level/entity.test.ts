import { LevelAttributes, Level } from "../../src/domain/entities/level-entity";

describe('Level entity', () => {
  const sampleProps: LevelAttributes = {
    id: '1',
    code: 'LVL001',
    name: 'Beginner',
    createdAt: '2023-01-01T00:00:00.000Z',
    updatedAt: '2023-01-02T00:00:00.000Z',
  };

  test('should create a Level instance with correct properties', () => {
    const level = new Level(sampleProps);

    expect(level.id).toBe(sampleProps.id);
    expect(level.code).toBe(sampleProps.code);
    expect(level.name).toBe(sampleProps.name);
    expect(level.createdAt).toEqual(new Date(sampleProps.createdAt!));
    expect(level.updatedAt).toEqual(new Date(sampleProps.updatedAt!));
  });

  test('should create a Level instance without createdAt and updatedAt', () => {
    const propsWithoutDates: LevelAttributes = {
      id: '1',
      code: 'LVL001',
      name: 'Beginner',
    };

    const level = new Level(propsWithoutDates);

    expect(level.createdAt).toBeUndefined();
    expect(level.updatedAt).toBeUndefined();
  });

  test('should convert Level instance to JSON', () => {
    const level = new Level(sampleProps);
    const json = level.toJSON();

    expect(json.id).toBe(sampleProps.id);
    expect(json.code).toBe(sampleProps.code);
    expect(json.name).toBe(sampleProps.name);
    expect(json.createdAt).toBe('2023-01-01T00:00:00.000Z');
    expect(json.updatedAt).toBe('2023-01-02T00:00:00.000Z');
  });

  test('should create a Level instance using CreateProperties method', () => {
    const level = Level.CreateProperties(sampleProps);

    expect(level instanceof Level).toBe(true);
    expect(level.id).toBe(sampleProps.id);
    expect(level.code).toBe(sampleProps.code);
    expect(level.name).toBe(sampleProps.name);
    expect(level.createdAt).toEqual(new Date(sampleProps.createdAt!));
    expect(level.updatedAt).toEqual(new Date(sampleProps.updatedAt!));
  });
});
